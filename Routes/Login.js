var express = require("./node_modules/express");
var router = express.Router();
var pool = require("../config/db");

router.get("/", (req, res) => {
  res.render("Login");
});

module.exports = router;
