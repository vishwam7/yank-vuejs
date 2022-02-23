module.exports = {
	ensureAuthenticated: function (req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		}
		req.flash("error_msg", "Please log in to view that resource");
		//front end of login is not yet created
		res.render("http://localhost:8080/authorized");
	},
	forwardAuthenticated: function (req, res, next) {
		console.log("authentication called!!");
		if (!req.isAuthenticated()) {
			return next();
		}
		res.render("http://localhost:8080");
	},
};
