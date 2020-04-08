const jwt = require("jsonwebtoken");
const query = require("../db/query");

const verifyToken = async (req, res, next) => {
  console.log("Authenticating...");
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(400).send({ message: "Token is not provided" });
  }
  try {
    const decoded = await jwt.verify(token, process.env.SECRET);
    const text = "SELECT * FROM users WHERE id = $1";
    const { rows } = await query(text, [decoded.userId]);
    if (!rows[0]) {
      return res
        .status(400)
        .send({ message: "The token you provided is invalid" });
    }
    req.user = { id: decoded.userId };
    next();
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = verifyToken;
