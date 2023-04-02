const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.google.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      db: {
        host: "localhost",
        user: "your_username",
        password: "your_password",
        database: "your_database_name",
      },
    },
  },
});
