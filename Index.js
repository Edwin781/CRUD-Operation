var express = require("express");
const bodyparser = require("body-parser");
const logger = require("morgan");
let ejs = require("ejs");
var path = require("path");
const methodOverride = require("method-override");

var app = express();
let MovieRouter = require("./routes/Movies");
let LoginRouter = require("./routes/Login");

app.use(express.static(path.join(__dirname, "public")));
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
