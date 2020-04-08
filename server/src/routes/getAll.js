const express = require("express");
const getAll = require("../controllers/getAllTodos");
const auth = require("../auth/verifyToken");
const router = express.Router();

// @route GET /api/auth/todos
// @desc Gets all todos user
// @access Private

router.get(
  "/",
  (req, res, next) => {
    try {
      auth(req, res, next);
    } catch (err) {
      console.log(err);
    }
  },
  (req, res, next) => {
    try {
      getAll(req, res);
    } catch (err) {
      console.log(err);
    }
  }
);

module.exports = router;
