const express = require("express");
const cors = require("cors");

// Midleware
const app = express();

app.use(express.json());
app.use(cors());

// Routers

app.use("/api/userdata", require("./api/routes/userData"));

// Server Port

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
