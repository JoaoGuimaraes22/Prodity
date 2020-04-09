const connect = require("../../db/connect");
const createUsers = require("./createUsers");
const createProjects = require("./createProjects");
const createBoards = require("./createBoards");
const createTasks = require("./createTasks");
const createDescriptions = require("./createDescriptions");
const createChecklists = require("./createChecklists");
const createChecklistItems = require("./createChecklistItems");

connect();

const createAllTables = () => {
  createUsers();
  createProjects();
  createBoards();
  createTasks();
  createDescriptions();
  createChecklists();
  createChecklistItems();
};

createAllTables();
setTimeout(() => {}, 3000);
createAllTables();
setTimeout(() => {}, 3000);
createAllTables();
