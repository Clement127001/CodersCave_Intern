const { Schema, model, default: mongoose } = require("mongoose");

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      enum: {
        values: [
          "Education",
          "React",
          "Webdevelopment",
          "System Design",
          "Data Strcutures and Algorithms",
          "100Xdeveloper",
          "Javascript",
        ],
        message: "${VALUE} is not supported",
      },
    },
    thumbanil: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = model("Blog", blogSchema);
