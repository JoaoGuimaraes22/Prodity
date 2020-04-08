const pool = require("../../db/pool");

const createChecklistsTable = () => {
  console.log("Creating checklists Table...");
  const queryText = `CREATE TABLE IF NOT EXISTS
      checklists(
        id UUID PRIMARY KEY,
        task_id UUID REFERENCES tasks(id),
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

module.exports = createChecklistsTable;
