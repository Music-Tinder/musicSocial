const express = require("express");
const app = express();

app.use("/static", express.static("static"));
app.set("view engine", "hbs");

let locations = {
  1: {
    id: 1,
    name: "London",
    latLong: [53, 0]
  },
  2: {
    id: 2,
    name: "Sevenoaks",
    latLong: [53, 0]
  },
  3: {
    id: 3,
    name: "Brighton",
    latLong: [53, 0]
  }
};

let users = [
  {
    id: 1,
    name: "Ollie",
    surname: "Crook",
    image: "https://...",
    locationIds: [1, 3],
    instruments: ["Bass","Guitar"],
    genres: ["Jazz"],
    social: {
      soundcloud: "https://...",
      twitter: "oilyquack",
      instagram: "oilyquack",
      linkedIn: "https://..."
    },
    availability: "weekends"
  },
  {
    id: 2,
    name: "Ahmed",
    surname: "ices",
    image: "https://...",
    location: "london",
    instruments: ["Bass","Vocals","Piano"],
    genre: ["Screams"],
    social:{
    soundcloud: "https://...",
    twitter: "rices",
    instagram: "licence",
    linkedIn: "https://..."
    },
    availability: "everyDay"
    
  }
];

app.get("/api/users", function(req, res) {
  res.json(users);
});
app.get("/api/users/:instrument", function(req, res) {
  if(req.params.instrument==="all")
  {
    
  res.json(users);
  }
  else{
    
  let filteredArray = users.filter(user=>{
    return (user.instruments.indexOf(req.params.instrument) >-1)
  });

  console.log(filteredArray);
  res.json(filteredArray);
}
});

app.get("*", function(req, res) {
  res.render("index");
});

const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log(`Listening on port number ${port}`);
});
