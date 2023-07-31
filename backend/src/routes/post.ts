import express, { NextFunction, Request, Response } from "express";

import {
  createPost,
  deletePost,
  updatePost,
  getPost,
  getFeaturedPosts,
  getLatestPosts,
  searchPosts
} from "../controllers/post";
import upload from "../middleware/multer";
import { postValidator, validate } from "../middleware/postValidator";
import checkAuth from "../middleware/checkToken";

const router = express.Router();

// validator has to go after multer for there to be form data in req.body
router.post(
  "/create",
  checkAuth,
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
  checkAuth,
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

router.delete("/:postId", checkAuth, deletePost);
// 'single' to stop invalid error with each /featured-posts request
router.get("/single/:slug", getPost);
router.get("/featured-posts", getFeaturedPosts);
router.get("/latest-posts", getLatestPosts);
router.get("/search", searchPosts);

export default router;
