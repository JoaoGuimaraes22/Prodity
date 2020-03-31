const pool = require("../../db/pool");

const dropUsersTable = () => {
  const queryText = "DROP TABLE IF EXISTS users";
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

module.exports = dropUsersTable;
