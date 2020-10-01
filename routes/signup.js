var signup = require("express").Router();
var conn = require("../db/database.js");
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

const hash = (pass) => bcrypt.hashSync(pass, salt);

signup.post("/users", (req, res) => {
<<<<<<< HEAD
  // if(req.body.password !== req.body.repPassword){
  //   res.send("why you do this")
  // }
=======
<<<<<<< HEAD
  // if(req.body.password !== req.body.repPassword){
  //   res.send("why you do this")
  // }
=======
  console.log(req.body);
>>>>>>> c2bc32deeebf4f196d8657c4e7f25d1048091dd1
>>>>>>> 7c7bca0e8e831b4e1772c60a519ec1608fb39539
  let user = [
    req.body.username,
    req.body.first_name,
    req.body.last_name,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 7c7bca0e8e831b4e1772c60a519ec1608fb39539
    hash(req.body.password),
  ];
  let sql =
    "INSERT INTO users (username, first_name, last_name, password) VALUES (? ,? ,? ,?)";
  conn.query(sql, user, (err, data) => {
    if (err) console.error(err);
    console.log(data);
  });
  res.send(user);
<<<<<<< HEAD
=======
=======
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
>>>>>>> c2bc32deeebf4f196d8657c4e7f25d1048091dd1
>>>>>>> 7c7bca0e8e831b4e1772c60a519ec1608fb39539
});

module.exports = signup;
