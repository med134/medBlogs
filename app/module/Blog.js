import mongoose from "mongoose";
const { Schema } = mongoose;
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    tags: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    job: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);
const Blog =
  mongoose.models.blogs || mongoose.model("blogs", blogSchema);
export default Blog;
