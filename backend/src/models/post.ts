import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    meta: {
      type: String,
      required: true,
      trim: true,
    },
    tags: [String],
    authorId: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: Object,
      url: {
        type: URL,
      },
      publicId: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", PostSchema);
export default Post;
