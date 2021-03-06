const jwt = require("jsonwebtoken");

// We do this because we do not want unauthorized access to sections of the endpoints
module.exports = (req, res, next) => {
  // Grab the token from req.authorization
  const token = req.headers.authorization;
  const jwtSecrete = require("./secret").jwtSecret;

  if (token) {
    jwt.verify(token, jwtSecrete, (error, decodedToken) => {
      if (error) {
        res.status(401).json({ you: "you shall not pass" });
      } else {
        //   We attach the decoded token to the request
        req.decodedToken = decodedToken;
        console.log("decoded token", decodedToken);
        next();
      }
    });
  } else {
    res.status(401).json({ you: "you shall not pass" });
  }
};
