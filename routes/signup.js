var signup = require("express").Router();
var db = require("../db/database.js");
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

const hash = (pass) => bcrypt.hashSync(pass, salt);

signup.post("/users", (req, res) => {
  let user = [
    req.body.username,
    req.body.first_name,
    req.body.last_name,
    hash(req.body.password),
  ];
  let sql =
    "INSERT INTO users (username, first_name, last_name, password) VALUES (? ,? ,? ,?)";
  db.connection.query(sql, user, (err, data) => {
    if (err) {
      console.error({err})
      // __send 400/500 state if there is error
      res.status(400).send(err);
    };
    // __you should send the user you get from the server
    console.log({data});
    // __don't send back the hash password
    res.send(user);
  });
 
});

module.exports = signup;
