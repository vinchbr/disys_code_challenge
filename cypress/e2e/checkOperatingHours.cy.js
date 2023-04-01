import {
  googleSearchResultsPage,
  hoursContainerLocator,
} from "../pages/googleSearchResults.page";

describe("DISYS Hours of Operation Validation", () => {
  const DISYS_URL = "https://www.google.com/search?q=DISYS";
  const WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const WEEKENDS = ["Saturday", "Sunday"];
  const EXPECTED_OPEN_TIME = "8:30 AM";
  const EXPECTED_CLOSE_TIME = "5 PM";

  beforeEach(() => {
    googleSearchResultsPage.open(DISYS_URL);
  });

  // Validate that DISYS is open on weekdays from 8:30 AM to 5 PM
  it("should display correct hours for the business", () => {
    cy.get(hoursContainerLocator)
      .find("table tr")
      .each((tr) => {
        const trText = tr.text();
        let dayOfWeek = trText.split(/[0-9: \s-]/)[0];
        if (dayOfWeek === trText) {
          dayOfWeek = trText.replace("Closed", "").trim();
        }
        const hours = trText.replace(dayOfWeek, "").replace("*", "");
        // Split the td text into day of week and hours parts
        if (WEEKDAYS.includes(dayOfWeek)) {
          const [openTime, closeTime] = hours.split("–"); // Split the hours part into open and close times
          expect(openTime).to.contain(EXPECTED_OPEN_TIME);
          expect(closeTime).to.contain(EXPECTED_CLOSE_TIME);
        } else if (WEEKENDS.includes(dayOfWeek)) {
          expect(hours).to.contain("Closed");
        } else {
          throw new Error(`Unrecognized day of week: ${dayOfWeek}`);
        }
      });
  });
});

// Backend Database Schema Script:
//
// // Pseudo code since no backend DB is accessible
//     describe('DISYS Database Schema Validation', () => {
//         it('should have a table named "hours_of_operation"', () => {
// // Pseudo code to check if the "hours_of_operation" table exists
//             const tableExists = checkIfTableExists('hours_of_operation');
//             expect(tableExists).to.be.true;
//         });
//
//         it('should have columns for day_of_week, open_time, and close_time', () => {
// // Pseudo code to check if the "hours_of_operation" table has columns for day_of_week, open_time, and close_time
//             const columns = getTableColumns('hours_of_operation');
//             expect(columns).to.include('day_of_week');
//             expect(columns).to.include('open_time');
//             expect(columns).to.include('close_time');
//         });
//     });
