const pool = require("../../db/pool");

const createTodosTable = () => {
  console.log("Creating todos Table...");
  const queryText = `CREATE TABLE IF NOT EXISTS
      todos(
        id UUID PRIMARY KEY,
        owner_id UUID REFERENCES users(id),
        name VARCHAR(128) NOT NULL, 
        created_date TIMESTAMP,
        modified_date TIMESTAMP
      )`;

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

module.exports = createTodosTable;
