const pool = require("../../db/pool");

const selectUsersTable = () => {
  const queryText = "SELECT * FROM users";
  pool
    .query(queryText)
    .then(res => {
      console.log(res);
      pool.end();
    })
    .catch(err => {
      console.log(err);
      pool.end();
    });
};

module.exports = selectUsersTable;
