const User = require('./../model/User');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getUsers = catchAsync(async (_req, res) => {
  return res.status(200).json({
    status: 'success',
    data: await User.find({}, '-password'),
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  if (!req.params.id) {
    return next(new AppError('Invalid user ID', 400));
  }
  if (!req.body.name || !req.body.email || !req.body.role) {
    return next(new AppError('Invalid body', 400));
  }
  const doc = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: false,
  });

  if (!doc) {
    return next(new AppError('No document found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: doc,
    },
  });
});
