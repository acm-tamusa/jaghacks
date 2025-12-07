// Vercel serverless function entry point
// This file wraps the Express app for Vercel's serverless environment
const app = require("./app");

// Export the app as a Vercel serverless function
module.exports = app;
