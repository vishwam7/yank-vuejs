const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const authController = require('./../controllers/authController');
const userController = require('./../controllers/userController');
const adminController = require('../controllers/adminController');
const products = require('../controllers/productsController');

// OLD basic routes::
// router.post("/login", forwardAuthenticated, loginRegister.login);
// router.post("/register", loginRegister.register);

// NEW advanced routes::
router.post('/api/signup', authController.signup);
router.post('/api/login', authController.login);
router.post('/api/forgotPassword', authController.forgotPassword);
router.post('/api/resetPassword/:token', authController.resetPassword);

/**
 * @description User route, used to get the user's profile
 */
router.get('/api/users/me', authController.protect, userController.me);
router.post(
  '/api/users/:id',
  authController.protect,
  authController.restrictTo('admin'),
  adminController.updateUser
);

router.get('/api/products', authController.protect, products.getAll);
router.post('/api/productRegister', products.registerProduct);

/**
 * @description Subscription route, used to create a stripe subscription
 */
router.post('/api/buyNow/:id', authController.protect, products.subscribe);

/**
 * @description Admin route, used to get a list of all users
 */
router.get('/api/users/logout', authController.protect, authController.logOut);

/**
 * @description Admin route, used to get a list of all users
 */
router.get(
  '/api/admin/users',
  authController.protect,
  authController.restrictTo('admin'),
  adminController.getUsers
);

router.get('/dashboard', authController.protect);

module.exports = router;
