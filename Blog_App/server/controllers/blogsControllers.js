const getAllBlogs = async (req, res, next) => {
  res.send("Get all blogs route");
};

const getSingleBlogs = async (req, res, next) => {
  const { id } = req.params;
  res.send(`Get blog with id : ${id}`);
};

const getAllblogOfAuthor = async (req, res, next) => {
  const { id } = req.params;
  res.send(`Get all blogs of author with id : ${id}`);
};

const getblogsWithCategory = async (req, res, next) => {
  const { categoryId } = req.params;
  res.send(`Get all blogs with given category : ${categoryId}`);
};

const createBlog = async (req, res, next) => {
  res.send("Created new blog");
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
