const mysql = require("mysql");

let config = {
  host: "localhost",
  user: "",
  password: "",
  database: "",
};

const pool = mysql.createPool(config);

module.exports = pool;
