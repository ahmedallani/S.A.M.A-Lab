const mysql = require("mysql");
const mysqlConfig = require("./config.js");

const connection = mysql.createConnection(mysqlConfig);

//inserting a new project in the database
const createProject = function (name, description) {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO projects set ?`,
      { name, description },
      (e, result) => {
        if (e) {
          console.log(e);
          return reject();
        }
        resolve(result);
      }
    );
  });
};

const getOrg = function (id) {
  return new Promise((resolve, reject) => {
    connection.query(
      `select * from organizations where userID=${id}`,
      (e, res) => {
        if (e) {
          console.log(e);
          return reject();
        }
        resolve(res);
      }
    );
  });
};

const getProj = function (id) {
  return new Promise((resolve, reject) => {
    connection.query(
      `select * from projects where organizationID=${id}`,
      (e, res) => {
        if (e) {
          console.log(e);
          return reject();
        }
        resolve(res);
      }
    );
  });
};

const updateFeed = (id,name,description)=>{
  return new Promise((resolve,reject)=>{
    connection.query(`update feeds set name=${name},description=${description} where id=${id} `,(e,res)=>{
      if(e){
        console.log(e);
        return reject();
      }
      resolve
    })
  })
}


connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

module.exports.connection = connection;
module.exports.createProject = createProject;
module.exports.getOrg = getOrg;
module.exports.getProj = getProj;
