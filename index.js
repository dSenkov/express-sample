const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/list", (req, res) => {
  res.json([
    {
      name: "Jeff Bezos",
      company: "Amazon"
    },
    {
        name: "Bill Gates",
        company: "Microsoft"
    }
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
