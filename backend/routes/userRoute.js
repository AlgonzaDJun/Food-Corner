const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../models/userModel");
const Food = require("../models/foodModel");
const jwt = require("jsonwebtoken");
const { isAuth } = require("../middleware/auth");
require("dotenv").config();

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
    // if (user) {
    //   const currentUser = {
    //     name: user.name,
    //     email: user.email,
    //     role: user.role,
    //     _id: user._id,
    //   };
    //   res.send(currentUser);
    // }

    // const token = await generateJWT(user);

    generateToken(user, 200, res);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

// menampilkan data user
router.get("/getuser", isAuth, async (req, res) => {
  const user = await User.findById(req.user._id);
  res.status(200).json({
    success: true,
    user,
  });
});

// tambah ke keranjang
router.post("/addcart", async (req, res) => {
  const cartItem = req.body;
  try {
    const user = await User.findById(cartItem.currentUserId);
    if (!user) return res.status(400).json({ message: "User does not exist." });

    const newCart = {
      name: cartItem.name,
      standID: cartItem.standID,
      standName: cartItem.standName,
      _id: cartItem._id,
      image: cartItem.image,
      quantity: cartItem.quantity,
      price: cartItem.price,
      prices: cartItem.prices,
    };
    const checkCart = user.cart.find((item) => item._id === cartItem._id);
    if (checkCart) {
      user.cart = user.cart.map((item) => {
        if (item._id === cartItem._id) {
          item.quantity = parseInt(item.quantity) + 1;
        }
        return item;
      });
      await User.findByIdAndUpdate(
        { _id: cartItem.currentUserId },
        {
          cart: user.cart,
        }
      );
      res.status(200).json({ message: "Cart Update" });
    } else {
      user.cart.push(newCart);
      await user.save();
      res.status(200).json({ message: "Cart Added" });
    }
  } catch (err) {
    return res.status(500).json({ message: "terjadi error" + err.message });
  }
});

// tambah dan kurang keranjang
router.post("/incrementcart", async (req, res) => {
  const cartItem = req.body;
  try {
    const user = await User.findById(cartItem.currentUserId);
    if (!user) return res.status(400).json({ message: "User does not exist." });
    // const food = await Food.findById(cartItem._id);
    const checkCart = user.cart.find((item) => item._id === cartItem._id);
    if (!checkCart) {
      return res.status(400).json({ message: "Product not in cart" });
    } else {
      user.cart = user.cart.map((item) => {
        if (item._id === cartItem._id) {
          item.quantity = parseInt(item.quantity) + cartItem.quantity;
        }
        return item;
      });
    }
    await User.findByIdAndUpdate(
      { _id: cartItem.currentUserId },
      {
        cart: user.cart,
      }
    );
    res.status(200).json({ data: user.cart, message: "Cart quantity updated" });
  } catch (err) {
    return res.status(500).json({ message: "terjadi error" + err.message });
  }
});

const generateJWT = (data) => {
  const { _id } = data;
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

const generateToken = async (user, statusCode, res) => {
  const token = await generateJWT(user);

  const options = {
    httpOnly: true,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    // secure: true,
  };

  const currentUser = {
    name: user.name,
    email: user.email,
    role: user.role,
    _id: user._id,
  };

  res.status(statusCode).cookie("token", token, options).json(currentUser);
};

module.exports = router;
