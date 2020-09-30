const express = require("express");
const bodyParser = require("body-parser");
const new_org = require("../routes/add_organ.js")
const new_feed = require("../routes/add_feed.js")
var signup = require("../routes/signup.js");
var login = require("../routes/login.js")


const db = require('../db/database.js');

const port =process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname + "/../client/dist"));
app.use(bodyParser.json());
app.use("/",new_org)
app.use("/",new_feed)
app.use("/", signup);
app.use("/", login);

app.post('/saveProject',async (req,res)=>{
  console.log('*********',req.body);
  try{
    await db.createProject(req.body.name , req.body.description)
  }catch(e){console.log(e)}

})

app.get('/get_orgOfUer/:id',async (req,res)=>{
console.log("req", req.params.id)
  try{
    const userOrg = await db.getOrg(req.params.id);
    console.log(userOrg)
    res.send (userOrg);
  }catch(e){
    res.send(e)
    console.log(e)
  }
})

app.get('/get_projOfOrg/:id',async (req,res)=>{
  console.log("req", req.params.id)
    try{
      const orgproj = await db.getProj (req.params.id);
      console.log(orgproj)
      res.send (orgproj);
    }catch(e){
      res.send(e)
      console.log(e)
    }
  })

app.listen( port,  ()=> {
  console.log(`listening on port ${port}!`);
});
