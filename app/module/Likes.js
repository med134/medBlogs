import mongoose from "mongoose";
const { Schema } = mongoose;
const likesSchema = new Schema(
  {
    blogId: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    numberOfLikes: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);
const Likes = mongoose.models.likes || mongoose.model("likes", likesSchema);
export default Likes;
