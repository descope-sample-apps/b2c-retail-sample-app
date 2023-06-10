const { defineConfig } = require("cypress");

// Populate process.env with values from .env file
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    descope_domain: process.env.REACT_APP_DESCOPE_DOMAIN,
    descope_project_id: process.env.REACT_APP_DESCOPE_PROJECT_ID,
    descope_management_id: process.env.REACT_APP_DESCOPE_MANAGEMENT_ID
  },
});

