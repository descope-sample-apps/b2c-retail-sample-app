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
    // descope_username: process.env.DESCOPE_USERNAME,
    // descope_password: process.env.DESCOPE_PASSWORD,
    descope_domain: process.env.REACT_APP_DESCOPE_DOMAIN,
    // descope_audience: process.env.REACT_APP_DESCOPE_AUDIENCE,
    // descope_scope: process.env.REACT_APP_DESCOPE_SCOPE,
    descope_project_id: process.env.REACT_APP_DESCOPE_PROJECT_ID,
    descope_management_id: process.env.REACT_APP_DESCOPE_MANAGEMENT_ID

    // descope_client_secret: process.env.DESCOPE_CLIENT_SECRET,
  },
});

