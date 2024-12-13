const multer = require("multer");

/**
 * Middleware for handling file uploads.
 * Files are stored with a unique filename in the 'uploads' directory.
 * Files are renamed to include original filename, current timestamp, and a random number to ensure uniqueness.
 */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Set the destination folder for uploaded files
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    // Generate a unique filename for the uploaded file
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const filename = file.originalname.split(".")[0]; // Extract filename without extension
    // Construct the new filename with original name, timestamp, and random number
    cb(null, filename + "-" + uniqueSuffix + ".png");
  },
});

// Configure multer with the defined storage
exports.upload = multer({ storage: storage });
