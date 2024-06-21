import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(8800, () => {
  console.log("Connected in port 8800");
});
