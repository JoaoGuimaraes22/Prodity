const express = require("express");
const router = express.Router();
const createUser = require("../controllers/createUser");

// @route POST /api/signup
// @desc Gets user id from DB
// @access Public;

router.post("/", (req, res, next) => {
  try {
    createUser(req, res);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
