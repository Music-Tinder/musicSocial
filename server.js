const express = require("express");

const data = {
  locations: require("./data/locations"),
  users: require("./data/users")
};

const app = express();

app.use("/static", express.static("static"));
app.set("view engine", "hbs");

app.get("/api/users", function(req, res) {
  res.json(data.users);
});

app.get("/api/users/:instrument", function(req, res) {
  if (req.params.instrument === "all") {
    res.json(data.users);
  } else {
    let filteredArray = data.users.filter(user => {
      return user.instruments.indexOf(req.params.instrument) > -1;
    });

    // console.log(filteredArray);
    res.json(filteredArray);
  }
});

app.get("/api/locations", function(req, res) {
  res.json(data.locations);
});

app.get("*", function(req, res) {
  res.render("index");
});

const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log(`Listening on http://localhost:${port}`);
});
