// Import the pre-baked middleware
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
// Instantiate the server by invoking express
const server = express();
// Bring in the formRouter
const formRouter = require("./form/formRouter");
// Import the user router
const userRouter = require("./users/usersRouter");

// We use the middleware
server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(logger);
server.use("/forms", formRouter);
server.use("/user", userRouter);

// Flesh out a dummy API
server.get("/", (req, res) => {
  res.send("<h2>Welcome to Cynorlabs!</h2>");
});

// If the endpoint is invalid
server.get("*", (req, res) => {
  res.send(`message: This is an invalid path`);
});

// Create a custom logger middleware
function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString}] ${req.method} ${req.url} from ${req.get(
      "Origin"
    )}`
  );
  next();
}

// Export the server to be seen by other files
module.exports = server;








