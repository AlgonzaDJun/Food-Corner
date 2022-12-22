const express = require("express");
const { isAdmin } = require("../middleware/auth");
const router = express.Router();
const Stand = require("../models/standModel");
const User = require("../models/userModel");
const bcrypt = require('bcryptjs')

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

// CREATE STAND - ADMIN
router.post("/createstand", isAdmin, async (req, res) => {
  const { email, name, password, standID } = req.body;
  const newUser = new User({
    name,
    email,
    password,
    standID,
    role: "seller",
  });

  const newStand = new Stand({
    standName: name,
    standID,
  });

  try {
    const userExist = await User.findOne({ email: email });
    const standExist = await Stand.findOne({ standID: standID });

    if (userExist || standExist) {
      return res.status(400).json({ error: "Email / ID Stand sudah dipakai" });
    } else if (!email || !name || !password) {
      return res.status(400).json({ error: "Field tidak boleh kosong" });
    } else if (password.length < 6) {
      return res.status(400).json({ error: "Password anda terlalu pendek" });
    }
    newUser.save();
    newStand.save();
    res.status(200).json({ message: "berhasil menambah stand baru" });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

// READ STAND - ADMIN
router.get("/getstands", isAdmin, async (req, res) => {
  try {
    const stand = await User.find({ role: "seller" }).sort({ createdAt: "desc" });
    res.status(200).json(stand);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

// CHANGE/ UPDATE STAND
router.put("/:id/updatestand", isAdmin, async (req, res) => {
  const { name, email, password } = req.body;
  const standInUser = await User.findById(req.params.id);
  const standInStand = await Stand.find({ standID: standInUser.standID });

  if (!standInUser || !standInStand) {
    return res.status(404).json({ message: "stand is not found" });
  }
  try {
    const updatedStand = await User.findByIdAndUpdate(req.params.id, {
      name,
      email,
      password : await bcrypt.hash(password, 10)
    });
    standInStand.standName = name;
    await Stand.findOneAndUpdate(
      { standID: standInUser.standID },
      { standName: name }
    );
    res.status(200).json({ message: "stand updated" });
  } catch (error) {
    res.status(400).json(error);
  }
});

// DELETE STAND
router.delete("/:id/deletestand", isAdmin, async (req, res) => {
  const standInUser = await User.findById(req.params.id);
  const standInStand = await Stand.find({ standID: standInUser.standID });

  if (!standInUser || !standInStand) {
    return res.status(404).json({ message: "stand is not found" });
  }
  try {
    await User.findByIdAndDelete(req.params.id);
    await Stand.findOneAndDelete({ standID: standInUser.standID });
    res.status(200).json({ message: "stand deleted" });
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
