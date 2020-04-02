const pool = require("../../db/pool");

const deleteUsersTable = () => {
  const queryText = "DELETE FROM users RETURNING *;";
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

module.exports = deleteUsersTable;
