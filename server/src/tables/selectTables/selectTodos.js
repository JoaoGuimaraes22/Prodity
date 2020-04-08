const pool = require("../../db/pool");

const selectTodosTable = () => {
  const queryText = "SELECT * FROM todos";
  pool
    .query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end().catch((err) => {
        console.log(err);
      });
    });
};

module.exports = selectTodosTable;
