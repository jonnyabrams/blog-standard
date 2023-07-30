import express, { NextFunction, Request, Response } from "express";

import { createPost, deletePost, updatePost } from "../controllers/post";
import upload from "../middleware/multer";
import { postValidator, validate } from "../middleware/postValidator";

const router = express.Router();

// validator has to go after multer for there to be form data in req.body
router.post(
  "/create",
  upload.single("thumbnail"),
  // parse tags as array for Postman/Thunderclient form data
  (req: Request, res: Response, next: NextFunction) => {
    const { tags } = req.body;
    if (tags) req.body.tags = JSON.parse(tags);

    next();
  },
  postValidator,
  validate,
  createPost
);

router.put(
  "/:postId",
  upload.single("thumbnail"),
  // parse tags as array for Postman/Thunderclient form data
  (req: Request, res: Response, next: NextFunction) => {
    const { tags } = req.body;
    if (tags) req.body.tags = JSON.parse(tags);

    next();
  },
  postValidator,
  validate,
  updatePost
);

router.delete("/:postId", deletePost)

export default router;
