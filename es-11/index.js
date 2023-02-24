const express = require("express");
const morgan = require("morgan");
const planets = require("./DataBase");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(morgan("dev"));

const port = process.env.PORT;
app.listen(port, function () {
  console.log(`server running on port ${port}`);
});









