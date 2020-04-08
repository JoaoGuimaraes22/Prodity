const moment = require("moment");
const query = require("../../db/query");
const { uuid } = require("uuidv4");

const insertTodos = async () => {
  const createTodosQuery = `INSERT INTO 
  todos(id, owner_id, name, created_date, modified_date) 
  VALUES($1, $2, $3, $4, $5) 
  returning *`;

  const values = [
    uuid(),
    "096c35fa-0e57-4742-99f6-ba63f1ba5b56",
    "test_todo",
    moment(new Date()),
    moment(new Date()),
  ];

  try {
    const { rows } = await query(createTodosQuery, values);
    console.log(rows);
  } catch (err) {
    console.log(err);
  }
};

insertTodos();
