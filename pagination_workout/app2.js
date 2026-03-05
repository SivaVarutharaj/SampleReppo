const express = require("express");
const app = express();

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
  {
    name: "nivetha",
    age: 29,
  },
];

app.get("/", (req, res) => {
  let status = res.statusCode ? true : false;
  res.json({
    Status: status,
    arr,
  });
});

// pagination
app.get("/", (req, res) => {
  let page = req.query.page; // 1 // page 1 => 1d,2d,3d ; page 2 =>4d,5d,6d
  let limit = req.query.limit; // 3
  let status = res.statusCode ? true : false;
  const arr2 = [];
  const total_Length = arr.length;

  if (page == 0) page = 1;

  const skip = (page - 1) * limit;
  const nextpage = limit * page;
  // arr[i=0]<3 // arr[i=3]< 6 // arr[i=6]<9

  for (let index = skip; index < nextpage; index++) {
    arr2.push(arr[index]);

    if (arr[index] == null) {
      return res.status(400).send("No Data..!");
    }
  }

  res.json({
    Status: status,

    Total_Length: total_Length,
    remaing_data: total_Length - nextpage,
    Length: arr2.length,
    arr2,
  });
});

module.exports = app;

// 1. error : is localhost:3000 send req properly response get '/' good..but use query pharams page=1&limit=3 also stuck in same url..

// 2.error : is suppose have remaining data 1 or 2 etc.. not show properly i use if condition..i know the problem but i don`t know solution also..

//3.error : is i push to arr2 but some case we have large amount of data that time we can't push all data bcz it takes lot of time consumption..
