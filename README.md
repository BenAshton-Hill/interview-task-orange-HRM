# OrangeHRM Playwright Automation Framework

This repository contains an automated UI test framework for the OrangeHRM demo application using Playwright and JavaScript.

## Tech Stack

- Playwright
- JavaScript
- Node.js

## Application Under Test

OrangeHRM Demo Site:

https://opensource-demo.orangehrmlive.com

## Framework Design

The framework follows the Page Object Model (POM) design pattern to improve:

- Maintainability
- Reusability
- Readability
- Separation of concerns

## Project Structure

```text
tests/          -> Test specifications
pages/          -> Page Object classes
fixtures/       -> Test data
utils/          -> Helper utilities
```

## Installation

Clone the repository:

```bash
git clone <repo-url>
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Running Tests

Run all tests:

```bash
npm test
```

Run tests in headed mode:

```bash
npm run test:headed
```

Open HTML report:

```bash
npm run report
```

## Implemented Test Scenarios

### Recruitment Module

- Login to application
- Navigate to Recruitment module
- Add candidate successfully
- Search for candidate
- Delete candidate

## Reporting

The framework generates:
- HTML reports
- Screenshots on failure
- Video recordings on failure
- Trace files for debugging

## Improvements Given More Time

Given additional time, the following improvements could be implemented:

- CI/CD integration using GitHub Actions
- Environment configuration support
- API integration testing
- Faker library for dynamic test data
- Cross-browser execution strategy
- Test tagging and filtering
- Data-driven testing
- Allure reporting integration
- Dockerized setup for local testing

## Trade-offs

Due to time constraints:
- Only one module was automated
- Limited negative test coverage was included
- Minimal environment configuration was implemented

The focus was placed on framework structure, maintainability, and clear test design.
