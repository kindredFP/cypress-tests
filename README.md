# Cypress Proof of Concept for REST API Testing

This repository contains a proof of concept for testing REST APIs using Cypress.

## Installation

1. Install the required dependencies by running the following command:
   ```
   npm install
   ```

## Running Tests

### Cypress UI Mode

To run the tests using the Cypress UI, execute the following command:
```
npm run cypress:open
```
This will open the Cypress Test Runner, where you can select and run individual test files.

### Headless Mode

To run the tests in headless mode, use the following command:
```
npm run e2e
```
This will run the tests in headless mode using Cypress run. By default, it will run all the test files.

You can also run a specific test file by specifying the `--spec` flag:
```
npm run e2e -- --spec "path/to/test/file.spec.js"
```

## Continuous Integration

Any pull requests made to this repository are automatically deployed and tested using Travis CI. The build status can be viewed using the following badge:

[![Build Status](https://www.travis-ci.com/kindredFP/cypress-tests.svg?branch=master)](https://www.travis-ci.com/kindredFP/cypress-tests)

Feel free to explore and modify the code to suit your needs. If you have any questions or encounter any issues, please don't hesitate to reach out.

