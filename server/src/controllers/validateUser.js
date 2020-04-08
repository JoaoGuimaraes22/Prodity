const query = require("../db/query");
const validateEmail = require("../helpers/validateEmail");
const comparePassword = require("../helpers/comparePassword");
const generateToken = require("../helpers/generateToken");
const moment = require("moment");

const login = async (req, res) => {
  console.log("Validating user");
  console.log(req.body);
  console.log(req.body.email);
  if (!req.body.email || !req.body.password) {
    return res.status(400).send({ message: "Some values are missing" });
  }
  if (validateEmail(!req.body.email)) {
    return res
      .status(400)
      .send({ message: "Please enter a valid email address" });
  }
  const text = "SELECT * FROM users WHERE email = $1";
  try {
    const { rows } = await query(text, [req.body.email]);
    if (!rows[0]) {
      return res
        .status(400)
        .send({ message: "The credentials you provided is incorrect" });
    }
    if (!comparePassword(rows[0].password, req.body.password)) {
      return res
        .status(400)
        .send({ message: "The credentials you provided is incorrect" });
    }
    const token = generateToken(rows[0].id);
    return res.status(200).send({
      token: token,
      user_id: rows[0].id,
      token_exp: moment(new Date()).add(7, "days").format("DD-MM-YYYY"),
    });
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = login;
