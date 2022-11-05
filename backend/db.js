const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://arjun:arjun@cluster0.j0ywwgr.mongodb.net/e-canteen";

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