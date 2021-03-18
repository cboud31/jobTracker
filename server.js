// This is the web server.
const express = require('express');
const server = express();

// Access and load env variables
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

// CORS

// Use morgan middleware to log all requests.
const morgan = require('morgan');
server.use(morgan('dev'));

// Bring in the DB connection
const { client } = require('./db');

// Connect to the server.
const PORT = process.env.PORT || 5000;
server.listen(PORT, async () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);

  try {
    await client.connect();
    console.log('Connection to database is successful!');
  } catch (error) {
    console.error('Error connecting to database!');
  }
});
