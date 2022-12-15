const express = require("express");
const router = express.Router();
const Stand = require("../models/standModel");

router.get("/getallstands", async (req, res) => {
  try {
    // const stands = await Stand.find({});
    // res.send(stands);
    const StandWFood = [
      {
        $lookup: {
          from: "foods",
          localField: "standID",
          foreignField: "standID",
          as: "menu",
        },
      },
    ];
    const standWithFood = await Stand.aggregate(StandWFood);
    res.send(standWithFood);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.get("/getstandsfood", async (req, res) => {
  try {
    const StandWFood = [
      {
        $lookup: {
          from: "foods",
          localField: "standID",
          foreignField: "standID",
          as: "menu",
        },
      },
    ];
    const standWithFood = await Stand.aggregate(StandWFood);
    res.send(standWithFood);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});



module.exports = router;
