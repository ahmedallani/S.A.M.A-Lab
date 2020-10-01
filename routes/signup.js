var signup = require("express").Router();
var conn = require("../db/database.js");
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

const hash = (pass) => bcrypt.hashSync(pass, salt);

signup.post("/users", (req, res) => {
  // if(req.body.password !== req.body.repPassword){
  //   res.send("why you do this")
  // }
  let user = [
    req.body.username,
    req.body.first_name,
    req.body.last_name,
    hash(req.body.password),
  ];
  let sql =
    "INSERT INTO users (username, first_name, last_name, password) VALUES (? ,? ,? ,?)";
  conn.query(sql, user, (err, data) => {
    if (err) console.error(err);
    console.log(data);
  });
  res.send(user);
});

module.exports = signup;
