const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const expressLayouts = require("express-ejs-layouts");
require("dotenv").config({ path: "./config.env" });
const cookieParser = require("cookie-parser");

const app = express();

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//  Populate req.cookies
app.use(cookieParser());
// Express session
// app.use(
// 	session({
// 		secret: "mamotechnolabs",
// 		resave: true,
// 		saveUninitialized: true,
// 	})
// );
//  Session setup
app.use(
	session({
		secret: "mamotechnolabs",
		cookie: {
			maxAge: 600000,
			secure: true,
		},
		saveUninitialized: false,
		resave: false,
		unset: "destroy",
	})
);

app.use(
	cors({
		origin: ["http://localhost:8080", "https://localhost:8080"],
		credentials: true,
		exposedHeaders: ["set-cookie"],
	})
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("MongoDB Connected"))
	.catch((err) => console.log(err));

app.get("/", function (req, res, next) {
	var hour = 3600000;
	// req.session.cookie.expires = new Date(Date.now() + hour);
	req.session.cookie.maxAge = hour;
	console.log(req.session);
	next();
});

// EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

//routes
app.use("/", require("./routes/index"));

const port =
	process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 5000;
app.listen(port, console.log("Server is running on port: " + port));
