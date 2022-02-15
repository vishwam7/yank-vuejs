const express = require("express");
const router = express.Router();
const path = require("path");
const { ensureAuthenticated, forwardAuthenticated } = require("../config/auth");
const loginRegister = require("./../controllers/login-register");

router.get("/login", forwardAuthenticated, loginRegister.login);
router.post("/register", loginRegister.register);
router.get("/dashboard", ensureAuthenticated);

module.exports = router;
