var login = require("express").Router();
var conn = require("../db/database.js");
var bcrypt = require("bcryptjs");
<<<<<<< HEAD
=======
const connection = require("../db/database.js");
var salt = bcrypt.genSaltSync(10);

var hash = (pass) => bcrypt.hashSync(pass, salt);
>>>>>>> c2bc32deeebf4f196d8657c4e7f25d1048091dd1

login.post("/login", (req, res) => {
  var user = req.body;
  console.log(user);
  let sql =
<<<<<<< HEAD
    "SELECT password FROM users WHERE username = " + '"' + user.username + '"';
  conn.query(sql, (err, data) => {
    if (err) console.error(err);
    console.log(data[0].password);
    res.send(bcrypt.compareSync(user.password, data[0].password));
  });
=======
    "SELECT password FROM user WHERE username = " + '"' + user.username + '"';
  conn.query(sql, (err, data) => {
    if (err) throw err;
    console.log(data[0].password);
    var result = bcrypt.compareSync(user.password, data[0].password);
    if (result) {
      console.log("logged in");
      res.send("logged in");
      //   res.redirect("/home");
    } else {
      res.send("wrong pass");
    }
  });
  connection.end();
>>>>>>> c2bc32deeebf4f196d8657c4e7f25d1048091dd1
});

module.exports = login;
