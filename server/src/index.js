// Imports

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// Midleware
const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors());

// Routes

app.use("/api/login", require("./api/routes/login"));

// Server Port

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
