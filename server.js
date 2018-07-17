const express = require("express");
const hbs = require("hbs");

hbs.registerPartials(__dirname + "/views/partials");

const data = {
  locations: require("./data/locations"),
  users: require("./data/users"),
  instruments: require("./data/instruments")
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
  res.render("index", { instruments: data.instruments });
});

const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log(`Listening on http://localhost:${port}`);
});
