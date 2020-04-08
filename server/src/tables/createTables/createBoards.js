const pool = require("../../db/pool");

const createBoardsTable = () => {
  console.log("Creating todos Table...");
  const queryText = `CREATE TABLE IF NOT EXISTS
      boards(
        id UUID PRIMARY KEY,
        project_id UUID REFERENCES projects(id),
        user_id UUID REFERENCES users(id),
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

module.exports = createBoardsTable;
