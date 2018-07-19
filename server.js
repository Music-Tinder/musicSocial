const express = require("express");
const bodyParser = require('body-parser');
const app = express();
// const publicIp = require('public-ip');

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

app.get("/api/user/:id", function(req, res) {
  res.json(data.users[req.params.id]);
});

app.post('/api/addWallPost', function(req,res){
  data.wallPosts.unshift(req.body);
  res.json({posts:data.wallPosts});
});

// app.get('/api/ip', function(req,res){
  
 
//  publicIp.v4().then(ip => {
//   console.log(ip);})
//   res.json({msg:"done"});
// });

app.post('/api/addFavourite', function(req,res){
  data.users[req.body.id].favourites.push(req.body.favId)
  res.json({users:data.users});
});

app.post('/api/msg', function(req,res){
  
 data.users[req.body.sendTo.id-1].inbox.unshift(req.body.sender);
 data.users[req.body.sender.id-1].sent.unshift(req.body.sendTo);
 res.json(data.users[req.body.sender.id-1])
});


app.get("*", function(req, res) {
  res.render("index");
});

const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log(`Listening on port number http://localhost:${port}`);
});
