require("dotenv").config();
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const dbConfig = require("./db");
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
