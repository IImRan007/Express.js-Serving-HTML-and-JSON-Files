const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.write("<h1>Welcome to home page</h1>");
  res.write("<h1>Welcome to home page</h1>");
  res.send();
});

// app.get("/temp", (req, res) => {
//   res.send([
//     {
//       id: 1,
//       name: "Imran",
//     },
//     {
//       id: 2,
//       name: "Nick",
//     },
//     {
//       id: 3,
//       name: "Rick",
//     },
//   ]);
// });

app.get("/temp", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Imran",
    },
    {
      id: 2,
      name: "Nick",
    },
    {
      id: 3,
      name: "Rick",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
