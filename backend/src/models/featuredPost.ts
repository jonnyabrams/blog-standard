import mongoose from "mongoose";

const FeaturedPostSchema = new mongoose.Schema(
  {
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
  },
  {
    timestamps: true,
  }
);

const FeaturedPost = mongoose.model("FeaturedPost", FeaturedPostSchema);
export default FeaturedPost;
