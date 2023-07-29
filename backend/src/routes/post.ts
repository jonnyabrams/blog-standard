import express from "express";

import { createPost } from "../controllers/post";
import upload from "../middleware/multer";
import { postValidator, validate } from "../middleware/postValidator";

const router = express.Router();

// validator has to go after multer for there to be form data in req.body
router.post(
  "/create",
  upload.single("thumbnail"),
  postValidator,
  validate,
  createPost
);

export default router;
