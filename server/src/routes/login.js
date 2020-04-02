const express = require("express");
const login = require("../controllers/validateUser");
const router = express.Router();

// @route GET /api/login
// @desc Gets user id from DB
// @access Public;

router.post("/", (req, res, next) => {
  try {
    login(req, res);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
