const app = require("./app");
const connectDatabase = require("./db/Database");
const PORT = process.env.PORT;

// Handling uncaught exceptions
process.on(
  "uncaughtException"
  /**
   * Handles uncaught exceptions within the application.
   * This function logs the error message and initiates server shutdown.
   * It is attached to the 'uncaughtException' event of the process object.
   *
   * @param {Error} err - The error object representing the uncaught exception.
   */,
  (err) => {
    console.error("Error", err.message); // Log the error message to the console.
    console.log("Shutting down the server for handling uncaught exceptions"); // Inform about the server shutdown.
  }
);

// Configuration
if (process.env.NODE_ENV !== "production") {
  // Load environment variables from .env file in development
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

// Connect to the database
connectDatabase();

// Create server
const server = app.listen(PORT || 8000, () => {
  console.log(`Server running on port ${PORT}`);
});

// Unhandled promise rejection
process.on(
  "unhandledRejection"
  /**
   * Handles unhandled promise rejections within the application.
   * This function logs the error message, initiates server shutdown, and exits the process with a failure code.
   * It is attached to the 'unhandledRejection' event of the process object.
   *
   * @param {Error} err - The error object representing the unhandled rejection.
   */,
  (err) => {
    console.error("Error", err); // Log the error message to the console.
    console.log("Shutting down the server for unhandled promise rejection"); // Inform about the server shutdown.

    server.close(() => {
      // Initiate server shutdown.
      process.exit(1); // Exit the process with a failure code (1).
    });
  }
);
