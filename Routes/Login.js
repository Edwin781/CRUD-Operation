const express = require();
const router = express.Router();
const pool = require("../config/db");

router.get("/", (req, res) => {
  res.render("Login");
});

module.exports = router;
