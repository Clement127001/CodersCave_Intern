const jwt = require("jsonwebtoken");
const HttpError = require("../error/error");

const authMiddleware = (req, res, next) => {
  try {
    const Authorization =
      req.headers.Authorization || req.headers.authorization;

    const token = Authorization.split(" ")[1];

    if (!token) return next(new HttpError("Unauthorised user", 402));

    const isAuthorized = jwt.verify(
      token,
      process.env.JWT_SECRET,
      (err, info) => {
        if (err) return next(new HttpError(err));

        req.user = info;
        next();
      }
    );
  } catch (err) {
    return next(new HttpError("Unauthorised user", 402));
  }
};

module.exports = authMiddleware;
