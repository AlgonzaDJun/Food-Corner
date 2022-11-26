const express = require("express");
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
    const user = await User.find({ email, password });

    if (user.length > 0) {
      // const isMatched = await User.comparePassword(password);
      // if (!isMatched) {
      //   return res.status(400).json({ message: "user Loged in failed" });
      // } else {
      //   const currentUser = {
      //     name: user[0].name,
      //     email: user[0].email,
      //     role: user[0].role,
      //     _id: user[0]._id,
      //   };
      //   res.send(currentUser);
      // }
      const currentUser = {
        name: user[0].name,
        email: user[0].email,
        role: user[0].role,
        _id: user[0]._id,
      };
      res.send(currentUser);
    } else {
      return res.status(400).json({ message: "user Loged in failed" });
    }

    // jika tidak ada user atau password yang sama
    // if (!user) {
    //   return res.status(400).json({ message: "user Loged in failed" });
    // }

    // decrypted password dengan bcrypt
    // const isMatched = await user.comparePassword(password);
    // if (!isMatched) {
    //   return res.status(400).json({ message: "user Loged in failed" });
    // }

    // jika ada user
    // if (user.length > 0) {
    //   const currentUser = {
    //     name: user[0].name,
    //     email: user[0].email,
    //     role: user[0].role,
    //     _id: user[0]._id,
    //   };
    //   res.send(currentUser);
    // }
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
