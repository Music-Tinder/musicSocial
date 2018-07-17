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
  },
  4: {
    id: 4,
    name: "America",
    latLong: [442, 0]
  },
  5: {
    id: 5,
    name: "Spain",
    latLong: [220, 0]
  }
};

let users = [
  {
    id: 1,
    name: "Ollie",
    surname: "Crook",
    image:
      "https://pbs.twimg.com/profile_images/1002882008454967296/_gecgo4l_400x400.jpg",
    locationIds: [1, 3],
    instruments: ["Bass", "Guitar"],
    genres: ["Jazz"],
    social: {
      soundcloud: "139581262",
      twitter: "oilyquack",
      instagram: "oilyquack"
    },
    availability: "weekends"
  },
  {
    id: 2,
    name: "Ahmed",
    surname: "ices",
    image: "https://...",
    location: [1, 2],
    instruments: ["Drums", "Vocals"],
    genres: ["Screams"],
    social: {
      soundcloud: "https://...",
      twitter: "rices",
      instagram: "licence",

      availability: "everyDay"
    }
  },
  {
    id: 3,
    name: "Michael",
    surname: "Thomas",
    image: "https://...",
    location: [1, 3],
    instruments: ["Drums", "Vocals"],
    genres: ["Screams"],
    social: {
      soundcloud: "https://...",
      twitter: "MycallThomas",
      instagram: "MycallThomas"
    },
    availability: "Tuesday"
  },
  {
    id: 4,
    name: "Rafal",
    surname: "Porzucek",
    image: "https://...",
    location: "London",
    instruments: ["Bass", "Vocals"],
    genres: ["Screams"],
    social: {
      soundcloud: "https://...",
      twitter: "Rafal",
      instagram: "Rafal"
    },
    availability: "Saturday"
  },
  {
    id: 5,
    name: "Matt",
    surname: "Garrity",
    image: "https://...",
    location: "London",
    instruments: ["Guitar", "Vocals"],
    genres: ["Screams"],
    social: {
      soundcloud: "https://...",
      twitter: "MattGarrity",
      instagram: "MattGarrity"
    },
    availability: "everyDay"
  },
  {
    id: 6,
    name: "Whitney",
    surname: "Houston",
    image: "https://...",
    locationIds: [4, 1],
    instruments: ["Vocals", "Guitar"],
    genres: ["R n B"],
    social: {
      soundcloud: "https://...",
      twitter: "WhitneyHouston",
      instagram: "WhitneyHouston"
    },
    availability: "weekends"
  },
  {
    id: 7,
    name: "James",
    surname: "Blunt",
    image: "https://...",
    locationIds: [1, 3],
    instruments: ["Vocals", "Guitar"],
    genres: ["Jazz"],
    social: {
      soundcloud: "https://...",
      twitter: "JamesBLunt",
      instagram: "JamesBLunt"
    },
    availability: "weekends"
  },
  {
    id: 8,
    name: "Joe",
    surname: "Spunge",
    image: "https://...",
    locationIds: [1, 3],
    instruments: ["Guitar"],
    genres: ["Jazz"],
    social: {
      soundcloud: "https://...",
      twitter: "JoeSpunge",
      instagram: "JoeSpunge"
    },
    availability: "weekends"
  },
  {
    id: 9,
    name: "Harry",
    surname: "Styles",
    image: "https://...",
    locationIds: [1, 3],
    instruments: ["Vocals"],
    genres: ["Jazz"],
    social: {
      soundcloud: "https://...",
      twitter: "HarryStyles",
      instagram: "HarryStyles"
    },
    availability: "everyday"
  },
  {
    id: 10,
    name: "Marc ",
    surname: "Anthony",
    image: "https://...",
    locationIds: [1, 5],
    instruments: ["Vocals", "Guitar"],
    genres: ["Love Songs"],
    social: {
      soundcloud: "https://...",
      twitter: "MarcAnthony",
      instagram: "MarcAnthony"
    },
    availability: "weekends"
  }
];

app.get("/api/users", function(req, res) {
  res.json(users);
});
app.get("/api/users/:instrument", function(req, res) {
  if (req.params.instrument === "all") {
    res.json(users);
  } else {
    let filteredArray = users.filter(user => {
      return user.instruments.indexOf(req.params.instrument) > -1;
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
