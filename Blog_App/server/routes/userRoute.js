const { Router } = require("express");

const {
  loginUser,
  registerUser,
  getUserDetails,
  getAtuhors,
  changeAvatar,
  editUserDetails,
} = require("../controllers/userControllers");

const router = Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/:id", getUserDetails);
router.get("/", getAtuhors);
router.post("/change-avatar", changeAvatar);
router.patch("/edit", editUserDetails);

module.exports = router;
