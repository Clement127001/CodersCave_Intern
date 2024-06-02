const { genSalt, hash } = require("bcryptjs");
const HttpError = require("../error/error");
const User = require("../models/userModel");

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return next(new HttpError("Please fill all details"));

    const userDetail = await User.findOne({ email });

    if (!userDetail)
      return next(new HttpError("User not found, please register", 401));

    const isPasswordMatch = await userDetail.comparePassword(password);

    if (!isPasswordMatch)
      return next(new HttpError("Invalid Credentials", 401));

    const token = await userDetail.createToken();

    res.status(200).json({
      user: userDetail,
      token,
      message: "User logged in successfully",
    });
  } catch (err) {
    return next(
      new HttpError("Failed to Login in user,please check credentials", 422)
    );
  }
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
    const token = await user.createToken();

    res
      .status(201)
      .json({ user, token, message: "User registered successfully" });
  } catch (err) {
    return next(new HttpError("Failed to register User", 422));
  }
};

const getUserDetails = (req, res, next) => {};

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
