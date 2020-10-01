var express = require("express");
var bodyParser = require("body-parser");
const Project = require('./models/project')
var signup = require("../routes/signup.js");
var login = require("../routes/login");


const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use("/", signup);
app.use("/", login);

app.use(express.static(__dirname + "/../client/dist"));

/**
 * route for adding new member
 */
app.get('/project/add_member', async (req, res) => {
  //var result = Project.add
})




app.listen(process.env.PORT || port, function () {
  console.log(`listening on port ${port}!`);
});
