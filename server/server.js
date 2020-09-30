const express = require("express");
const bodyParser = require("body-parser");

const feed = require("../routes/feed.js")
const organizationRouter = require("../routes/organization.js")

var signup = require("../routes/signup.js");
var login = require("../routes/login.js")


const db = require('../db/database.js');

const port =process.env.PORT || 3000;
var app = express();


app.use(express.static(__dirname + "/../client/dist"));
app.use(bodyParser.json());
app.use("/feed", feed)
app.use("/organization", organizationRouter)
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

/**
 * route for adding new member
 */
app.get('/project/add_member', async (req, res) => {
  //var result = Project.add
})




app.listen(process.env.PORT || port, function () {
  console.log(`listening on port ${port}!`);
});
