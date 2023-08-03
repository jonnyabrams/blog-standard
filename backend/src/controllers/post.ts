import { NextFunction, Response } from "express";
import { isValidObjectId } from "mongoose";

import Post from "../models/post";
import FeaturedPost from "../models/featuredPost";
import cloudinary from "../cloud";
import { AuthRequest } from "../middleware/checkToken";
import {
  addToFeaturedPosts,
  isFeaturedPost,
  removeFromFeaturedPosts,
} from "../helpers";

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
  } catch (error) {
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

  try {
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

        if (result !== "ok")
          console.log({ error: "Could not remove thumbnail" });
      }

      await removeFromFeaturedPosts(postId);
      await Post.findByIdAndDelete(postId);
      res.json({ message: "Post deleted successfully" });
    } else {
      res.status(403).json("You can only delete your own account!");
    }
  } catch (error) {
    next(error);
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

  try {
    if (authorId === userInfo?.id) {
      const post = await Post.findById(postId);
      if (!post) return res.status(404).json({ error: "Post not found" });

      const alreadyExists = await Post.findOne({
        slug,
        _id: { $ne: post._id },
      });
      if (alreadyExists) {
        return res.status(401).json({ error: "Please use a unique slug" });
      }

      // if thumbnail, remove old thumbnail from cloud
      const public_id = post.thumbnail?.public_id;
      if (public_id && file) {
        const { result } = await cloudinary.uploader.destroy(public_id);

        if (result !== "ok")
          console.log({ error: "Could not remove thumbnail" });
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
  } catch (error) {
    next(error);
  }
};

export const getPost = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const { slug } = req.params;

  if (!slug) return res.status(401).json({ error: "Invalid request" });

  try {
    const post = await Post.findOne({ slug });
    if (!post) return res.status(404).json({ error: "Post not found" });

    const featured = await isFeaturedPost(post._id);

    res.json({ post, featured });
  } catch (error) {
    next(error);
  }
};

export const getFeaturedPosts = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    // populate('post') retrieves the corresponding Post obj instead of the FeaturedPost record
    const featuredPosts = await FeaturedPost.find()
      .sort({ createdAt: -1 })
      .populate("post");

    res.json({ posts: featuredPosts.map((post) => post.post) });
  } catch (error) {
    next(error);
  }
};

export const getLatestPosts = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  // default values as they're optional, parse as they come as strings from query
  const { pageNumber = 0, limit = 10 } = req.query;

  // fix error by definitively converting them to string
  const parsedPageNumber = parseInt(pageNumber.toString());
  const parsedLimit = parseInt(limit.toString());

  try {
    // skip for pagination - ie. pageNumber 0 * limit 10 will equal
    // 0 and therefore skip none - pageNumber 1 * limit 10 skips first 10
    // then 2 * 10 skips first 20 and so on
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .skip(parsedPageNumber * parsedLimit)
      .limit(parsedLimit);

    const postCount = await Post.countDocuments();
    res.json({ posts, postCount });
  } catch (error) {
    next(error);
  }
};

export const searchPosts = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const { title } = req.query;
  if (!title?.toString().trim())
    return res.status(401).json({ error: "Search query is missing!" });

  try {
    // fetch all data matching title, case insensitively
    const posts = await Post.find({ title: { $regex: title, $options: "i" } });

    res.json(posts);
  } catch (error) {
    next(error);
  }
};

export const getRelatedPosts = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const { postId } = req.params;
  if (!isValidObjectId(postId))
    return res.status(401).json({ error: "Invalid request" });

  try {
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ error: "Post not found" });

    const relatedPosts = await Post.find({
      // fetch all posts with matching tags
      tags: { $in: [...post.tags] },
      // exclude same post
      _id: { $ne: post._id },
    })
      .sort("-createdAt") // alternative syntax for ({createdAt: -1})
      .limit(5);

    res.json({ posts: relatedPosts });
  } catch (error) {
    next(error);
  }
};

export const uploadImage = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const { file } = req;
  if (!file) return res.status(401).json({ error: "Image file is missing!" });

  // rename secure_url to url this time, just for reminder that can be done
  const { secure_url: url } = await cloudinary.uploader.upload(file.path, {
    folder: "rn-blog",
  });

  res.status(201).json({ image: url });
};
