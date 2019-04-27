const path = require("path");
const express = require("express");

const app = new express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "pages/index.ejs"));
});

app.listen("3000", () => {
  console.log("Server is running on port 3000.");
});
