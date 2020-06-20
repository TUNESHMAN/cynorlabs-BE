// Bring in the db config
const userdb = require("../data/db-config");

// The helper functions for the users database
module.exports = {
  addUser,
  getUserBy,
  getUser,
};

function addUser({username, password, role}) {
  return userdb("users").insert({ username, password, role });
}

function getUserBy(username) {
  return userdb("users").where({ username }).first();
}

function getUser() {
  return userdb("users");
}
