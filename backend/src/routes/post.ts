import express from "express";

import { createPost } from "../controllers/post";
import upload from "../middleware/multer";

const router = express.Router();

router.post("/create", upload.single("thumbnail"), createPost);

export default router;
