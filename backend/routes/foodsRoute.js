const express = require("express");
const { isSeller } = require("../middleware/auth");
const router = express.Router();
const Food = require("../models/foodModel");
const cloudinary = require("../utils/cloudinary");

// get all foods - user
router.get("/getallfoods", async (req, res) => {
  try {
    const foods = await Food.find({});
    res.send(foods);
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
});

// Create Food inside stand
router.post("/createFood", isSeller, async (req, res) => {
  const { name, price, image } = req.body;
  const { standID } = req.user;

  // check if name price image empty send error
  if (!name || !price || !image) {
    return res.status(400).json({ message: "please fill all the fields" });
  }
  

  try {
    const result = await cloudinary.uploader.upload(image, {
      folder: "products",
      // width: 300,
      // crop: "scale"
    });
    const newFood = new Food({
      name: name,
      price: price,
      standID: standID,
      image: result.secure_url,
      standName: req.user.name,
    });
    newFood.save();
    res.status(200).json({ message: "food has been added" });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

// Read all food inside stand
router.get("/getstandfood", isSeller, async (req, res) => {
  const { standID } = req.user;

  try {
    const standFood = await Food.find({ standID: standID }).sort({ createdAt: "desc" });
    res.status(200).json(standFood);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Change Food inside the stand
router.put("/:id/updatefood", isSeller, async (req, res) => {
  const { name, price, image } = req.body;
  const food = await Food.findById(req.params.id);
  if (!food) {
    return res.status(404).json({ message: "food not found" });
  }
  // check if name price image empty send error
  if (!name || !price || !image) {
    return res.status(400).json({ message: "please fill all the fields" });
  }
  try {
    const result = await cloudinary.uploader.upload(image, {
      folder: "updatedImage",
      // width: 300,
      // crop: "scale"
    });
    const updatedFood = await Food.findByIdAndUpdate(req.params.id, {
      name,
      price,
      image : result.secure_url,
    });
    res.status(200).json({ data: food, message: "food updated" });
  } catch (error) {
    res.status(400).json(error);
  }
});

// Delete Food inside the stand
router.delete("/:id/deletefood", isSeller, async (req, res) => {
  const food = await Food.findById(req.params.id);
  if (!food) {
    return res.status(404).json({ message: "food not found" });
  }
  try {
    const deletedFood = await Food.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "food deleted" });
  } catch (error) {
    res.status(400).json(error);
  }
});

// router.get("/getStandsFood", async (req, res) => {
//   const agg = [
//     {
//       $lookup: {
//         from: "foods",
//         localField: "standID",
//         foreignField: "standID",
//         as: "menu",
//       },
//     },
//   ];

//   const a = await Food.aggregate(agg);
//   res.send(a);
// });

module.exports = router;
