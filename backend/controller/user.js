const express = require("express");
const path = require("path");
const router = express.Router();
const { upload } = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const User = require("../model/user");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const sendToken = require("../utils/jwtToken");
const catchAsyncError = require("../middleware/catchAsyncError");
const { isAuthenticated } = require("../middleware/auth");
const html = require("../utils/mailHTML");

router.post(
  "/create-user",
  upload.single("file"),
  /**
   * @param {Request} req - The request object.
   * @param {Response} res - The response object.
   * @param {NextFunction} next - The next middleware function in the middleware chain.
   */ async (req, res, next) => {
    try {
      // Extracts name, email, and password from the request body
      const { name, email, password } = req.body;
      // Checks if a user with the given email already exists in the database
      const userEmail = await User.findOne({ email });
      if (userEmail) {
        // If user exists, delete the uploaded file to avoid unused files
        const filename = req.file.filename;
        const filePath = `uploads/${filename}`;
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error(err);
            res.status(500).json({ message: "Error deleting file..." });
          }
        });
        // Sends an error response indicating the user already exists
        return next(
          new ErrorHandler("User with that email already exists", 400)
        );
      }

      // Constructs the file URL from the uploaded file's filename
      const filename = req.file.filename;
      const fileUrl = path.join(filename);

      /**
       * Checks if the given publicID is unique within the User collection.
       * @param {string} publicID - The public ID to check for uniqueness.
       * @returns {Promise<boolean>} - True if the ID is unique, false otherwise.
       */
      async function isIDUnique(publicID) {
        const user = await User.findOne({ "avatar.public_id": publicID });
        return !user; // Returns true if no user is found, indicating the ID is unique
      }

      /**
       * Generates a random public ID based on the filename and a specified length.
       * Ensures the generated ID is unique by checking against existing IDs in the database.
       * @param {string} filename - The filename to base the public ID on.
       * @param {number} length - The desired length of the public ID.
       * @returns {string} - A unique public ID.
       */
      function generateRandomPublicID(filename, length) {
        const chars =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let publicID = filename.replace(/\.[^/.]+$/, ""); // Removes file extension
        const charsLength = chars.length;

        // Appends random characters until the desired length is reached
        while (publicID.length < length) {
          const randomIndex = Math.floor(Math.random() * charsLength);
          publicID += chars.charAt(randomIndex);
        }

        // Ensures the generated ID is unique
        while (!isIDUnique(publicID)) {
          publicID = generateRandomPublicID(filename, length); // Regenerate the ID if not unique
        }

        return publicID;
      }

      // Initializes the avatar public ID with a default value
      let avatarPublicId = "";
      if (req.file) {
        // Generates a unique public ID for the uploaded file if present
        avatarPublicId = generateRandomPublicID(filename, 20);
      }

      const user = {
        name: name,
        email: email,
        password: password,
        avatar: {
          url: fileUrl,
          public_id: avatarPublicId,
        },
      };
      const activationToken = createActivationToken(user);

      const activationURL = `http://localhost:3000/activation/${activationToken}`;

      try {
        await sendMail({
          email: user.email,
          subject: `Activate your Shop Near Me account.`,
          message: html(user.name, activationURL),
        });

        res.status(201).json({
          success: true,
          user,
          message: `A link to activate your account has been sent to your email.`,
        });
      } catch (error) {
        return next(new ErrorHandler(error, 500));
      }
    } catch (err) {
      return next(new ErrorHandler(err, 400));
    }
  }
);

//create activation token
const createActivationToken = (user) => {
  return jwt.sign(user, process.env.ACTIVATION_SECRET, {
    expiresIn: "5m",
  });
};

//Activate user
router.post(
  "/activation",
  catchAsyncErrors(
    /**
     * Handles user activation. Verifies the activation token, checks if the user already exists,
     * and creates a new user if the activation token is valid and the user does not exist.
     *
     * @param {Request} req - The request object containing the activation token.
     * @param {Response} res - The response object to send the activation result.
     * @param {NextFunction} next - The next middleware function in the middleware chain.
     * @returns {Promise<void>} - A promise that resolves when the activation process is completed or rejects with an error.
     */
    async (req, res, next) => {
      try {
        const { activation_token } = req.body;

        // Verify the activation token using the activation secret
        const newUser = jwt.verify(
          activation_token,
          process.env.ACTIVATION_SECRET
        );

        // If the activation token is invalid, return a 400 error with a custom error message
        if (!newUser) {
          return next(new ErrorHandler("Invalid token", 400));
        }

        // Extract the user data from the verified token
        const { name, email, password, avatar } = newUser;

        // Check if a user with the same email already exists in the database
        let user = await User.findOne({ email });

        // If a user with the same email already exists, return a 400 error with a custom error message
        if (user) {
          return next(
            new ErrorHandler("User with this email address already exists", 400)
          );
        }

        // If the user does not exist and the activation token is valid, create a new user in the database
        user = await User.create({
          name,
          email,
          password,
          avatar,
        });

        // Send a token in the response to the client
        sendToken(user, 201, res);
      } catch (error) {
        // If an error occurs during the activation process, pass the error to the next error handling middleware
        return next(new ErrorHandler(error.message, 500));
      }
    }
  )
);

// User login
router.post(
  "/login-user",
  catchAsyncErrors(
    /**
     * Handles user login.
     *
     * @param {Request} req - The request object containing the user's email and password.
     * @param {Response} res - The response object to send the login result.
     * @param {NextFunction} next - The next middleware function in the middleware chain.
     * @returns {Promise<void>} - A promise that resolves when the login process is completed or rejects with an error.
     */
    async (req, res, next) => {
      try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
          return next(
            new ErrorHandler("Please provide an email and password", 400)
          );
        }

        // Find the user in the database using the provided email
        const user = await User.findOne({ email }).select("+password");

        // Check if the user exists
        if (!user) {
          return next(new ErrorHandler("Invalid email or password", 400));
        }

        // Compare the provided password with the stored password
        const isPasswordValid = await user.comparePassword(password);

        // Check if the password is valid
        if (!isPasswordValid) {
          return next(new ErrorHandler("Invalid email or password", 400));
        }

        // If the login is successful, send a token in the response
        sendToken(user, 201, res);
      } catch (error) {
        // If an error occurs during the login process, pass the error to the next error handling middleware
        return next(new ErrorHandler(error.message, 500));
      }
    }
  )
);
// 84%

// Load users
router.get(
  "/getuser",
  isAuthenticated,
  catchAsyncError(
    /**
     * Retrieves the user data from the database based on the authenticated user's ID.
     *
     * @param {Request} req - The request object containing the authenticated user's ID.
     * @param {Response} res - The response object to send the retrieved user data.
     * @param {NextFunction} next - The next middleware function in the middleware chain.
     * @returns {Promise<void>} - A promise that resolves when the user data is successfully retrieved or rejects with an error.
     */
    async (req, res, next) => {
      try {
        // Find the user in the database using the authenticated user's ID
        const user = await User.findById(req.user.id);

        // If the user is not found, return a 400 error with a custom error message
        if (!user) return next(new ErrorHandler("User not found", 400));

        // If the user is found, send a 200 response with the user data
        res.status(200).json({
          success: true,
          user,
        });
      } catch (error) {
        // If an error occurs during the retrieval process, pass the error to the next error handling middleware
        return next(new ErrorHandler(error.message, 500));
      }
    }
  )
);

// Logout The Users

router.get('/logout', isAuthenticated, catchAsyncError(/**
 * Handles user logout.
 *
 * @param {Request} req - The request object containing the authenticated user's ID.
 * @param {Response} res - The response object to send the logout result.
 * @param {NextFunction} next - The next middleware function in the middleware chain.
 * @returns {Promise<void>} - A promise that resolves when the logout process is completed or rejects with an error.
 */
async(req, res, next) => {
  try {
        // Clear the token cookie by setting its expiration date to the current time
        res.cookie("token", null, {
          expires: new Date(Date.now()),
          httpOnly: true,
          // secure: true,
          // sameSite: "none"
        });

        // Send a 201 response with a success message
        res.status(201).json({
          success: true,
          message: "Logged out successfully!"
        });
  } catch (error) {
        // If an error occurs during the logout process, pass the error to the next error handling middleware
        return next(new ErrorHandler(error.message, 500));
  }
}));

module.exports = router;
