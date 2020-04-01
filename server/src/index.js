// Imports

// Modules
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// Helpers
const connect = require("./db/connect");

// Routes Imports
const loginRoute = require("./routes/login");
const signupRoute = require("./routes/signup");
const testRoute = require("./routes/testPOST");

// Midleware
const app = express();
app.use(helmet());
app.use(express.json());
app.use(cors());

// DB Connection & Creating Tables
connect();
// createTables(); -> creates tables

// Routes
app.use("/api/login", loginRoute);
app.use("/api/signup", signupRoute);
app.use("/api/test", testRoute);

// Server Port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
