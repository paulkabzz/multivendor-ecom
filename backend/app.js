const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to parse cookies
app.use(cookieParser());

// Middleware for Cross-Origin Resource Sharing (CORS)
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Serve static files from the 'uploads' directory
app.use("/", express.static("uploads"));

// Middleware to parse URL-encoded request bodies with extended options and increased limit
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// Configuration based on environment
if (process.env.NODE_ENV !== "production") {
  // Load environment variables from .env file in development
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

// Import user routes
const user = require("./controller/user");
app.use("/api/v2/user/", user);

// Middleware for handling errors
app.use(ErrorHandler);

module.exports = app;
