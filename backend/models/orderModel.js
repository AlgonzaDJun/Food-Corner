const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    name: { type: String, require },
    email: { type: String, require },
    orderItems: [],
    orderAmount: { type: Number, require },
    isComplete: { type: Boolean, require, default: false },
    isPaid: { type: Boolean, require, default: false },
  },
  {
    timestamps: true,
  }
);

const orderModel = mongoose.model("orders", orderSchema);

module.exports = orderModel;
