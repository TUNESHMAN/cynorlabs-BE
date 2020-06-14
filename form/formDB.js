// I brought in the database configuration
const db = require("../data/db-config");

// Export the helper function so that it can be used in the formRouter
module.exports = {
  getForms, //Function for retrieving all forms in the database
  postForms, //Function for adding a new form to the database
  removeForm, //Function for removing a form
};

function getForms() {
  // This is the equivalent of SELECT * from forms
  return db("forms");
}

function postForms({
  doctor_name,
  department,
  doctors_rank,
  task_description,
}) {
  // This is the SQL equivalent of INSERT INTO forms (doctor_name, department, doctors_rank,task_description) VALUES (data to be added)
  return db("forms").insert({
    doctor_name: doctor_name,
    department: department,
    doctors_rank: doctors_rank,
    task_description: task_description,
  });
}

function removeForm(id) {
  // This is the SQL equivalent of DELETE FROM forms WHERE id =id
  return db("forms").where({ id }).del();
}
