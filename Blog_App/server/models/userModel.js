const { model, Schema } = require("mongoose");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ],
    required: true,
  },
  posts: {
    type: Number,
    default: 0,
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
