const mongoose = require("mongoose");
require('dotenv').config()

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("mongodb connection succesfully");
});

db.on("error", () => {
  console.log("mongodb connection failed");
});

module.exports = mongoose;