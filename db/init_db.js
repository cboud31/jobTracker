// This is where we'll build the tables and populate initial data

// Import DB client & adapters here
const { client } = require('./index');

// Declare functions to drop & build tables
async function dropTables() {
  try {
    await client.query(`
    DROP TABLE IF EXISTS job_applications;
    DROP TABLE IF EXISTS users;
      `);
  } catch (error) {
    console.error(`Error dropping tables!`);
    throw error;
  }
}

// users table will need a join statement to include a user's applications
async function buildTables() {
  try {
    await client.query(`
      CREATE TABLE users(
        "userID" UUID UNIQUE NOT NULL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        "registerDate" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
        );

    CREATE TABLE job_applications(
        job_app_ID UUID UNIQUE NOT NULL PRIMARY KEY,
        "userID" UUID REFERENCES users("userID"),
        "applyDate" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
        company VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        salary VARCHAR(255) DEFAULT null,
        response BOOLEAN NOT NULL DEFAULT false,
        interview BOOLEAN NOT NULL DEFAULT false,
        offer BOOLEAN NOT NULL DEFAULT false
        );  
      `);
  } catch (error) {
    console.error(`Error building tables!`);
    throw error;
  }
}

async function rebuildDB() {
  try {
    client.connect();
    console.log('Dropping tables...');
    await dropTables();
    console.log('Re-building tables...');
    await buildTables();
    console.log('rebuildDB() finished running!');
  } catch (error) {
    throw error;
  }
}

rebuildDB()
  .catch(console.error)
  .finally(() => client.end());
