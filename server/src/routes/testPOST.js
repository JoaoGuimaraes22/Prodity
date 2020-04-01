const express = require("express");
const router = express.Router();

// @route POST /api/test
// @desc Tests
// @access Public;

router.post("/", async (req, res, next) => {
  try {
    const name = req.body.name;
    console.log(`Name: ${name}`);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
