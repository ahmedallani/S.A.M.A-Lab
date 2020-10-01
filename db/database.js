const mysql = require("mysql");
const mysqlConfig = require("./config.js");
<<<<<<< HEAD
=======

>>>>>>> c2bc32deeebf4f196d8657c4e7f25d1048091dd1

const connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
