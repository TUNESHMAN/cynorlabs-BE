// Bring in jwt
const jwt = require("jsonwebtoken");

// We make the generateToken function and export it
module.exports = function generateToken(member) {
  const payload = {
    subject: member.id,
    username: member.username,
    isManager: member.isManager,
  };
  //   Details of expiration
  const jwtSecrete = require("./secret").jwtSecret;
  const options = {
    expiresIn: "1h",
  };

  return jwt.sign(payload, jwtSecrete, options);
};
