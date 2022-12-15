const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    name: { type: String, require },
    email: { type: String, require },
    orderItems: [],
    orderAmount: { type: Number, require },
    eatPlace: { type: String },
    adminFee: { type: Number, require, default: 1000 },
    isPaid: { type: Boolean, require, default: false },
    isDelivered: { type: Boolean, require, default: false },
    paidAt: {
      type: Date,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const orderModel = mongoose.model("orders", orderSchema);

module.exports = orderModel;
