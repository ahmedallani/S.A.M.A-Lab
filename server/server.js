var express = require("express");
var bodyParser = require("body-parser");
const Project = require('./models/project')

const port = 3000;
const app = express();

app.use(express.static(__dirname + "/../client/dist"));
app.use(bodyParser.json());


/**
 * route for adding new member
 */
app.get('/project/add_member', async (req, res) => {
  //var result = Project.add
})




app.listen(process.env.PORT || port, function () {
  console.log(`listening on port ${port}!`);
});
