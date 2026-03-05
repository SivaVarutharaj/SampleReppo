const express = require("express");
const app = express();

// app.use(express.urlencoded);
//intha rendu middleware is worng brower load agitee..tha irukkum..if untill u find the solvtion
// app.use(express.json);

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const arr = [
  {
    name: "siva",
    age: 23,
  },
  {
    name: "deva",
    age: 20,
  },
  {
    name: "roja",
    age: 19,
  },
  {
    name: "gowtham",
    age: 28,
  },
  {
    name: "jeeva",
    age: 34,
  },
  {
    name: "jana",
    age: 20,
  },
  {
    name: "vishva",
    age: 23,
  },
  {
    name: "kathir",
    age: 20,
  },
  {
    name: "devit",
    age: 19,
  },
  {
    name: "mani",
    age: 28,
  },
  {
    name: "susi",
    age: 34,
  },
  {
    name: "karthi",
    age: 20,
  },
];

// pagination
app.get("/", (req, res) => {
  let page = req.query.page; // 1 // page 1 => 1d,2d,3d ; page 2 =>4d,5d,6d
  let limit = req.query.limit; // 3
  let status = res.statusCode ? true : false;

  const skip = (page - 1) * limit;
  const nextpage = limit * page;
  // arr[i=0]<3 // arr[i=3]< 6 // arr[i=6]<9
  const arr2 = [];

  for (let index = skip; index < nextpage; index++) {
    arr2.push(arr[index]);

    if (arr[index] == null) {
      return res.status(400).send("No Data..!");
    }
  }

  res.json({ Status: status, Length: arr2.length, arr2 });
  //res.send("<h1>Welcome</h1>");   oru res mattumtha udukka mudiyum..bcz http responce only one response
});

module.exports = app;
