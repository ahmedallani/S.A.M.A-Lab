var login = require("express").Router();
var conn = require("../db/database.js");
var bcrypt = require("bcryptjs");

login.post("/login", (req, res) => {
  var user = req.body;
  console.log(user);
  let sql =
    "SELECT password FROM users WHERE username = " + '"' + user.username + '"';
  conn.query(sql, (err, data) => {
    if (err) console.error(err);
    console.log(data[0].password);
    res.send(bcrypt.compareSync(user.password, data[0].password));
  });
});

module.exports = login;
