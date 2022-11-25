const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Silakan masukkan nama lengkap anda"],
    },
    email: { type: String, require: [true, "Silakan Masukkan email"] },
    password: {
      type: String,
      require: [true, "Silakan masukkan password"],
      minlength: [6, "password must have at least six(6) characters"],
    },
    role: { type: String, require, default: "user" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);
