var signup = require("express").Router();
var conn = require("../db/database.js");
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

const hash = (pass) => bcrypt.hashSync(pass, salt);

signup.post("/users", (req, res) => {
  console.log(req.body);
  let user = [
    req.body.username,
    req.body.first_name,
    req.body.last_name,
    req.body.email,
    hash(req.body.password),
  ];
  let sql =
    "INSERT INTO user (username, first_name, last_name, email, password) VALUES (? ,? ,? ,? ,?)";
  conn.query(sql, user, (err, data) => {
    if (err) throw err;
    console.log(data);
  });

  res.send(user);
  res.redirect("/login");
});

module.exports = signup;
