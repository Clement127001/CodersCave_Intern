const { Router } = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  getSingleBlogs,
  getAllBlogs,
  getAllblogOfAuthor,
  getblogsWithCategory,
  createBlog,
  editBlog,
  deleteBlog,
} = require("../controllers/blogsControllers");

const router = Router();

router.get("/", getAllBlogs);
router.get("/:id", getSingleBlogs);
router.get("/user/:id", getAllblogOfAuthor);
router.get("/category/:categoryId", getblogsWithCategory);
router.post("/", authMiddleware, createBlog);
router.patch("/:id", authMiddleware, editBlog);
router.delete("/:id", authMiddleware, deleteBlog);

module.exports = router;
