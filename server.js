const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// const publicIp = require('public-ip');

app.use("/static", express.static("static"));
app.use(bodyParser.json());
app.set("view engine", "hbs");

let wallPostsId=2;
let usersId=11;


const data = {
  locations: require("./data/locations"),
  users: require("./data/users"),
  wallPosts: require("./data/wallPosts")
};

app.get("/api/users/:instrument", function(req, res) {
  
  if(req.params.instrument==="all")
    res.json(data.users);
  else{
    let filterred={};
    for (let user in data.users){
      if(data.users[user].instruments.indexOf(req.params.instrument)>-1 )
      filterred[user]=data.users[user]
      }
      
    res.json(filterred);
    }

  });
  
app.get("/api/wallPosts", function(req, res) {
  res.json(data.wallPosts);
});

app.get("/api/user/:id", function(req, res) {
  res.json(data.users[req.params.id]);
});

app.post("/api/addWallPost", function(req, res) {
  id=`Post${wallPostsId}`
  newPost= {[id]:req.body}
  wallPostsId++
  data.wallPosts=Object.assign({},data.wallPosts,newPost)
  res.json(data.wallPosts);
});


// app.get('/api/ip', function(req,res){
//  publicIp.v4().then(ip => {
//   console.log(ip);})
//   res.json({msg:"done"});
// });


app.post("/api/addFavourite", function(req, res) {
  data.users[req.body.id].favourites.push(req.body.favId);
  res.json(data.users[req.body.id]);
});

app.post("/api/msg", function(req, res) {
  data.users[req.body.sendTo.id].inbox.unshift(req.body.sender);
  data.users[req.body.sender.id].sent.unshift(req.body.sendTo);
  res.json(data.users[req.body.sender.id]);
});

app.get("*", function(req, res) {
  res.render("index");
});

const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log(`Listening on port number http://localhost:${port}`);
});

