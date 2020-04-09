const pool = require("../../db/pool");

const createTasksTable = () => {
  console.log("Creating tasks Table...");
  const queryText = `CREATE TABLE IF NOT EXISTS
  tasks(
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    project_id UUID REFERENCES projects(id),
    board_id UUID REFERENCES boards(id), 
    name VARCHAR(128) NOT NULL,
    date_scheduled TIMESTAMP,
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

module.exports = createTasksTable;
