// Import the pre-baked middleware
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
// Instantiate the server by invoking express
const server = express();

// We use the middleware
server.use(express.json());
server.use(cors());
server.use(helmet());
// server.use("/api/form", formRouter);

// Flesh out a dummy API
server.get("/", (req, res) => {
  res.send("<h2>Welcome to Cynorlabs!</h2>");
});

// Export the server to be seen by other files
module.exports = server;
