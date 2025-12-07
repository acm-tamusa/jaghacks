// Vercel serverless function entry point for Express app
// This handles all /api/* routes
const app = require("../backend/app");

// Export as Vercel serverless function
module.exports = app;
