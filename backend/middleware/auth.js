const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const isAuth = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: "You must log in to access this" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded._id);
    next();
  } catch (error) {
    return res.status(401).json({ message: "You must log in to access this" });
  }
};

const isAdmin = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: "You must log in to access this" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded._id);
    if (req.user.role === "admin") {
      next();
    } else {
      res.status(440).json({ message: "You are not an admin" });
    }
  } catch (error) {
    return res.status(401).json({ message: "You must log in to access this" });
  }
};

const isSeller = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: "You must log in to access this" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded._id);

    if (req.user.role === "seller") {
      next();
    } else {
      res.status(440).json({ message: "You are not a seller" });
    }
  } catch (error) {
    return res.status(401).json({ message: "You must log in to access this" });
  }
};

module.exports = { isAuth, isAdmin, isSeller };
