import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      maxLength: 20,
    },
    email: {
      type: String,
      required: true,
      maxLength: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 3,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
