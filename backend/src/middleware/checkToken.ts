import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const secretKey = process.env.SECRET_KEY as string;

export interface AuthRequest extends Request {
  userInfo?: any;
}

const checkAuth = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.accessToken;

  if (!token) {
    return res.status(401).json("Not logged in!");
  }

  jwt.verify(token, secretKey, (err: any, userInfo: any) => {
    if (err) {
      return res.status(403).json("Token invalid");
    }

    // Set the user info in the request object
    req.userInfo = userInfo;
    next();
  });
};

export default checkAuth;