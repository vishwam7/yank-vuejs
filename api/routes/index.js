const express = require("express");
const router = express.Router();
const path = require("path");
const authController = require("./../controllers/authController");
const userController = require("./../controllers/userController");
const products = require("./../controllers/products");

//OLD basic routes::
// router.post("/login", forwardAuthenticated, loginRegister.login);
// router.post("/register", loginRegister.register);

//NEW advanced routes::
router.post("/api/signup", authController.signup);
router.post("/api/login", authController.login);
router.post("/api/forgotPassword", authController.forgotPassword);
router.post("/api/resetPassword/:token", authController.resetPassword);

router.get("/api/users/:id", userController.getUser);

router.get("/api/products", authController.protect, products.getAll);
router.get("/api/buyNow/:id", products.buyNow);

router.get("/dashboard", authController.protect);

module.exports = router;
