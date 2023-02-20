# cypress-e2e-tests
Demonstration of using Cypress to run tests against a basic test web application

## Getting Started

### Installing

* Install git
* Clone the repo: `git clone https://github.com/MattBlakeQA/cypress-e2e-tests.git`
* Install Node 18+
* Install NPM
* Install Chrome
* Install dependencies: `npm install`

### Running tests

* Run all tests in Chrome: `npm run cypress`
* Run tests using tags: `CYPRESS_TAGS=login,smoke npm run cypress`

### Report

An html report is generated automatically in `/cypress/reports`

## Help

Available list of tags:
* cart
* inventory
* login
* smoke
