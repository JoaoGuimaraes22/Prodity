const moment = require("moment");
const uuid = require("uuid/v5");
const db = require("../db/query");
const validateEmail = require("../helpers/validateEmail").;
const hashPassword = require("../helpers/hashPassword");
const generateToken = require("../helpers/generateToken");

const createUser = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).send({ message: "Some values are missing" });
  }
  if (validateEmail(!req.body.email)) {
    return res
      .status(400)
      .send({ message: "Please enter a valid email adaress" });
  }
  const hashedPassword = hashPassword(req.body.password);

  const createUserQuery = `INSERT INTO 
  users(id, name, email, password, created_date, modified_date) 
  VALUES($1, $2, $3, $4, $5, $6 ) 
  returning *`;

  const values = [
    uuid(),
    req.body.name,
    req.body.email,
    hashedPassword,
    moment(new Date()),
    moment(new Date())
  ];

  try {
    const { rows } = await db.query(createUserQuery, values);
    const token = generateToken(rows[0].id);
    return res.status(201).send({ token });
  } catch (err) {
    if (err.routine === "_bt_check_unique") {
      return res
        .status(400)
        .send({ message: "User with that EMAIL already exists" });
    }
    return res.status(400).send(err);
  }
};

module.exports = createUser;
