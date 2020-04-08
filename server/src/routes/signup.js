const express = require("express");
const router = express.Router();
const createUser = require("../controllers/createUser");

// @route POST /api/signup
// @desc Creates a new user
// @access Public;

router.post("/", (req, res, next) => {
  console.log(req.body.name, req.body.email, req.body.password);
  createUser(req, res);
});

module.exports = router;
