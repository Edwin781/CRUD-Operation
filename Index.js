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

app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(3000, function (err) {
  if (err) throw err;
  console.log("Listening on port 3000");
});

app.get("/", (req, res) => {
  res.redirect("/Movies");
});
//Get index records
app.get("/Movies", function (req, res, next) {
  var object = {};
  let stmt = "SELECT * FROM todos";
  pool.query(stmt, (err, results) => {
    if (err) throw err;
    object = results;
    res.render("index", { WebsiteName: object });
  });
});

//Update Record from edit form
app.put("/Movie/Edit/:id", function (req, res) {
  const id = req.params.id;
  // console.log(req.body);
  pool.query("Update todos set ? where id = ?", [req.body, id], function (
    err,
    result
  ) {
    if (err) throw err;

    //res.status(201).send('Updated Successfully');
    res.redirect("/");
  });
});

//Get Data for Edit Form
app.get("/Movie/Edit/:id", (req, res) => {
  var Id = req.params.id;

  pool.query("Select * from todos where id = ?", Id, (err, result, fields) => {
    if (err) {
      throw err;
    } else {
      var string = JSON.stringify(result);
      var json = JSON.parse(string);
      console.log(json[0].completed);
      res.render("Edit", { edit: true, Records: json });
    }
  });
});

//Delete Record
app.delete("/Movie/Delete/:id", (req, res) => {
  var Id = req.params.id;
  pool.query("Delete FROM todos where id = ?", Id, (err, result) => {
    if (err) throw err;
    res.redirect("/");
  });
});

app.get("/Login", (req, res) => {
  res.render("Login");
});
//Get Create Form
app.get("/Movie/New", (req, res) => {
  res.render("New");
});

app.post("/Movie/New", (req, res) => {
  pool.query("Insert into todos SET ?", req.body, (err, result) => {
    if (err) throw err;
    res.status(200).redirect("/");
  });
});
