const { connect } = require("mongoose");
const connectDB = async (url) => {
  return await connect(url);
};

module.exports = connectDB;
