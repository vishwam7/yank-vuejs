const User = require('./../model/User');
const catchAsync = require('./../utils/catchAsync');

exports.getUser = catchAsync(async (req, res, next) => {
  const doc = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!doc) {
    return next(new AppError('No document found with that ID', 404));
  }

  // console.log(doc);
  res.status(200).json({
    status: 'success',
    data: {
      data: doc,
    },
  });
});
