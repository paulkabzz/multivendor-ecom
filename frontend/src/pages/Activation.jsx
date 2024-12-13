import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import { server } from "../server";

/**
 * Component for activating user account.
 */
const ActivationPage = () => {
  const { activation_token } = useParams(); // Get activation token from URL params
  const [error, setError] = useState(false); // State variable for error handling
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation

  // Effect to send activation request when activation token is present
  useEffect(() => {
    if (activation_token) {
      const activationEmail = async () => {
        try {
          const res = await axios.post(`${server}/user/activation`, {
            activation_token,
          });
          console.log(res.data.message); // Log activation message
        } catch (error) {
          console.error(error.response.data.message); // Log error message
          setError(true); // Set error state to true
        }
      };

      activationEmail(); // Call activationEmail function
    }
  }, [activation_token]); // Dependency array includes activation_token

  // Effect to redirect to homepage after account creation message is displayed
  useEffect(() => {
    if (!error) {
      const timer = setTimeout(() => {
        navigate("/"); // Redirect to homepage
      }, 5000); // Redirect after 5 seconds (adjust as needed)
      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [error, navigate]); // Dependency array includes error and navigate

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Conditional rendering based on error state */}
      {error ? (
        <p>Your token is expired.</p>
      ) : (
        <p>
          Your account has been created successfully! You can now login using
          your credentials.
        </p>
      )}
    </div>
  );
};

export default ActivationPage;
