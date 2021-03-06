const crypto = require('crypto');
const {promisify} = require('util');
const {verify, sign} = require('jsonwebtoken');
const User = require('./../model/User');
const catchAsync = require('./../utils/catchAsync');
const AppErr = require('./../utils/appError');
const sendEmail = require('./../utils/email');
const AppError = require('./../utils/appError');
const stripe = require('stripe')(process.env.STRIPE_API_KEY);
const jwtSign = promisify(sign);
const jwtVerify = promisify(verify);
const cookieTime =
  parseInt(process.env.JWT_COOKIE_EXPIRES_IN, 10) * 24 * 60 * 60 * 1000;

const signToken = async id => {
  return jwtSign({id}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = async (user, statusCode, res) => {
  const token = await signToken(user._id);
  res
    .cookie('jwt', token, {
      maxAge: cookieTime,
      httpOnly: true,
      domain:
        process.env.NODE_ENV === 'production'
          ? process.env.JWT_COOKIE_CORS_DOMAIN
          : 'localhost',
      /**
       * @description use the example code at the next line when HTTPS is configured
       * for http environment, secure cookie is rejected by the browser!
       * @example secure: process.env.NODE_ENV === 'production',
       */
      secure: false,
      sameSite: 'lax',
    })
    .status(statusCode)
    .json({
      status: 'success',
      token,
      data: {
        ...user.toObject(),
        password: undefined,
      },
    });
};

exports.signup = catchAsync(async (req, res, next) => {
  const user = await User.findOne({email: req.body.email});
  if (user) {
    return next(new AppError('An user with this email already exists', 403));
  }

  const customer = await stripe.customers.create({
    name: req.body.name,
    email: req.body.email,
  });
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    passwordChangedAt: req.body.passwordChangedAt,
    role: req.body.role,
    active: req.body.active,
    stripeCustomerID: customer.id,
  });

  await createSendToken(newUser, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const {email, password} = req.body;
  // 1)check if email and password exists
  if (!email || !password) {
    return next(new AppErr('please provide email and password', 400));
  }
  // 2)check if user exists and password is correct
  const user = await User.findOne({email}).select('+password');
  const checkPass = await user.correctPassword(password, user.password);
  if (!user || !checkPass) {
    return next(new AppErr('Invalid email or password', 401));
  }

  // 3)if everything ok,send token to client
  await createSendToken(user, 200, res);
});

exports.protect = catchAsync(async (req, _res, next) => {
  // 1) Getting token and check if it's there
  let token;
  console.log(req.headers);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }
  if (!token) {
    return next(
      new AppErr('You are not logged in! Please login to get access.', 401)
    );
  }
  // 2) validate/verification token
  const decoded = await jwtVerify(token, process.env.JWT_SECRET);

  // 3) If user still exists(checks for deleted user)
  console.log(decoded.id);
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      new AppErr('The user belong to this token no longer exists!', 401)
    );
  }

  // 4) Check if user change password after the token was issued
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppErr('User recently changed password! Please login again.', 401)
    );
  }

  // Grant access to protected route
  req.user = currentUser.toObject();
  next();
});

exports.logOut = catchAsync(async (req, res) => {
  if (req.cookies.jwt) {
    res.cookie('jwt', '', {
      maxAge: 30000,
      sameSite: 'lax',
      httpOnly: true,
      domain:
        process.env.NODE_ENV === 'production'
          ? process.env.JWT_COOKIE_CORS_DOMAIN
          : 'localhost',
      secure: false,
    });
  }
  return res.status(200).json({
    success: true,
    msg: 'You have been logged out',
  });
});

exports.restrictTo = (...roles) => {
  return (req, _res, next) => {
    // roles['admin', lead - guide].role='user'
    if (!roles.includes(req.user.role)) {
      return next(
        new AppErr(
          'You are not authorized to perform this kind of Actions!',
          403
        )
      );
    }

    next();
  };
};

exports.forgotPassword = catchAsync(async (req, res, next) => {
  // 1)Get user based on POSTed email
  const user = await User.findOne({email: req.body.email});
  if (!user) {
    return next(new AppErr('There is no user with this email!', 404));
  }

  // 2)Generate the random reset token
  const resetToken = user.createPasswordResetToken();
  await user.save({validateBeforeSave: false});

  // 3)send it to user email
  const resetURL = `${req.protocol}://${req.get(
    'host'
  )}/resetPassword/${resetToken}}`;

  const message = `Forgot your password? Submit a patch request with new password and passwordConfirm to: ${resetURL}.\n If you didn't forgot your password, please ignore this email!`;

  try {
    await sendEmail({
      email: user.email,
      subject: 'Your password reset token(valid for 10 mins)',
      message,
    });

    res.status(200).json({
      status: 'success',
      message: 'Token sent to the email',
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({validateBeforeSave: false});
    return next(
      new AppErr('There was an error sending an email. Try again later!', 500)
    );
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  // 1)Get user based on token
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: {$gt: Date.now()},
  });

  // 2)If token has not expired, and there is user, set the new password
  if (!user) {
    return next(new AppErr('Token is invalid or has expired', 400));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  // 3)Update changedPasswordAt property for the user

  // 4)Log the user in, send JWT
  createSendToken(user, 200, res);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  // 1)get user from collection
  const user = await User.findById(req.user.id).select('+password');
  if (!user) {
    return next(new AppErr('User does not exists!', 401));
  }
  // 2)check if POSTed password is correct
  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(new AppErr('Current Password is incorrect!', 401));
  }
  // 3)If password is correct update the password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();
  // User.findByIdAndUpdate will not work as intended
  // 4)Log in user , send JWT
  createSendToken(user, 200, res);
});
