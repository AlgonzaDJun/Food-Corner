const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: { type: String, require },
    standID: { type: String }, //mungkin bakal ngaruh ?
    email: { type: String, require },
    password: { type: String, require },
    cart: { type: Array },
    role: { type: String, require, default: "user" },
  },
  {
    timestamps: true,
  }
);

// encrypt password before save
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// verify password
userSchema.methods.comparePassword = async function (userPassword) {
  return await bcrypt.compare(userPassword, this.password);
};

module.exports = mongoose.model("users", userSchema);
