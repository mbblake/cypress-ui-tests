# cypress-ui-tests

Demonstration of using Cypress to run ui tests against a basic test web application

## Getting Started

### Installing

-   Install git
-   Clone the repo: `git clone https://github.com/mbblake/cypress-ui-tests.git`
-   Install Node 18+
-   Install NPM
-   Install Chrome
-   Install dependencies: `npm install`

### Running tests

-   Run all tests in Chrome for the (fake) staging environment: `npm run cypress:staging`
-   Run tests using tags: `CYPRESS_TAGS=login,smoke npm run cypress`

### Report

An html report is generated automatically in `/cypress/reports`

## Help

Available list of tags:

-   cart
-   inventory
-   login
-   smoke
