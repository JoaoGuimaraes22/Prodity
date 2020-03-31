const createUsersTable = require("./createUsers");
const connect = require("../../db/connect");
const pool = require("../../db/pool");

connect();

const createAllTables = () => {
  createUsersTable();
};

createAllTables();

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
