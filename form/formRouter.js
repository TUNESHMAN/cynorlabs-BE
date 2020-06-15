const express = require("express");
const restricted = require("../auth/restricted-middleware");
// To check if the user is a manager or not
const checkRole = require("../auth/check-manager-middleware");

// Import the helper functions and save it in a variable
const form = require("./formDB");

// Bring in the router
const router = express.Router();

// The forms endpoints here 👇👇👇

// Endpoint for getting forms
router.get("/", restricted, checkRole, (req, res) => {
  form
    .getForms()
    .then((formInfo) => {
      res.status(200).json(formInfo);
    })
    .catch((error) => {
      res.status(404).json({ stack: error.stack, message: error.message });
    });
});

// Endpoint for adding forms
router.post("/", restricted, (req, res) => {
  // We are adding a new form so we need req.body
  const newForm = req.body;
  form
    .postForms(newForm)
    .then((freshForm) => {
      res.status(201).json({ message: `Form created successfully` });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message, stack: error.stack });
    });
});

// Endpoint for removing a form
router.delete("/:id", restricted, checkRole, (req, res) => {
  //We get the id from params
  const { id } = req.params;
  form
    .removeForm(id)
    .then((removedForm) => {
      res
        .status(200)
        .json({ message: `The post with id ${id} has been deleted` });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message, stack: error.stack });
    });
});

module.exports = router;
