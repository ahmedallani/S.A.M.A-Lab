const router = require ("express").Router()
const conn = require("../db/database.js")
router.post("/create_feed",(req,res) => {
    console.log(req.body)
let feed = [
    req.body.name,
    req.body.description,
    req.body.type,
    req.body.projectID
    
]
/*************Create New Feeeed ***************** */
let sql = "INSERT INTO feeds (name,description,type,projectID) VALUES (? ,? ,?,?)";

conn.connection.query(sql, feed, (err, data) => {


    if (err) 
        throw err;
    
    console.log(data);
});

res.send(feed);

})

/*************Get All The issues for user******/

router.get("/get_issues", (req,res)=>{
console.log(req.body)
let sql_issues = "SELECT * FROM feed WHERE type = 'issues'";
conn.connection.query(sql_issues ,(err,data)=>{
    if (err) 
        throw err;
    console.log(data);
    res.send(data)
})
})
/*************Get All The feacher for user******/

router.get("/get_feacher", (req,res)=>{
console.log(req.body)
let sql_issues = "SELECT * FROM feed WHERE type = 'feacher'";
conn.connection.query(sql_issues, (err, data) => {

    if (err) 
        throw err;
    console.log(data);
    res.send(data)
})
})

/*************Get All The issues by project ID **********/

router.get("/getIssueById/:id",(req,res)=>{
    console.log(req.params.id)
let sql = "SELECT * FROM feeds WHERE type = 'issues' AND projectID = ?"
conn.connection.query(sql,[req.params.id],(err, data)=>{
    if (err) throw err;
    res.send(data)
})


})
/*************Get All The feacher by project ID **********/

router.get("/getFeacherById/:id", (req, res) => {
    console.log(req.params.id)
    let sql = "SELECT * FROM feeds WHERE type = 'feacher' AND projectID = ?"
    conn.connection.query(sql, [req.params.id], (err, data) => {
        if (err) 
            throw err;
        
        res.send(data)
    })


})



module.exports = router;