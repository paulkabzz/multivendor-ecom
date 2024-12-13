import React, { useState } from "react";
import styles from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";
import { server } from "../../server";

/**
 * Login component for user authentication.
 *
 * @returns {JSX.Element} - The rendered Login component.
 */
const Login = () => {
  const [visible, setVisible] = useState(false); // State for password visibility
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i; // Regular expression for email validation
  const navigate = useNavigate();

  /**
   * Handles changes in the email input.
   *
   * @param {Object} event - The input change event.
   */
  const handleEmailChange = (event) => setEmail(event.target.value);

  /**
   * Handles changes in the password input.
   *
   * @param {Object} event - The input change event.
   */
  const handlePasswordChange = (event) => setPassword(event.target.value);

  /**
   * Checks if the password meets the minimum length requirement.
   *
   * @param {string} pass - The password to validate.
   * @returns {boolean} - True if the password is valid, false otherwise.
   */
  const isValidPassword = (pass) => pass.length >= 8;

  /**
   * Checks if the email is in a valid format.
   *
   * @param {string} email - The email to validate.
   * @returns {boolean} - True if the email is valid, false otherwise.
   */
  const isEmailValid = (email) => regex.test(email);

  /**
   * Handles the form submission.
   *
   * @param {Object} event - The form submission event.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isEmailValid(email) || !isValidPassword(password)) return void 0;

    await axios
      .post(
        `${server}/user/login-user`,
        {
          email,
          password,
        },
        { withCredentials: true },
      )
      .then(() => {
        navigate("/");
        window.location.reload(true);
      })
      .catch(() => {
        toast.error("Invalid email or password");
      });
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login to your account
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
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
                    className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                      email.length === 0 || email === "" || !email
                        ? "border-blue-500"
                        : isEmailValid(email)
                          ? "border-green-500"
                          : "border-red-500"
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
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {/* Toggle password visibility */}
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
              {/* Remember me and forgot password */}
              <div className={`${styles.noramlFlex} justify-between`}>
                <div className={`${styles.noramlFlex}`}>
                  <input
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href=".forgot-password"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  disabled={!isEmailValid(email) || !isValidPassword(password)}
                  className={`group relative mb-5 w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                    isEmailValid(email) && isValidPassword(password)
                      ? "custom-black-50 "
                      : "custom-black-50 opacity-60"
                  }`}
                >
                  Submit
                </button>
              </div>
              {/* Link to sign up */}
              <Link to="/sign-up">
                <button
                  type="button"
                  className={`group relative w-full h-[40px] flex justify-center py-2 px-4  text-sm font-medium rounded-md text-[#35393C] border border-[#35393C] border-rounded`}
                >
                  Create New Account
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
