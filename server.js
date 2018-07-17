const express = require("express");
const app = express();

app.use("/static", express.static("static"));
app.set("view engine", "hbs");

const data = {
  locations: require("./data/locations"),
  users: require("./data/users")
};

app.get("/api/users", function(req, res) {
  res.json(data.users);
});

app.get("*", function(req, res) {
  res.render("index");
});

const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log(`Listening on port number http://localhost:${port}`);
});
