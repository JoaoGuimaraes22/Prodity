const deleteUsersTable = require("./deleteUsers");
const connect = require("../../db/connect");
const pool = require("../../db/pool");

connect();

const deleteAllTables = () => {
  deleteUsersTable();
};

deleteAllTables();

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
