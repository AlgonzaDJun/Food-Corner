const mongoose = require("mongoose");
const Food = require("./foodModel");

const standSchema = mongoose.Schema(
  {
    standName: { type: String, require },
    standID: { type: String, require },
    menu: [],
  },
  { timestamps: true }
);

const standModel = mongoose.model('stands', standSchema);

module.exports = standModel;