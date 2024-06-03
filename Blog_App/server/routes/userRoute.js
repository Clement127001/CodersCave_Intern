const { Router } = require("express");
const authMiddleware = require("../middleware/authMiddleware");

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
router.post("/change-avatar", authMiddleware, changeAvatar);
router.patch("/edit", authMiddleware, editUserDetails);

module.exports = router;
