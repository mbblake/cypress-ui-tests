const { defineConfig } = require("cypress");
const dotEnvConfig = require("dotenv").config();

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

            const env = { ...config.env, ...dotEnvConfig.parsed };

            return { ...config, env };
        },
    },
});
