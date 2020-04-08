const dropUsersTable = require("./dropUsers");
const connect = require("../../db/connect");
const pool = require("../../db/pool");

connect();

const dropAllTables = () => {
  dropUsersTable();
};

dropAllTables();
