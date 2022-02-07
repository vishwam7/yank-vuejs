const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");

const app = express();

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//session setup
// Express session
app.use(
	session({
		secret: "mamotechnolabs",
		resave: true,
		saveUninitialized: true,
	})
);

app.get("/", function (req, res, next) {
	var hour = 3600000;
	// req.session.cookie.expires = new Date(Date.now() + hour);
	req.session.cookie.maxAge = hour;
	console.log(req.session);
	next();
});

// app.use('/',require('./routes/index'));

const port = process.env.port || 5000;
app.listen(port, console.log("Server is running on port: " + port));
