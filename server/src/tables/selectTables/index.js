const connect = require("../../db/connect");
const selectUsersTable = require("./selectUsers");
const selectTodosTable = require("./selectTodos");

connect();

const selectAllTables = () => {
  selectUsersTable();
  selectTodosTable();
};

selectAllTables();
