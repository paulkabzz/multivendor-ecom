const nodemailer = require("nodemailer");

/**
 * Sends an email using Nodemailer.
 *
 * @param {Object} options - The options for sending the email.
 * @param {string} options.email - The recipient's email address.
 * @param {string} options.subject - The subject of the email.
 * @param {string} options.message - The HTML content of the email.
 *
 * @returns {Promise<void>} - A promise that resolves when the email is sent successfully.
 *
 * @throws {Error} - If the email fails to send.
 *
 * @example
 * const sendMail = require('./sendMail');
 *
 * sendMail({
 *   email: 'recipient@example.com',
 *   subject: 'Hello from SNM',
 *   message: '<h1>Welcome!</h1>',
 * })
 * .then(() => console.log('Email sent successfully!'))
 * .catch(error => console.error('Failed to send email:', error));
 */

const sendMail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    service: process.env.SMPT_SERVICE,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMPT_MAIL, // generated ethereal user
      pass: process.env.SMPT_PASSWORD, // generated ethereal password
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    html: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
