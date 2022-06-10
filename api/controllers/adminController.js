const User = require('./../model/User');
const catchAsync = require('./../utils/catchAsync');

exports.getUsers = catchAsync(async (_req, res) => {
  return res.status(200).json({
    status: 'success',
    data: await User.find({}, '-password'),
  });
});
