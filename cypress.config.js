const { defineConfig } = require("cypress");
const dotEnvConfig = require("dotenv").config();
const envConfig = require("./cypress/support/configs/envConfig");

module.exports = defineConfig({
    e2e: {
        baseUrl: "https://www.saucedemo.com",
        viewportWidth: 1920,
        viewportHeight: 1080,
        video: false,
        retries: {
            runMode: 2,
            openMode: 0,
        },
        reporter: "cypress-mochawesome-reporter",
        reporterOptions: {
            reportDir: "cypress/reports",
            charts: true,
            reportPageTitle: "Test application test results",
            embeddedScreenshots: true,
            inlineAssets: true,
        },
        setupNodeEvents(on, config) {
            // implement node event listeners here
            require("cypress-mochawesome-reporter/plugin")(on);

            // Combine Cypress' env variables with the ones from the .env file
            const env = { ...config.env, ...dotEnvConfig.parsed };

            // If the test environment is not staging, update the base url
            const testEnv = config.env["TEST_ENV"].toLowerCase();
            if (testEnv !== "staging") {
                config.baseUrl = envConfig[testEnv].baseUrl;
            }

            // Return a new config with the additional .env file variables.
            // Now we can access them using Cypress.env()
            return { ...config, env };
        },
        env: {
            TEST_ENV: "staging",
        },
    },
});
