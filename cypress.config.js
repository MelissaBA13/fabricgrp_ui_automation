const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:8080/parabank',
    specPattern: 'cypress/ui-automation/test/parabank*.js'
  },
});
