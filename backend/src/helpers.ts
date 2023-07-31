import { Response } from "express";
import mongoose from "mongoose";

import Post from "./models/post";
import FeaturedPost from "./models/featuredPost";

const FEATURED_POST_COUNT = 4;

export const checkIfPostExists = async (
  postId: mongoose.Types.ObjectId,
  res: Response
) => {
  const post = await Post.findById(postId);
  if (!post) return res.status(404).json({ error: "Post not found" });
};

// not an Express route handler so can't give req, res & next
export const addToFeaturedPosts = async (postId: string) => {
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

export const removeFromFeaturedPosts = async (
  postId: mongoose.Types.ObjectId
) => {
  await FeaturedPost.findOneAndDelete({ post: postId });
};

export const isFeaturedPost = async (postId: mongoose.Types.ObjectId) => {
  const post = await FeaturedPost.findOne({ post: postId });
  return post ? true : false;
};
