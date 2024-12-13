import React, { useState } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

/**
 * Component for user sign-up functionality.
 */
const SignUp = () => {
  // State variables for form inputs and visibility
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  // Regular expression for email validation
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  /**
   * Function to handle changes in the email input field.
   * @param {Object} event - The event object
   */
  const handleEmailChange = (event) => setEmail(event.target.value);

  /**
   * Function to handle changes in the password input field.
   * @param {Object} event - The event object
   */
  const handlePasswordChange = (event) => setPassword(event.target.value);

  /**
   * Function to handle changes in the confirm password input field.
   * @param {Object} event - The event object
   */
  const handleConfirmPasswordChange = (event) =>
    setConfirmPassword(event.target.value);

  /**
   * Function to handle changes in the avatar file input.
   * @param {Object} event - The event object
   */
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setAvatar(file);
  };

  /**
   * Function to validate if the email is in correct format.
   * @param {string} email - The email address to validate
   * @returns {boolean} - True if the email is valid, otherwise false
   */
  const isEmailValid = (email) => emailRegex.test(email);

  /**
   * Function to validate if the password meets the criteria.
   * @param {string} password - The password to validate
   * @returns {boolean} - True if the password is valid, otherwise false
   */
  const isValidPassword = (password) => {
    const regex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    return regex.test(password);
  };

  /**
   * Function to handle form submission.
   * @param {Object} event - The event object
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if email, password, and confirm password are valid
    if (
      isEmailValid(email) &&
      isValidPassword(password) &&
      password === confirmPassword
    ) {
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      const formData = new FormData();
      formData.append("file", avatar);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);

      // Send POST request to create user
      axios
        .post(`${server}/user/create-user`, formData, config)
        .then((res) => {
          toast.success(res.data.message);
          // Clear form inputs and avatar after successful registration
          setName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setAvatar();
        })
        .catch((error) => {
          toast.error(
            "Error creating your account. Please try again later or using a different email address.",
          );
          console.error(error.response);
        });
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create a new account.
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Full Name input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="text"
                    value={name}
                    autoComplete="name"
                    onChange={(e) => setName(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                  />
                </div>
              </div>
              {/* Email input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={handleEmailChange}
                    className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                      email.length === 0 || !isEmailValid(email)
                        ? "focus:border-red-500"
                        : "focus:border-green-500"
                    }`}
                  />
                </div>
              </div>
              {/* Password input */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    type={visible ? "text" : "password"}
                    name="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {/* Password visibility toggle */}
                  {visible ? (
                    <AiOutlineEye
                      className="absolute right-2 top-2 cursor-pointer"
                      size={25}
                      onClick={() => setVisible(false)}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className="absolute right-2 top-2 cursor-pointer"
                      size={25}
                      onClick={() => setVisible(true)}
                    />
                  )}
                </div>
              </div>
              {/* Confirm Password input */}
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="mt-1 relative">
                  <input
                    type={visible ? "text" : "password"}
                    name="confirm-password"
                    autoComplete="current-password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              {/* Password criteria */}
              <div className={`${styles.noramlFlex} justify-between`}>
                <div className={`${styles.noramlFlex}`}>
                  <p className="text-[#777]">
                    Password must contain at least 8 characters, including
                    letters, numbers, special characters, and at least one
                    uppercase letter.
                  </p>
                </div>
              </div>
              {/* Avatar upload */}
              <div>
                <label
                  htmlFor="avatar"
                  className="block text-sm font-medium text-gray-700"
                ></label>
                <div className="mt-2 flex items-center">
                  <span className="inline-block h-8 w-8 rounded-full overflow-hidden ">
                    {avatar ? (
                      <img
                        src={URL.createObjectURL(avatar)}
                        alt={"avatar"}
                        className="h-full w-full object-cover rounded-full"
                      />
                    ) : (
                      <RxAvatar className="h-8 w-8" />
                    )}
                  </span>
                  <label
                    htmlFor="file-input"
                    className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-50 rounded-md shadow-sm font-md text-sm text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <span>Upload a file</span>
                    <input
                      type="file"
                      name="avatar"
                      id="file-input"
                      accept=".jpg,.png,.jpeg,.webp"
                      onChange={handleFileInputChange}
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>
              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  disabled={
                    !isEmailValid(email) ||
                    !isValidPassword(password) ||
                    password !== confirmPassword
                  }
                  className={`group mb-5 relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                    isEmailValid(email) &&
                    isValidPassword(password) &&
                    password === confirmPassword
                      ? "custom-black-50"
                      : "custom-black-50 opacity-60"
                  }`}
                >
                  Submit
                </button>
              </div>
              {/* Link to login page */}
              <Link to="/login">
                <button
                  type="button"
                  className={`group relative w-full h-[40px] flex justify-center py-2 px-4  text-sm font-medium rounded-md text-[#35393C] border border-[#35393C] border-rounded`}
                >
                  Log into existing account
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
