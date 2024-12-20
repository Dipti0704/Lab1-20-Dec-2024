// Importing the Express framework
const express = require('express');

// Initializing the Express application
const app = express();

// Define the port for the application
const PORT = 3000;

// Define a simple "Hello World" API endpoint
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
