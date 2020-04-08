// Imports

// Modules
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

// Helpers
const connect = require("./db/connect");
const corsConfig = require("./config/corsConfig");

// Routes Imports
const loginRoute = require("./routes/login");
const signupRoute = require("./routes/signup");
const getTodosRoute = require("./routes/getAll");

// Midleware
const app = express();
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
// In Dev
app.use(cors());
//In Production
// app.use(cors(corsConfig));

// DB Connection & Creating Tables
connect();
// createTables(); -> creates tables

// Routes
app.use("/api/v1/login", loginRoute);
app.use("/api/v1/signup", signupRoute);
app.use("/api/v1/auth/todos", getTodosRoute);

// Server Port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
