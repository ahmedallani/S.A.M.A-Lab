const new_feed = require ("express").Router()
const conn = require("../db/database.js")
new_feed.post("/create_feed",(req,res) => {
    console.log(req.body)
let feed = [
    req.body.name,
    req.body.description,
    req.body.type,
    
]
let sql = "INSERT INTO feed (name,description,type) VALUES (? ,? ,?)";
conn.query(sql, feed, (err, data) => {

    if (err) 
        throw err;
    
    console.log(data);
});

res.send(feed);

})



new_feed.get("/get_issues", (req,res)=>{
console.log(req.body)
let sql_issues = "SELECT * FROM feed WHERE type = 'issues'";
conn.query(sql_issues ,(err,data)=>{
    if (err) 
        throw err;
    console.log(data);
    res.send(data)
})
})

new_feed.get("/get_feacher", (req,res)=>{
console.log(req.body)
let sql_issues = "SELECT * FROM feed WHERE type = 'feacher'";
conn.query(sql_issues ,(err,data)=>{
    if (err) 
        throw err;
    console.log(data);
    res.send(data)
})
})



module.exports = new_feed;