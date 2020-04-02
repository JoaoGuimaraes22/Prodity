const express = require("express");
const router = express.Router();
const createUser = require("../controllers/createUser");

// @route POST /api/signup
// @desc Gets user id from DB
// @access Public;

router.post("/", (req, res, next) => {
  console.log(req.body.name, req.body.email, req.body.password);
  createUser(req, res);
});

module.exports = router;
