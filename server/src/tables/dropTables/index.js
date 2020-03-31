const dropUsersTable = require("./dropUsers");
const connect = require("../../db/connect");
const pool = require("../../db/pool");

connect();

const dropAllTables = () => {
  dropUsersTable();
};

dropAllTables();

const endPool = () => {
  try {
    pool.end(() => {
      console.log("Ended the Pool and process");
    });
  } catch (err) {
    console.log(err);
  }
};

endPool();
