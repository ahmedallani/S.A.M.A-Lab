var login = require("express").Router();
var conn = require("../db/database.js");
var bcrypt = require("bcryptjs");
const connection = require("../db/database.js");
var salt = bcrypt.genSaltSync(10);

var hash = (pass) => bcrypt.hashSync(pass, salt);

login.post("/login", (req, res) => {
  var user = req.body;
  console.log(user);
  let sql =
    "SELECT password FROM user WHERE username = " + '"' + user.username + '"';
  conn.query(sql, (err, data) => {
    if (err) throw err;
    console.log(data[0].password)
    var result = bcrypt.compareSync(user.password, data[0].password);
    if (result === true) {
      res.send("logged in");
    }
    res.send("wrong pass");
  });
  connection.end();
});

module.exports = login;
