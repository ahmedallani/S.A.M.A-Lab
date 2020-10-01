const mysql = require("mysql");
const mysqlConfig = require("./config.js");
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> c2bc32deeebf4f196d8657c4e7f25d1048091dd1
>>>>>>> 7c7bca0e8e831b4e1772c60a519ec1608fb39539

const connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
