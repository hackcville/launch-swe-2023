var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Say hello to Launch SWE 2023!");
});

module.exports = router;
