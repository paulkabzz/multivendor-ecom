/**
 * Middleware to handle errors across the application.
 * It enriches error objects with a status code and a custom message.
 * Depending on the type of error (MongoDB CastError, duplicate key, JWT errors),
 * it sets an appropriate HTTP status code and message.
 * Finally, it sends a JSON response with the error details.
 *
 * @param {Object} err - The error object that may have been thrown in the application.
 * @param {Object} res - The Express response object used to send the JSON response.
 * @param {Function} next - The next middleware function in the Express stack.
 */
module.exports = (err, res, next) => {
  // Default to 500 server error if no specific status code is present
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // Handle MongoDB CastError (invalid ObjectId)
  if (err.name === "CastError") {
    const message = `Resources not found with this ID... Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // Handle duplicate key error
  if (err.code === 11000 && err.keyValue) {
    const message = `Duplicate key ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  // Handle invalid JWT error
  if (err.name === "JsonWebTokenError") {
    const message = `Your url is invalid please try again later`;
    err = new ErrorHandler(message, 401);
  }

  // Handle expired JWT error
  if (err.name === "TokenExpiredError") {
    const message = `Your Url is expired, please try again later`;
    err = new ErrorHandler(message, 401);
  }

  // Send the error response
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
