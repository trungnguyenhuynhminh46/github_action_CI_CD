const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/names", (req, res) => {
  res.send("Nguyễn Huỳnh Minh Trung");
});

app.listen(3000, () => {
  console.log("Server is runnint on port 3000");
});
