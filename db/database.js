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

module.exports.createProject = createProject;