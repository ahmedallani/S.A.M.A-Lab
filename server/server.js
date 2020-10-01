var express = require("express");
var bodyParser = require("body-parser");
<<<<<<< HEAD
const Project = require('./models/project')
var signup = require("../routes/signup.js");
var login = require("../routes/login");

=======
var signup = require("../routes/signup.js");
var login = require("../routes/login");
>>>>>>> c2bc32deeebf4f196d8657c4e7f25d1048091dd1

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use("/", signup);
app.use("/", login);
<<<<<<< HEAD

app.use(express.static(__dirname + "/../client/dist"));

/**
 * route for adding new member
 */
app.get('/project/add_member', async (req, res) => {
  //var result = Project.add
})



=======
>>>>>>> c2bc32deeebf4f196d8657c4e7f25d1048091dd1

app.listen(process.env.PORT || port, function () {
  console.log(`listening on port ${port}!`);
});
