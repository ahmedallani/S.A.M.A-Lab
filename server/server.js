const express = require("express");
const bodyParser = require("body-parser");
const new_feed = require("../routes/add_feed.js")
const organizationRouter = require("../routes/organization.js")
var signup = require("../routes/signup.js");
var login = require("../routes/login.js")


const db = require('../db/database.js');

const port =process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname + "/../client/dist"));
app.use(bodyParser.json());
app.use("/",new_feed)
app.use("/organization", organizationRouter)
app.use("/", signup);
app.use("/", login);




app.post('/saveProject',async (req,res)=>{
  console.log('*********',req.body);
  try{
    await db.createProject(req.body.name , req.body.description)
  }catch(e){console.log(e)}

})

app.listen( port,  ()=> {
  console.log(`listening on port ${port}!`);
});
