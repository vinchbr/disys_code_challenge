const { Client } = require("pg"); // using PostgreSQL as an example

// Create a client to connect to the database
const client = new Client({
  user: process.env.DB_USER || "dbuser",
  host: process.env.DB_HOST || "localhost",
  password: process.env.DB_PASSWORD || "secretpassword",
  database: "mydatabase",
  port: 5432,
});

// Connect to the database
client.connect();

describe("DISYS Database Schema Validation", () => {
  it('should have a table named "hours_of_operation"', async () => {
    // Check if the "hours_of_operation" table exists
    const res = await client.query(
      "SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'hours_of_operation');"
    );
    expect(res.rows[0].exists).to.be.true;
  });

  it("should have columns for day_of_week, open_time, and close_time", async () => {
    // Check if the "hours_of_operation" table has columns for day_of_week, open_time, and close_time
    const res = await client.query(
      "SELECT column_name FROM information_schema.columns WHERE table_name = 'hours_of_operation';"
    );
    const columns = res.rows.map((row) => row.column_name);
    expect(columns).to.include("day_of_week");
    expect(columns).to.include("open_time");
    expect(columns).to.include("close_time");
  });
});

// Disconnect from the database
client.end();
