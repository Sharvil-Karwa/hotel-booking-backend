const mongoose = require("mongoose");
var mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/";
mongoose.connect(mongoUri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

var connection = mongoose.connection;

connection.on("error", () => {
  console.log("Mongo DB Connection failed");
});

connection.on("connected", () => {
  console.log("Mongo DB Connection Success");
});

module.exports = mongoose;
