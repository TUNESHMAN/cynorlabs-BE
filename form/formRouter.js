const express = require("express");

// Import the helper functions and save it in a variable
const form = require("./formDB");

// Bring in the router
const router = express.Router();

// The forms endpoints here 👇
router.get("/", (req, res) => {
  form
    .getForms()
    .then((formInfo) => {
      res.status(200).json(formInfo);
    })
    .catch((error) => {
      res.status(404).json({ stack: error.stack, message: error.message });
    });
});

module.exports = router;
