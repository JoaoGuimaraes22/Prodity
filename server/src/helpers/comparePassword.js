const bcrypt = require("bcrypt");

const comparePassword = (hashedPassword, password) => {
  return bcrypt.compareSync(password, hashedPassword);
};

module.exports = comparePassword;
