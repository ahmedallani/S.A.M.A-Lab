const express = require("express");
const bodyParser = require("body-parser");
const new_org = require("../routes/add_organ.js")
const new_feed = require("../routes/add_feed.js")

const port = 3000;
const app = express();

app.use(express.static(__dirname + "/../client/dist"));
app.use(bodyParser.json());
app.use("/",new_org)
app.use("/",new_feed)

app.listen(process.env.PORT || port, function () {
  console.log(`listening on port ${port}!`);
});
