# DISYS Hours of Operation Validation Test
This is a Cypress-based test suite to validate that the hours of operation for DISYS are 8:30AM to 5:00PM every day (except weekends) of the week.

## Test Plan:

* Open a direct link to www.google.com/?q=DISYS
* Click on the "Hours" section on the DISYS Google My Business page
* Validate that the hours displayed are 8:30AM to 5:00PM every weekday (Monday to Friday)
* Validate that the hours displayed are closed on weekends (Saturday and Sunday)

## Installation and Running Tests
### Clone the repository:

```git clone https://github.com/vinchbr/disys_code_challenge.git```
### Install the dependencies:

```npm install```

#### Update the environment variables for the database connection in the cypress.config.js:

### Run the tests:

```npm run test```
