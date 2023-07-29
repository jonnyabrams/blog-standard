import multer from "multer";
import { Request } from "express";

interface MulterFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  size: number;
}

const storage = multer.diskStorage({})

const fileFilter = (req: Request, file: MulterFile, cb: (error: any, acceptFile: boolean) => void) => {
  if (!file.mimetype.includes('image')) {
    return cb("Not a valid file type", false)
  }
  cb(null, true)
}

const upload = multer({storage, fileFilter});

export default upload;