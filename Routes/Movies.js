const express = require();
const router = express.Router();
const pool = require("../config/db");

//Redirect to Router
router.get("/", (req, res) => {
  res.redirect("/Movies");
});

//Get index records
router.get("/Movies", function (req, res, next) {
  var object = {};
  let stmt = "SELECT * FROM todos";
  pool.query(stmt, (err, results) => {
    if (err) throw err;
    object = results;
    res.render("index", { WebsiteName: object });
  });
});

//Update Record from edit form
router.put("/Movie/Edit/:id", function (req, res) {
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
router.get("/Movie/Edit/:id", (req, res) => {
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
router.delete("/Movie/Delete/:id", (req, res) => {
  var Id = req.params.id;
  pool.query("Delete FROM todos where id = ?", Id, (err, result) => {
    if (err) throw err;
    res.redirect("/");
  });
});

//Get Create Form
router.get("/Movie/New", (req, res) => {
  res.render("New");
});

router.post("/Movie/New", (req, res) => {
  pool.query("Insert into todos SET ?", req.body, (err, result) => {
    if (err) throw err;
    res.status(200).redirect("/");
  });
});

module.exports = router;
