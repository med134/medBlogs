"use server";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import Article from "../module/Article";
import User from "../module/User";
import connectDb from "./ConnectDB";
import Category from "../module/Category";
import Posts from "../module/Post";

export const handelLoginGithub = async () => {
  await signIn("github");
};
export const handelLogOut = async () => {
  await signOut();
};
export const LoginWithGoogle = async () => {
  await signIn("google");
};

export const getPosts = async () => {
  try {
    connectDb();
    const posts = await Article.find().sort({ createdAt: -1 });
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};
export const getDraftBlog = async () => {
  try {
    connectDb();
    const posts = await Article.find();
    const draftBlog = posts.filter((draft) => draft.status === "draft");
    return draftBlog;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch draft posts!");
  }
};

export const getPostsByUser = async (username) => {
  const res = await fetch(
    `https://www.medcode.dev/api/articles?username=${username}`
  );
  if (!res.ok) {
    throw new Error("failed to get data");
  }
  const posts = await res.json();
  return posts;
};

export const getAllUsers = async () => {
  try {
    connectDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err.message);
    throw new Error("Failed to fetch users!");
  }
};

export const getPostsBySlug = async (slug) => {
  try {
    connectDb();
    const posts = await Article.findOne({ slug });
    return posts;
  } catch (err) {
    console.log(err.message);
    throw new Error("Failed to fetch posts!");
  }
};

export const getAllCategories = async () => {
  try {
    connectDb();
    const categories = await Category.find().sort({ slug: 1 });
    return categories;
  } catch (err) {
    console.log(err.message);
    throw new Error("Failed to fetch categories!");
  }
};
export const deleteUser = async (slug) => {
  try {
    connectDb();
    await User.findOneAndDelete({ slug });
    revalidatePath("/dashboard/users");
  } catch (err) {
    console.log(err.message);
    throw new Error("Failed to fetch users!");
  }
};

export const getTemplates = async () => {
  try {
    connectDb();
    const posts = await Posts.find().sort({ createdAt: -1 });
    return posts;
  } catch (err) {
    console.log(err.message);
    throw new Error("Failed to fetch posts!");
  }
};
export const getTemplatesBySlug = async (slug) => {
  try {
    connectDb();
    const posts = await Posts.findOne({slug});
    return posts;
  } catch (err) {
    console.log(err.message);
    throw new Error("Failed to fetch posts!");
  }
};

// concerting date function
export const FormatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(dateString).toLocaleDateString(
    "en-US",
    options
  );
  return formattedDate;
};