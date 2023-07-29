import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/user";

export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    // check if user exists
    const userExists = await User.find({ email });
    // still returns empty array if no user, so need to specify 1st index
    if (userExists[0]) return res.status(409).json("User already exists");

    // hash password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    // create new user in db
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // save new user in db
    await newUser.save();

    // return user data
    res.status(201).json("User successfully created");
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // check if user does not exist
    const user = await User.find({ email });
    if (!user[0]) return res.status(404).json("User not found");

    // check password
    const passwordValid = bcrypt.compareSync(password, user[0].password);

    if (!passwordValid) return res.status(400).json("Wrong credentials");

    // generate token
    const token = jwt.sign(
      {
        id: user[0]._id,
        username: user[0].username,
      },
      process.env.SECRET_KEY as string
    );

    // destructure out password
    // @ts-ignore
    const { userPassword, ...others } = user[0]._doc;

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ user: others, token });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

export const logout = (req: Request, res: Response) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User has been logged out");
};
