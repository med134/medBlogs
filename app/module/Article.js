import mongoose from "mongoose";
const { Schema } = mongoose;
const articleSchema = new Schema(
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
const Article =
  mongoose.models.articles || mongoose.model("articles", articleSchema);
export default Article;
