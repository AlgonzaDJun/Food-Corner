const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../models/userModel");

router.post("/register", async (req, res, next) => {
  const { email, name, password } = req.body;
  const newUser = new User({
    name,
    email,
    password,
  });

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ error: "Email sudah dipakai" });
    } else if (!email || !name || !password) {
      return res.status(400).json({ error: "Field tidak boleh kosong" });
    } else if (password.length < 6) {
      return res.status(400).json({ error: "Password anda terlalu pendek" });
    }
    newUser.save();
    res.send("user register successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    // jika tidak ada user atau password yang sama
    if (!user) {
      return res.status(400).json({ message: "Maaf user tidak ada" });
    }

    // decrypted password dengan bcrypt
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      return res.status(400).json({ message: "Password tidak sama" });
    }

    // jika ada user
    if (user) {
      const currentUser = {
        name: user.name,
        email: user.email,
        role: user.role,
        _id: user._id,
      };
      res.send(currentUser);
    }
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
