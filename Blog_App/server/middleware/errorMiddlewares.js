const notFound = (req, res, next) => {
  const error = new Error(`Not found ${req.originalUrl}`);
  error.code = 404;
  res.status(404);
  next(error);
};

const errorHandler = (error, req, res, next) => {
  if (req.headerSent) {
    return next(error);
  }

  res
    .status(error.code || 500)
    .json({ message: error.message || "Something went wrong" });
};

module.exports = { notFound, errorHandler };
