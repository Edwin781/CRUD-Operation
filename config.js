const mysql = require("mysql");

let config = {
  host: "localhost",
  user: "Your UserName",
  password: "Your Password",
  database: "Database Name",
};

const pool = mysql.createPool(config);

module.exports = pool;
