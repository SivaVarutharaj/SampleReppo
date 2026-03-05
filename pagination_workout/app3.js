const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const user = [
  {
    name: "user1",
    age: 23,
  },
  {
    name: "user2",
    age: 20,
  },
  {
    name: "user3",
    age: 19,
  },
  {
    name: "user4",
    age: 28,
  },
  {
    name: "user5",
    age: 34,
  },
  {
    name: "user6",
    age: 20,
  },
  {
    name: "user7",
    age: 23,
  },
  {
    name: "user8",
    age: 20,
  },
  {
    name: "user9",
    age: 19,
  },
  {
    name: "user10",
    age: 28,
  },
  {
    name: "user11",
    age: 34,
  },
  {
    name: "user12",
    age: 20,
  },
  {
    name: "user13",
    age: 29,
  },
];

// pagination
app.get("/", paginationFun(arr), (req, res) => {
  res.json(res.paginationFun);
});

function paginationFun(data) {
  return (req, res, next) => {
    let page = parseInt(req.query.page); // 1 // page 1 => 1d,2d,3d ; page 2 =>4d,5d,6d
    let limit = parseInt(req.query.limit); // 3
    // page = page < 1 ? 1 : page;
    // limit = limit < 1 ? 3 : limit;
    const startIndex = (page - 1) * limit;
    const endIndex = limit * page;
    // arr[i=0]<3 // arr[i=3]< 6 // arr[i=6]<9 // arr[i=9]<12

    const result = {};

    if (startIndex > 0) {
      result.previous = { previous: page - 1, limit: limit };
    }
    if (endIndex < arr.length) {
      result.next = { Next: page + 1, limit: limit };
    }

    result.result = data.slice(startIndex, endIndex);

    res.paginationFun = result;
    next();
  };
}

module.exports = app;
