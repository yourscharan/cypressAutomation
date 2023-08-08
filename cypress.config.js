const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  requestTimeout: 80000,
  responseTimeout: 80000,
  pageLoadTimeout: 90000,
  numTestsKeptInMemory: 0,
  screenshotsFolder: "cypress/Screenshots",
  chromeWebSecurity: false,
  downloadsFolder: "cypress/downloads",
  viewportHeight: 660,
  viewportWidth: 1000,
  watchForFileChanges: false,
  screenshotOnRunFailure: true,
  env: {
    development: "",
    username: "",
    password: ""
  },
  retries: {
    openMode: 0
  },
  video: false,
  projectId: "1dcjm7",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
