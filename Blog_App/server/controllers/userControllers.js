const { genSalt, hash } = require("bcryptjs");
const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");
const HttpError = require("../error/error");
const User = require("../models/userModel");

const loginUser = async (req, res, next) => {
  try {
    let { email, password } = req.body;

    if (!email || !password)
      return next(new HttpError("Please fill all details"));

    email = email.toLowerCase();

    const userDetail = await User.findOne({ email });

    if (!userDetail)
      return next(new HttpError("User not found, please register", 401));

    const isPasswordMatch = await userDetail.comparePassword(password);

    if (!isPasswordMatch)
      return next(new HttpError("Invalid Credentials", 401));

    const token = userDetail.createToken();

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

const getUserDetails = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).select("-password");

    if (!user) return next(new HttpError(`No user found with ${id}`, 400));

    res.status(200).json({ user });
  } catch (err) {
    return next(new HttpError(err));
  }
};

const getAtuhors = async (req, res, next) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json({ users });
  } catch (err) {
    return next(new HttpError(err));
  }
};

const changeAvatar = async (req, res, next) => {
  try {
    if (!req.files.avatar)
      return next(new HttpError("Please select any image", 422));

    const userDetail = await User.findById(req.user.userId);

    //if user avatar is already exists, unlink and add the new image
    if (userDetail.avatar) {
      try {
        const filePath = path.join(
          __dirname,
          "..",
          "uploads",
          userDetail.avatar
        );
        await fs.promises.unlink(filePath);
      } catch (err) {
        return next(new HttpError("Error moving the avatar file", 500));
      }
    }

    const { avatar } = req.files;
    if (avatar.size > 500000)
      return next(
        new HttpError(
          "File size is too big, please select less than 500kb",
          422
        )
      );

    let filename = avatar.name;
    let splittedFilename = filename.split(".");
    const newFileName =
      splittedFilename[0] +
      uuid() +
      "." +
      splittedFilename[splittedFilename.length - 1];

    avatar.mv(
      path.join(__dirname, "..", "uploads", newFileName),
      async (err) => {
        if (err) return next(new HttpError(err));

        const userWithUpdatedAvatar = await User.findByIdAndUpdate(
          userDetail._id,
          { avatar: newFileName },
          { new: true }
        ).select("-password");

        if (!userWithUpdatedAvatar)
          return next(new HttpError("Avatar couldn't be changed", 422));

        return res.status(200).json({ user: userWithUpdatedAvatar });
      }
    );
  } catch (err) {
    return next(new HttpError(err));
  }
};

const editUserDetails = async (req, res, next) => {
  const { name, email, password, newPassword, confirmNewPassword } = req.body;

  if (!name || !email || !password || !newPassword || !confirmNewPassword)
    return next(new HttpError("Please fill out all the fields", 422));

  // console.log(email);

  const userWithCurrEmail = await User.findOne({ email: email });

  if (userWithCurrEmail && userWithCurrEmail._id != req.user.userId) {
    return next(new HttpError("Email already exists", 400));
  }

  if (newPassword === password)
    return next(new HttpError("New password is same as the old one", 400));

  if (newPassword !== confirmNewPassword)
    return next(new HttpError("New password doesn't match"));

  const salt = await genSalt(10);
  const hashedPassword = await hash(newPassword, salt);

  const newDetails = await User.findByIdAndUpdate(
    req.user.userId,
    { name, email, password: hashedPassword },
    { new: true }
  );

  res
    .status(202)
    .json({ user: newDetails, message: "user details updated successfully" });

  // const userDetail = await User.findById(req.user.userId);
};

module.exports = {
  loginUser,
  registerUser,
  getUserDetails,
  getAtuhors,
  changeAvatar,
  editUserDetails,
};
