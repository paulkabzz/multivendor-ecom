const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken");
const User = require("../model/user");

exports.isAuthenticated = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return next(new ErrorHandler("Please login to continue", 401));

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

  // Corrected: Pass decoded.id as part of the filter object
  req.user = await User.findOne({ _id: decoded.id });
  next();
});
