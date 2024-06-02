const { genSalt, hash } = require("bcryptjs");
const HttpError = require("../error/error");
const User = require("../models/userModel");

const loginUser = (req, res, next) => {
  res.json("Login user");
};

const registerUser = async (req, res, next) => {
  try {
    let { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      return next(new HttpError("Please fill out all fields", 422));
    }

    email = email.trim().toLowerCase();
    const isEmailExists = await User.findOne({ email });

    if (isEmailExists) return next(new HttpError("Email already exists", 422));

    if (password.trim().length < 6)
      return next(new HttpError("Password shold have 6 characters"));

    if (password != confirmPassword) {
      return next(new HttpError("Password doesn't match", 422));
    }

    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);
    const user = await User.create({ name, email, password: hashedPassword });

    res.status(201).json(`User ${email} is created`);
  } catch (err) {
    return next(new HttpError("Failed to register User", 422));
  }
};

const getUserDetails = (req, res, next) => {
  res.json("User details");
};

const getAtuhors = (req, res, next) => {
  res.json("All authors");
};

const changeAvatar = (req, res, next) => {
  res.json("Change avatar");
};

const editUserDetails = (req, res, next) => {
  res.json("Edit user details");
};

module.exports = {
  loginUser,
  registerUser,
  getUserDetails,
  getAtuhors,
  changeAvatar,
  editUserDetails,
};
