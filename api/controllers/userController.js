const catchAsync = require('./../utils/catchAsync');
const AppError = require('../utils/appError');

exports.me = catchAsync(async (req, res, next) => {
  if (!req.user) {
    return next(new AppError('Invalid user session', 401));
  }
  res.status(200).json({
    status: 'success',
    data: req.user,
  });
});
