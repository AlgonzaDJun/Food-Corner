const express = require("express");
const { isSeller, isAuth } = require("../middleware/auth");
const orderModel = require("../models/orderModel");
const router = express.Router();

// user membuat order baru
router.post("/placeorders", async (req, res) => {
  const { totalPrice, currentUser, cartItems, eatPlace } = req.body;

  const newOrder = new orderModel({
    name: currentUser.name,
    email: currentUser.email,
    orderItems: cartItems,
    orderAmount: parseInt(totalPrice) + 1000,
    eatPlace: eatPlace,
  });

  try {
    newOrder.save();
    res.send("Order Telah Berhasil dilakukan");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

// user membaca order miliknya
router.get("/getuserorder", isAuth, async (req, res) => {
  const { email } = req.user;

  try {
    const order = await orderModel
      .find({ email: email })
      .sort({ createdAt: "desc" });
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

// membaca seluruh order yang ada - seller
router.get("/getstandorder", isSeller, async (req, res) => {
  const { standID } = req.user;
  try {
    const getOrderStand = [
      {
        $addFields: {
          orderItems: {
            $filter: {
              input: "$orderItems",
              as: "orderItem",
              cond: { $eq: ["$$orderItem.standID", standID] },
            },
          },
        },
      },
    ];
    const getOrderInStand = await orderModel.aggregate(getOrderStand);
    const update = getOrderInStand.filter((item) => item.orderItems.length !== 0);
    res.send(update);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// update order menjadi sudah dibayar (paid) - seller
router.put("/:id/:food_id/pay", isSeller, async (req, res) => {
  const order = await orderModel.findById(req.params.id);
  const food_id = req.params.food_id;

  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }
  const checkFoodId = order.orderItems.find((item) => item._id === food_id);
  if (!checkFoodId) {
    return res.status(400).json({ message: "Product not in order item" });
  } else {
    order.orderItems = order.orderItems.map((item) => {
      if (item._id === food_id) {
        item.isPaid = true;
      }
      return item;
    });
  }
  await orderModel.findByIdAndUpdate(
    { _id: req.params.id },
    {
      orderItems: order.orderItems,
    }
  );
  // order.isPaid = true;
  // order.paidAt = Date.now();

  res
    .status(200)
    .json({ data: order.orderItems, message: "order has been paid" });
});

// update order menjadi sudah diantar (delivered) - seller
router.put("/:id/:food_id/deliver", isSeller, async (req, res) => {
  // const order = await orderModel.findById(req.params.id);
  // if (!order) {
  //   res.status(404).json({ message: "Order not found" });
  // }

  // order.isDelivered = true;
  // order.deliveredAt = Date.now();

  // const updatedOrder = await order.save();
  // res.json(updatedOrder);

  const order = await orderModel.findById(req.params.id);
  const food_id = req.params.food_id;

  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }
  const checkFoodId = order.orderItems.find((item) => item._id === food_id);
  if (!checkFoodId) {
    return res.status(400).json({ message: "Product not in order item" });
  } else {
    order.orderItems = order.orderItems.map((item) => {
      if (item._id === food_id) {
        item.isDelivered = true;
      }
      return item;
    });
  }
  await orderModel.findByIdAndUpdate(
    { _id: req.params.id },
    {
      orderItems: order.orderItems,
    }
  );
  // order.isPaid = true;
  // order.paidAt = Date.now();

  res
    .status(200)
    .json({ data: order.orderItems, message: "order has been delivered" });
});

module.exports = router;
