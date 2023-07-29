import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import Post from "../models/post";

const secretKey = process.env.SECRET_KEY as string;

export const createPost = async (req: Request, res: Response) => {
  const { title, content, meta, slug, tags } = req.body;
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, secretKey, async (err: any, userInfo: any) => {
    if (err) return res.status(403).json("Token invalid");

    console.log(userInfo)

    const post = new Post({ title, content, meta, slug, authorId: userInfo.id, tags });

    try {
      const savedPost = await post.save();
      res.status(201).json(savedPost);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  });
};
