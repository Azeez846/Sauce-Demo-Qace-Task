const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 15000,
    viewportWidth: 1900,
    viewportHeight: 1080,
    baseUrl: 'https://www.saucedemo.com/',
    },
});
