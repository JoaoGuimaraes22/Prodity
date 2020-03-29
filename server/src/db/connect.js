const pool = require("./pool");

const connect = () => {
  console.log("Connecting to Database...");
  pool.connect(err => {
    if (err) {
      console.log(`Not connected: \n${err}`);
    }
    console.log("Database connected");
  });
};

module.exports = connect;
