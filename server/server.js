var express = require("express");
var bodyParser = require("body-parser");
var signup = require("../routes/signup.js");
var login = require("../routes/login")

const port = 3000;
var app = express();

app.use(express.static(__dirname + "/../client/dist"));
app.use(bodyParser.json());
app.use("/", signup);
app.use("/", login);


app.listen(process.env.PORT || port, function () {
  console.log(`listening on port ${port}!`);
});
