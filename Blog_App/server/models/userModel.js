const { model, Schema } = require("mongoose");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
});

//don't use arrow function if you are using this

userSchema.methods.createToken = function () {
  return sign({ userId: this._id, name: this.name }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

userSchema.methods.comparePassword = function (userPassword) {
  const isPasswordmatch = compare(userPassword, this.password);

  return isPasswordmatch;
};

module.exports = model("User", userSchema);
