const new_org = require ("express").Router()
const conn = require("../db/database.js")
new_org.post("/create_organization",(req,res) => {
    console.log(req.body)
let organization = [
    req.body.name,
    req.body.description,
    req.body.field,
    req.body.serial,
]
let sql = "INSERT INTO organizations (name, description, field, serial) VALUES (? ,? ,? ,?)";
conn.connection.query(sql, organization, (err, data) => {

    if (err) 
        throw err;
    
    console.log(data);
});
conn.connection.end();
res.send(organization);

})


module.exports = new_org;