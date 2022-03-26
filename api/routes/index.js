const express = require("express");
const router = express.Router();
const path = require("path");
const authController = require("./../controllers/authController");
const { ensureAuthenticated, forwardAuthenticated } = require("../config/auth");
const loginRegister = require("./../controllers/login-register");
const products = require("./../controllers/products");

//OLD basic routes::
// router.post("/login", forwardAuthenticated, loginRegister.login);
// router.post("/register", loginRegister.register);

//NEW advanced routes::
router.post("/api/signup", authController.signup);
router.post("/api/login", authController.login);
router.post("/api/forgotPassword", authController.forgotPassword);
router.post("/api/resetPassword/:token", authController.resetPassword);

router.get("/api/products", products.getAll);
router.get("/dashboard", ensureAuthenticated);

module.exports = router;
