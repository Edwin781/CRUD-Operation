//Import mysql module
let mysql = require("mysql");
let pool = require("./config");
const bodyparser = require("body-parser");
const logger = require("morgan");
var express = require("express");
let ejs = require("ejs");
var app = express();
var path = require("path");
const methodOverride = require("method-override");

let MovieRouter = require("./Routes/Movies");
let LoginRouter = require("./Routes/Login");

app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", MovieRouter);
app.use("/Login", LoginRouter);

app.listen(3000, function (err) {
  if (err) throw err;
  console.log("Listening on port 3000");
});
