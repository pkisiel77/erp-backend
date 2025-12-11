/**
 * ERP Backend Application
 * Main entry point for the application
 */

const PORT = process.env.PORT || 3000;

// Simple server example - this will be expanded as the application develops
const app = {
  start() {
    console.log(`ERP Backend starting...`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`Server would run on port: ${PORT}`);
    console.log('Application initialized successfully!');
  }
};

// Start the application
app.start();

module.exports = app;
