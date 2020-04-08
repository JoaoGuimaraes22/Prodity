const pool = require("../../db/pool");

const createDescriptionsTable = () => {
  console.log("Creating descriptions Table...");
  const queryText = `CREATE TABLE IF NOT EXISTS
      descriptions(
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

module.exports = createDescriptionsTable;
