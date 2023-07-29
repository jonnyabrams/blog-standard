import { check, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const postValidator = [
  check("title").trim().not().isEmpty().withMessage("Title is missing!"),
  check("content").trim().not().isEmpty().withMessage("Content is missing!"),
  check("meta")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Meta description is missing!"),
  check("slug").trim().not().isEmpty().withMessage("Slug is missing!"),
  check("tags")
    .isArray()
    .withMessage("Tags must be an array of strings")
    .custom((tags) => {
      for (let t of tags) {
        if (typeof t !== "string") {
          throw Error("Tags must be an array of strings");
        }
      }

      return true;
    }),
];

// to read the error messages
export const validate = (req: Request, res: Response, next: NextFunction) => {
  // convert error messages to array
  const error = validationResult(req).array();

  // if there are any errors...
  if (error.length) {
    return res.status(401).json({ error: error[0].msg });
  }

  next();
};
