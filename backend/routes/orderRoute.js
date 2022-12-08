const express = require("express");
const orderModel = require("../models/orderModel");
const router = express.Router();

router.post("/placeorders", async (req, res) => {
  const { totalPrice, currentUser, cartItems } = req.body;

  const newOrder = new orderModel({
    name: currentUser.name,
    email: currentUser.email,
    orderItems: cartItems,
    orderAmount: totalPrice,
  });

  try {
    newOrder.save();
    res.send("Order Telah Berhasil dilakukan");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
