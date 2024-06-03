const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");
const HttpError = require("../error/error");
const Blog = require("../models/blogModel");
const User = require("../models/userModel");

const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find().sort({ updatedAt: -1 });

    res.status(200).json({ blogs });
  } catch (error) {
    return next(new HttpError("Could find blogs", 204));
  }
};

const getSingleBlogs = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);

    if (!blog) return next(new HttpError("Blog not found", 204));

    res.status(200).json({ blog });
  } catch (error) {
    return next(new HttpError("Could find blog", 204));
  }
};

const getAllblogOfAuthor = async (req, res, next) => {
  const { id } = req.params;
  res.send(`Get all blogs of author with id : ${id}`);
};

const getblogsWithCategory = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const blogs = await Blog.find({ category: categoryId });
    if (!blogs)
      return next(
        new HttpError(`Couldn't find blog with category - ${categoryId}`, 204)
      );

    res.status(200).json({ blogs });
  } catch (error) {
    return next(new HttpError("Couldn't find blogs", 204));
  }
};

const createBlog = async (req, res, next) => {
  try {
    let { title, description, category } = req.body;

    const { thumbnail } = req.files;

    const { userId } = req.user;

    if (!title || !description || !category)
      return next(new HttpError("Please fill all values", 400));

    if (description.trim().length <= 50)
      return next(
        new HttpError(
          "Description is too short, description atleast have 50 characters"
        )
      );

    if (!thumbnail) return next(new HttpError("Please choose thumbnail", 400));

    if (thumbnail.size > 2000000)
      return next(new HttpError("Thumbnail size should be less than 2mb", 400));

    const filename = thumbnail.name;
    const splittedFilename = filename.split(".");

    const newFileName =
      splittedFilename[0] +
      uuid() +
      "." +
      splittedFilename[splittedFilename.length - 1];

    thumbnail.mv(
      path.join(__dirname, "..", "uploads", newFileName),
      async (err) => {
        if (err) return next(new HttpError(err));

        const newBlog = await Blog.create({
          title,
          description,
          category,
          thumbanil: newFileName,
          createdBy: userId,
        });

        if (!newBlog)
          return next(new HttpError("Couldn't able to create a blog"));

        const user = await User.findById(userId);
        let userBlogCount = user.posts + 1;
        await User.findByIdAndUpdate(
          userId,
          { posts: userBlogCount },
          { new: true }
        );

        res
          .status(201)
          .json({ blog: newBlog, message: "Blog is created successfully" });
      }
    );
  } catch (err) {
    return next(new HttpError("Couldn't able to create a blog"));
  }
};

const editBlog = async (req, res, next) => {
  const { id } = req.params;
  res.send(`Edited blog with given id : ${id}`);
};

const deleteBlog = async (req, res, next) => {
  const { id } = req.params;
  res.send(`Deleted blog with given id : ${id}`);
};

module.exports = {
  getSingleBlogs,
  getAllBlogs,
  getAllblogOfAuthor,
  getblogsWithCategory,
  createBlog,
  editBlog,
  deleteBlog,
};
