const connect = require("../../db/connect");
const createUsers = require("./createUsers");
const createProjects = require("./createProjects");
const createBoards = require("./createBoards");
const createTasks = require("./createTasks");


connect();

const createAllTables = () => {
  createUsers();
  createProjects();
  createBoards();

createAllTables();
