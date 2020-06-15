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
router.post("/", restricted, validateForm, (req, res) => {
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

// Middleware for validating forms to ensure fields are correct
function validateForm(req, res, next) {
  const NewForm = req.body;
  if (Object.keys(NewForm).length === 0) {
    res.status(400).json({ message: "Invalid inputs" });
  } else if (!NewForm.doctor_name) {
    res.status(400).json({ message: "Name of the doctor is needed" });
  } else if (!NewForm.department) {
    res.status(400).json({ message: "department column is empty" });
  } else if (!NewForm.doctors_rank) {
    res.status(400).json({ message: "no rank inputted" });
  } else if (!NewForm.task_description) {
    res.status(400).json({ message: "task column must be filled" });
  } else {
    next();
  }
}

module.exports = router;
