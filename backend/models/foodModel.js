const mongoose = require("mongoose");

const foodSchema = mongoose.Schema(
  {
    name: { type: String, require },
    image: { type: String, require },
    price: { type: String, require },
    standID: { type: String, require },
    standName: { type: String, require },
  },
  {
    timestamps: true,
  }
);

const foodModel = mongoose.model("foods", foodSchema);

module.exports = foodModel;
