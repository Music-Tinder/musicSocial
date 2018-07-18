const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use("/static", express.static("static"));
app.use(bodyParser.json());
app.set("view engine", "hbs");

const data = {
  locations: require("./data/locations"),
  users: require("./data/users"),
  wallPosts: require("./data/wallPosts")
};

app.get("/api/users", function(req, res) {
  res.json(data.users);
});

app.get("/api/wallPosts", function(req, res) {
  res.json(data.wallPosts);
});

app.post('/api/addWallPost', function(req,res){
  data.wallPosts.push(req.body);
  res.json({posts:data.wallPosts});
});

app.post('/api/addFavourite', function(req,res){
  data.users[req.body.id].favourites.push(req.body.favId)
  res.json({users:data.users});
});


app.get("*", function(req, res) {
  res.render("index");
});

const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log(`Listening on port number http://localhost:${port}`);
});
