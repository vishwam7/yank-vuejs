const crypto = require('crypto');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
    required: [true, 'Please confirm your password'],
    validate: {
      // This only works on CREATE and save!!!
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not same',
    },
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'user2', 'user3'],
    default: 'user',
  },
  date: {
    type: Date,
    default: Date.now,
  },
  passwordChangedAt: {
    type: Date,
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  /**
   * @description Determines the stripe customer id
   */
  stripeCustomerID: {
    type: String,
    required: true,
  },
  subscriptions: {
    type: [
      new mongoose.Schema({
        /**
         * @description Determines the creation date for the subscription
         */
        createdAt: {
          type: Date,
          default: Date.now,
          required: true,
        },
        /**
         * @description Determines the stripe subscription id
         */
        subscriptionID: {
          type: String,
          required: true,
        },
        /**
         * @description Determines the stripe product id
         */
        productID: {
          type: String,
          required: true,
        },
        /**
         * @description Determines the billing interval. Possible values:
         *  - year
         *  - month
         */
        interval: {
          type: String,
          required: true,
        },
        /**
         * @description Determines the billing interval count. Possible values:
         *  - 1 if the interval is year
         *  - 1 to 12 if the interval is month
         */
        intervalCount: {
          type: Number,
          required: true,
        },
        /**
         * @description
         * True determines the last payment was successful
         * False determines the last payment had some issues
         * the default is false as when this object is created
         * the transaction has not been completed by the user
         *
         *
         * this will remain unchanged for the transactions that
         * didn't go through
         */
        status: {
          type: Boolean,
          default: false,
          required: true,
        },
        /**
         * @description
         * True determines the subscription has been deleted
         * False determines the subscription still exists and should be billed
         */
        deleted: {
          type: Boolean,
          default: false,
          required: true,
        },
        /**
         * @description Determines the last update date for the subscription
         */
        updatedAt: {
          type: Date,
          default: Date.now,
          required: true,
        },
        /**
         * @description Determines the amount paid for the subscription
         */
        amountPaid: {
          type: Number,
          required: true,
        },
      }),
    ],
    default: [],
    required: true,
  },
});

UserSchema.pre('save', async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  // hash the password with cost 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

UserSchema.pre('save', function (next) {
  if (!this.isModified('password') || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

UserSchema.pre(/^find/, function (next) {
  // this points to the current query
  this.find({active: {$ne: false}});
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
  // false means NOT changed
  return false;
};

UserSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  console.log({resetToken}, this.passwordResetToken);
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
