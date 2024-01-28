import mongoose from "mongoose";
import { required } from "yargs";
const { Schema } = mongoose;
const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      require: false,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Posts = mongoose.models.posts || mongoose.model("posts", postSchema);
export default Posts;
