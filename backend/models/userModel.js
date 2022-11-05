const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, require },
    email: { type: String, require },
    password: { type: String, require },
    role: { type: String, require, default: "user" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);
