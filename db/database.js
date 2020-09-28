const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);
connection.on((e)=>{
    if(e){
    console.log("error", e)
    return false ;
    }
    console.log('DATABASE Conected!');
});