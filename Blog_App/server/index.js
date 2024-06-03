const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connectDB");
const upload = require("express-fileupload");
require("dotenv").config();

const app = express();
const userRoute = require("./routes/userRoute");
const blogsRoute = require("./routes/blogsRoute");
const { notFound, errorHandler } = require("./middleware/errorMiddlewares");

//middlewares
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(upload());
app.use("/uploads", express.static(__dirname + "/uploads"));

//route setup
app.use("/api/v1/users", userRoute);
app.use("/api/v1/blogs", blogsRoute);

app.use(notFound);
app.use(errorHandler);

const start = async () => {
  try {
    const port = process.env.PORT || 8000;
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
