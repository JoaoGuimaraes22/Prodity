const express = require("express");
const login = require("../controllers/validateUser");
const router = express.Router();

// @route POST /api/login
// @desc Validates user
// @access Public;

router.post("/", (req, res, next) => {
  try {
    login(req, res);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
