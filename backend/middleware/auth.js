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
    next()
  } catch (error) {
    return res.status(401).json({ message: "You must log in to access this" });
  }

};

module.exports = { isAuth };
