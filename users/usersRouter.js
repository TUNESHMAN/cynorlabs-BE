// Bring in express
const express = require("express");
// We will need bcryptjs for hashing passwords
const bcrypt = require("bcryptjs");
// Bring in the helper functions from usersDB
const users = require("./usersDB");
// Import the router
const router = express.Router();
// Bring in the generateToken function from its folder
const genToken = require("../auth/token");

// Users endpoints here 👇👇👇

// This is the register endpoint
router.post("/register", validateUser, (req, res) => {
  const { username, password, isManager } = req.body;
  //   We hash the password
  const bcryptHash = bcrypt.hashSync(password, 10);
  const newUser = { username, password: bcryptHash, isManager };
  users
    .addUser(newUser)
    .then((member) => {
      res.status(201).json({ message: `User created successfully` });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message, stack: error.stack });
    });
});

router.post("/login", (req, res) => {
  const auth_user = req.body;
  //   We need to first fish out the user from the db
  users
    .getUserBy(auth_user.username)
    .then((member) => {
      if (member && bcrypt.compareSync(auth_user.password, member.password)) {
        console.log(member);

        //   If the password is okay and the user is on the database, we want to create a token
        const token = genToken(member);
        res.status(200).json({
          message: `Logged in successfully, ${member.username}`,
          token,
          role: member.isManager,
        });
      } else {
        res.status(500).json({ message: `Credentials are not valid` });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: `Error login in, check your details or register`,
        stack: error.stack,
      });
    });
});

function validateUser(req, res, next) {
  const NewUser = req.body;
  if (Object.keys(NewUser).length === 0) {
    res.status(400).json({ message: "Invalid inputs" });
  } else if (!NewUser.username) {
    res.status(400).json({ message: "Please choose a username" });
  } else if (!NewUser.password) {
    res.status(400).json({ message: "Please choose a password" });
  } else {
    next();
  }
}
// The router should be exported
module.exports = router;
