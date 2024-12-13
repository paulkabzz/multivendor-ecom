/**
 * Wraps an asynchronous function, ensuring any thrown errors are passed to the next middleware.
 * This allows for centralized error handling in Express applications.
 *
 * @param {Function} theFunc - The asynchronous function to be wrapped. This function should
 *                             take Express's `req`, `res`, and `next` parameters.
 * @returns {Function} A function that takes Express's `req`, `res`, and `next` parameters. When called,
 *                      it executes `theFunc` and ensures any errors are caught and passed to `next`.
 */
module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch(next);
};
