const mysql = require("mysql");

let config = {
  host: "localhost",
  user: "root",
  password: "Chimeremeze1",
  database: "todoapp",
};

const pool = mysql.createPool(config);

module.exports = pool;
