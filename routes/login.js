var login = require("express").Router();
var db = require("../db/database.js");
var bcrypt = require("bcryptjs");

login.post("/login", (req, res) => {
  var user = req.body;
  console.log(user);
  let sql =
    "SELECT password FROM user WHERE username = " + '"' + user.username + '"';
  db.connection.query(sql, (err, data) => {
    if (err) throw err;
    console.log(data[0].password);
    var result = bcrypt.compareSync(user.password, data[0].password);
    if (result) {
      res.send("logged in");
    } else res.send("wrong pass");
  });
});

module.exports = login;
