const pg = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const pool = new pg.Pool({
  // connectionString: process.env.DATABASE_URL
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_DB_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT
});

module.exports = pool;
