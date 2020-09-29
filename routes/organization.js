const router = require ("express").Router()
const conn = require("../db/database.js")
router.post("/create",(req,res) => {
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

res.send(organization);

})

/**
 * 
 * @param {}
 */

router.delete("/delete/:id",(req,res)=>{
    console.log(req.body)
let sql_delete = "DELETE FROM organizations WHERE ID = ?";

conn.connection.query(sql_delete,[req.params.id],(err, data)=>{
    if (err) throw err;
    res.send(data)
})


})
router.put("/update/:id",(req,res)=>{
    console.log(req.body)

let sql_update = "UPDATE organizations set ? WHERE ID = ?";
var values = req.body
conn.connection.query(sql_update,[values, req.params.id],(err, data)=>{
    if (err) throw err;
    res.send(data)
})


})


module.exports = router;