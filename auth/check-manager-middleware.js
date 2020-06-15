module.exports = (req, res, next) => {
  if (req.decodedToken.isManager) {
    next();
  } else {
    res.status(403).json({ message: "You are not a manager" });
  }
};
