const loginUser = (req, res, next) => {
  res.json("Login user");
};

const registerUser = (req, res, next) => {
  res.json("Resigter user");
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
