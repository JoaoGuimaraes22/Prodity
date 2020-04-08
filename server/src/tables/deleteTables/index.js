const deleteUsersTable = require("./deleteUsers");
const deleteTodosTable = require("./deleteTodos");
const connect = require("../../db/connect");

connect();

const deleteAllTables = () => {
  deleteTodosTable();
  deleteUsersTable();
};

deleteAllTables();
