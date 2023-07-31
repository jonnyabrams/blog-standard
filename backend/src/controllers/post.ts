import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import mongoose, { isValidObjectId } from "mongoose";

import Post from "../models/post";
import FeaturedPost from "../models/featuredPost";
import cloudinary from "../cloud";
import { AuthRequest } from "../middleware/checkToken";

const secretKey = process.env.SECRET_KEY as string;

const FEATURED_POST_COUNT = 4;

// not an Express route handler so can't give req, res & next
const addToFeaturedPosts = async (postId: string) => {
  const alreadyExists = await FeaturedPost.findOne({ post: postId });

  if (alreadyExists) return;

  const featuredPost = new FeaturedPost({ post: postId });
  try {
    await featuredPost.save();

    // remove the oldest featured post to keep just 4 at any one time
    const featuredPosts = await FeaturedPost.find().sort({ createdAt: -1 });
    featuredPosts.forEach(async (post, index) => {
      if (index >= FEATURED_POST_COUNT) {
        await FeaturedPost.findByIdAndDelete(post._id);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const removeFromFeaturedPosts = async (postId: mongoose.Types.ObjectId) => {
  await FeaturedPost.findOneAndDelete({ post: postId });
};

export const createPost = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const { title, content, meta, slug, tags, featured } = req.body;
  const { file, userInfo } = req;

  // to stop img getting uploaded before save() throws duplicate error
  const alreadyExists = await Post.findOne({ slug });
  if (alreadyExists) {
    return res.status(401).json({ error: "Please use a unique slug" });
  }

  const post = new Post({
    title,
    content,
    meta,
    slug,
    authorId: userInfo.id,
    tags,
  });

  try {
    if (file) {
      const { secure_url, public_id } = await cloudinary.uploader.upload(
        file.path,
        { folder: "rn-blog" }
      );
      post.thumbnail = { url: secure_url, public_id };
    }

    const newPost = await post.save();

    if (featured) await addToFeaturedPosts(newPost._id.toString());
    res.status(201).json(newPost);
  } catch (error: any) {
    next(error);
  }
};

export const deletePost = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const { postId } = req.params;
  const { userInfo } = req;

  // if not a valid id
  if (!isValidObjectId(postId))
    return res.status(401).json({ error: "Invalid request" });

  const post = await Post.findById(postId);
  if (!post) return res.status(404).json({ error: "Post not found" });

  if (post.authorId === userInfo.id) {
    // delete thumbnail from cloudinary
    const public_id = post.thumbnail?.public_id;
    if (public_id) {
      const { result } = await cloudinary.uploader.destroy(public_id);

      if (result !== "ok") console.log({ error: "Could not remove thumbnail" });
    }

    await Post.findByIdAndDelete(postId);
    res.json({ message: "Post deleted successfully" });
  } else {
    res.status(403).json("You can only delete your own account!");
  }
};

export const updatePost = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const { title, content, meta, slug, tags, authorId, featured } = req.body;
  const { file, userInfo } = req;
  const { postId } = req.params;

  if (!isValidObjectId(postId))
    return res.status(401).json({ error: "Invalid request" });

  if (authorId === userInfo?.id) {
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ error: "Post not found" });

    const alreadyExists = await Post.findOne({ slug, _id: { $ne: post._id } });
    if (alreadyExists) {
      return res.status(401).json({ error: "Please use a unique slug" });
    }

    // if thumbnail, remove old thumbnail from cloud
    const public_id = post.thumbnail?.public_id;
    if (public_id && file) {
      const { result } = await cloudinary.uploader.destroy(public_id);

      if (result !== "ok") console.log({ error: "Could not remove thumbnail" });
    }

    if (file) {
      const { secure_url, public_id } = await cloudinary.uploader.upload(
        file.path,
        { folder: "rn-blog" }
      );
      post.thumbnail = { url: secure_url, public_id };
    }

    post.title = title;
    post.meta = meta;
    post.content = content;
    post.slug = slug;
    post.authorId = authorId;
    post.tags = tags;

    if (featured) {
      await addToFeaturedPosts(post._id.toString());
    } else {
      await removeFromFeaturedPosts(post._id);
    }

    await post.save();

    res.json({ post, featured });
  } else {
    res.status(403).json("You can only update your own account!");
  }
};

export const getPost = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const { postId } = req.params;
  const { featured } = req.body;

  if (!isValidObjectId(postId))
    return res.status(401).json({ error: "Invalid request" });

  const post = await Post.findById(postId);
  if (!post) return res.status(404).json({ error: "Post not found" });

  res.json({ featured: featured });
};
