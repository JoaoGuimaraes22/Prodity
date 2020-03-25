const express = require("express");
const router = express.Router();

// @route GET api/items
// @desc Gets All Items
// @access Public;

router.get("/", (req, res, next) => {
  try {
    res.json({ id: 1 });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
