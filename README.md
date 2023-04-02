# DISYS Hours of Operation Validation Test
This is a Cypress-based test suite to validate that the hours of operation for DISYS are 8:30AM to 5:00PM every day (except weekends) of the week.

## Test Plan:

* Open a browser
* Navigate to the Google homepage
* Enter "DISYS" into the search bar and hit enter
* Click on the "Hours" section on the DISYS Google My Business page
* Validate that the hours displayed are 8:30AM to 5:00PM every weekday (Monday to Friday)
* Validate that the hours displayed are closed on weekends (Saturday and Sunday)

## Installation and Running Tests
### Clone the repository:

```bash
git clone https://github.com/vinchbr/disys_code_challenge.git
```
### Install the dependencies:

```bash
npm install
```

### Update the environment variables for the database connection in the cypress.config.js:
```makefile
DB_HOST=localhost
DB_USER=your-db-username
DB_PASSWORD=your-db-password
```

### Run the Cypress tests:

```bash
npm run test:chrome
```

Replace BROWSER_NAME with: electron, chrome, edge or firefox


### Run the DB tests
_Tests will fail_

```bash
npm run test:db
```
