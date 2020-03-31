const selectUsersTable = require("./selectUsers");
const connect = require("../../db/connect");
const pool = require("../../db/pool");

connect();

const selectAllTables = () => {
  selectUsersTable();
};

selectAllTables();

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
