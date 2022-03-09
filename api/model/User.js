const crypto = require("crypto");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	passwordConfirm: {
		type: String,
		required: [true, "Please confirm your password"],
		validate: {
			// This only works on CREATE and save!!!
			validator: function (el) {
				return el === this.password;
			},
			message: "Passwords are not same",
		},
	},
	role: {
		type: String,
		enum: ["user", "user1", "user2", "user3"],
		default: "user",
	},
	date: {
		type: Date,
		default: Date.now,
	},
	passwordChangedAt: { type: Date },
	passwordResetToken: String,
	passwordResetExpires: Date,
	active: {
		type: Boolean,
		default: true,
		select: false,
	},
});

UserSchema.pre("save", async function (next) {
	//Only run this function if password was actually modified
	if (!this.isModified("password")) return next();

	//hash the password with cost 12
	this.password = await bcrypt.hash(this.password, 12);

	//Delete passwordConfirm field
	this.passwordConfirm = undefined;
	next();
});

UserSchema.pre("save", function (next) {
	if (!this.isModified("password") || this.isNew) return next();

	this.passwordChangedAt = Date.now() - 1000;
	next();
});

UserSchema.pre(/^find/, function (next) {
	//this points to the current query
	this.find({ active: { $ne: false } });
	next();
});

UserSchema.methods.correctPassword = async function (
	candidatePassword,
	userPassword
) {
	return await bcrypt.compare(candidatePassword, userPassword);
};

UserSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
	if (this.passwordChangedAt) {
		const changedTimestamp = parseInt(
			this.passwordChangedAt.getTime() / 1000,
			10
		);
		return JWTTimestamp < changedTimestamp;
	}
	//false means NOT changed
	return false;
};

UserSchema.methods.createPasswordResetToken = function () {
	const resetToken = crypto.randomBytes(32).toString("hex");

	this.passwordResetToken = crypto
		.createHash("sha256")
		.update(resetToken)
		.digest("hex");
	console.log({ resetToken }, this.passwordResetToken);
	this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

	return resetToken;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
