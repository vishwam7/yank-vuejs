const passport = require("passport");
const User = require("./../model/User");
const bcrypt = require("bcryptjs");

exports.login = function (req, res) {
	// Login
	console.log("I am in log in!!");
	passport.authenticate("local", {
		successRedirect: "http://localhost:8080/",
		failureRedirect: "/login",
		failureFlash: true,
	});
	res.send("redirected!");
};

exports.register = function (req, res, next) {
	console.log("I am in register!!");
	const { name, email, password, password2 } = req.body;
	let errors = [];

	if (!name || !email || !password || !password2) {
		errors.push({ msg: "Please enter all fields" });
	}

	if (password != password2) {
		errors.push({ msg: "Passwords do not match" });
	}

	if (password.length < 6) {
		errors.push({ msg: "Password must be at least 6 characters" });
	}

	// if (errors.length > 0) {
	// 	res.render("register", {
	// 		errors,
	// 		name,
	// 		email,
	// 		password,
	// 		password2,
	// 	});
	// }
	else {
		User.findOne({ email: email }).then((user) => {
			if (user) {
				errors.push({ msg: "Email already exists" });
				// res.render("register", {
				// 	errors,
				// 	name,
				// 	email,
				// 	password,
				// 	password2,
				// });
			} else {
				const newUser = new User({
					name,
					email,
					password,
				});

				bcrypt.genSalt(10, (err, salt) => {
					bcrypt.hash(newUser.password, salt, (err, hash) => {
						if (err) throw err;
						newUser.password = hash;
						newUser
							.save()
							.then((user) => {
								res.send(user);
								// req.flash(
								// 	"success_msg",
								// 	"You are now registered and can log in"
								// );
								// res.redirect("/users/login");
							})
							.catch((err) => console.log(err));
					});
				});
			}
		});
	}
};
