const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

function authMiddleware(req, res, next) {
  const token = req.headers.authorization;
  const words = token.split("");
  const jwtToken = words[1];
  try {
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
    req.userId = decodedValue.userId;
    next();
  } catch (e) {
    res.status(403).json({ message: "Incorrect input" });
  }
}

module.exports = {
  authMiddleware,
};
