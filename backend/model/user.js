const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name!"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email!"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [4, "Password should be greater than 4 characters"],
    select: false,
  },
  phoneNumber: {
    type: Number,
  },
  addresses: [
    {
      country: {
        type: String,
      },
      city: {
        type: String,
      },
      address1: {
        type: String,
      },
      address2: {
        type: String,
      },
      zipCode: {
        type: Number,
      },
      addressType: {
        type: String,
      },
    },
  ],
  role: {
    type: String,
    default: "user",
  },
  avatar: {
    public_id: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: true,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  resetPasswordToken: String,
  resetPasswordTime: Date,
});

//  Hash password
userSchema.pre(
  "save"
  /**
   * Middleware function to hash the password before saving the user document.
   * This function is executed before the 'save' event on the userSchema.
   *
   * @function
   * @name userSchema.pre
   * @param {string} 'save' - The event name.
   * @param {function} async - The asynchronous function to hash the password.
   * @returns {undefined} - This function does not return anything.
   *
   * @example
   * userSchema.pre('save', async function (next) {
   *   if (!this.isModified('password')) {
   *     next();
   *   }
   *
   *   this.password = await bcrypt.hash(this.password, 10);
   * });
   */,
  async function (next) {
    if (!this.isModified("password")) {
      next();
    }

    this.password = await bcrypt.hash(this.password, 10);
  }
);

// jwt token
userSchema.methods.getJwtToken =
  /**
   * Generates a JSON Web Token (JWT) for the user.
   *
   * @function getJwtToken
   * @memberof UserSchema.methods
   * @instance
   * @returns {string} - The generated JWT token.
   *
   * @example
   * const user = new User({ name: 'John Doe', email: 'johndoe@example.com', password: 'password123' });
   * user.save();
   * const token = user.getJwtToken();
   * console.log(token); // Output: <JWT_TOKEN>
   *
   * @example
   * const user = await User.findOne({ email: 'johndoe@example.com' });
   * const token = user.getJwtToken();
   * console.log(token); // Output: <JWT_TOKEN>
   */
  function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: process.env.JWT_EXPIRES,
    });
  };

// compare password
userSchema.methods.comparePassword =
  /**
   * Compares the entered password with the hashed password stored in the user document.
   *
   * @function comparePassword
   * @memberof UserSchema.methods
   * @instance
   * @param {string} enteredPassword - The password entered by the user.
   * @returns {Promise<boolean>} - A promise that resolves to true if the entered password matches the hashed password, otherwise false.
   *
   * @example
   * const user = await User.findOne({ email: 'johndoe@example.com' });
   * const isMatch = await user.comparePassword('password123');
   * console.log(isMatch); // Output: true
   *
   * @example
   * const user = await User.findOne({ email: 'johndoe@example.com' });
   * const isMatch = await user.comparePassword('wrongPassword');
   * console.log(isMatch); // Output: false
   */
  async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };

module.exports = mongoose.model("User", userSchema);
