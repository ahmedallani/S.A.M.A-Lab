const mysql = require("mysql");
const mysqlConfig = require("./config.js");

const connection = mysql.createConnection(mysqlConfig);

//inserting a new project in the database 
const createProject =function (name, description){
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO projects (name , description) VALUES (${name}, ${description})`,
      (e, result) => {
        if (e) {
          console.log(e);
          return reject();
        }
        resolve (result);
      }
    );
  });
}

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

module.exports.connection = connection;
module.exports.createProject=createProject;
