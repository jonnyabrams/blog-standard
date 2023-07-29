import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import "dotenv/config";

import postRoutes from "./routes/post";
import userRoutes from "./routes/user";
import authRoutes from "./routes/auth";

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) =>
    console.log("Database connection error: ", err.message || err)
  );

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
