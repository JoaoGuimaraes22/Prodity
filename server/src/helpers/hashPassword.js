const bcrypt = require("bcrypt");

const hashPassword = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

module.exports = hashPassword;
