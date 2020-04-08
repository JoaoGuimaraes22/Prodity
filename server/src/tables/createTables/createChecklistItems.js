const pool = require("../../db/pool");

const createChecklistItemsTable = () => {
  console.log("Creating checklistitems Table...");
  const queryText = `CREATE TABLE IF NOT EXISTS
      checklist_items(
        id UUID PRIMARY KEY,
        checklist_id UUID REFERENCES checklists(id),
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

module.exports = createChecklistItemsTable;
