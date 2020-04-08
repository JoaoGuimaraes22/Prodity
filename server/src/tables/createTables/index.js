const createUsersTable = require("./createUsers");
const createTodosTable = require("./createTodos");
const connect = require("../../db/connect");
const pool = require("../../db/pool");

connect();

const createAllTables = () => {
  createUsersTable();
  createTodosTable();
};

createAllTables();
