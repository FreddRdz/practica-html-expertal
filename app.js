const express = require("express");
const path = require("path");
const app = express();
const PORT = 3030 || process.env.PORT;

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log("El servidor esta corriendo");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"));
});
