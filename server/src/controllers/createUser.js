const moment = require("moment");
// const uuid = require("uuid/v4");
const query = require("../db/query");
const validateEmail = require("../helpers/validateEmail");
const hashPassword = require("../helpers/hashPassword");
const generateToken = require("../helpers/generateToken");
const uuid = require("uuid/v4");

const createUser = async (req, res) => {
  console.log("Trying to create user");
  if (!req.body.name || !req.body.email || !req.body.password) {
    console.log("Some values are missing");
    return res.status(400).send({ message: "Some values are missing" });
  }
  if (validateEmail(!req.body.email)) {
    console.log("Please enter a valid email adress");
    return res
      .status(400)
      .send({ message: "Please enter a valid email adress" });
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
    const { rows } = await query(createUserQuery, values);
    const token = generateToken(rows[0].id);
    console.log({ token });
    return res.status(201).send({ token });
  } catch (err) {
    if (err.routine === "_bt_check_unique") {
      console.log("User with that EMAIL already exists");
      return res
        .status(400)
        .send({ message: "User with that EMAIL already exists" });
    }
    console.log(err);
    return res.status(400).send(err);
  }
};

module.exports = createUser;
