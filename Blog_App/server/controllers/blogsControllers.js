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

    if (!blog) return next(new HttpError("Blog not found", 400));

    res.status(200).json({ blog });
  } catch (error) {
    return next(new HttpError("Could find blog", 400));
  }
};

const getAllblogOfAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blogs = await Blog.find({ createdBy: id }).sort({ updatedAt: -1 });

    if (!blogs) return next(new HttpError("No blogs found", 400));

    res.status(200).json({ blogs });
  } catch (error) {}
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
  try {
    const { id } = req.params;
    const { title, description, category } = req.body;
    const { userId } = req.user;

    if (!title || !description || !category) {
      return next(new HttpError("Please fill out all values"));
    }

    if (description.trim().length <= 50)
      return next(
        new HttpError(
          "Description is too short, description atleast have 50 characters"
        )
      );

    const blogDetail = await Blog.findById(id);

    //check whether the current login user is owner of that blog

    if (blogDetail.createdBy == userId) {
      console.log("Checking for the files");
      if (!req.files) {
        const updatedBlog = await Blog.findByIdAndUpdate(
          id,
          {
            title,
            description,
            category,
          },
          { new: true }
        );

        console.log("updated blog without thumbnail");

        return res.status(200).json({
          blog: updatedBlog,
          message: "Blog updated successfully",
        });
      } else {
        console.log("New thumbnail found");
        const oldPost = await Blog.findById(id);

        try {
          const filePath = path.join(
            __dirname,
            "..",
            "uploads",
            oldPost.thumbanil
          );
          await fs.promises.unlink(filePath);

          console.log("unlinked the old thumbnail");

          const thumbnail = req.files.thumbnail;

          if (thumbnail.size > 2000000)
            return next(
              new HttpError("Thumbnail size should be less than 2mb", 400)
            );

          console.log("thumbnail passed");

          const filename = thumbnail.name;
          const splittedFilename = filename.split(".");
          const newFileName =
            splittedFilename[0] +
            uuid() +
            "." +
            splittedFilename[splittedFilename.length - 1];

          console.log("New file name : " + newFileName);

          thumbnail.mv(
            path.join(__dirname, "..", "uploads", newFileName),
            async (err) => {
              if (err) return next(new HttpError(err));

              console.log("Moved the new thumbnail");

              const updatedBlog = await Blog.findByIdAndUpdate(
                id,
                { title, description, category, thumbanil: newFileName },
                { new: true }
              );

              if (!updatedBlog)
                return next(
                  new HttpError("Thumbnail couldn't be changed", 422)
                );

              return res.status(200).json({
                blog: updatedBlog,
                message: "Blog updated successfully",
              });
            }
          );
        } catch (err) {
          return next(new HttpError("Error moving the thumbnail file", 500));
        }
      }
    }
  } catch (err) {
    return next(new HttpError("Couldn't update the blog"));
  }
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
