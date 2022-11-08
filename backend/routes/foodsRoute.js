const express = require("express");
const router = express.Router();
const Food = require("../models/foodModel");

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
