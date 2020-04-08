const pool = require("../../db/pool");

const deleteTodosTable = () => {
  const queryText = "DELETE FROM todos RETURNING *;";
  pool
    .query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

module.exports = deleteTodosTable;
