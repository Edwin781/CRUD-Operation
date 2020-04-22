var express = require("express");
var router = express.Router();
var pool = require("../config");

router.get("/", (req, res) => {
  res.render("Login");
});

module.exports = router;
