"use server";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import Article from "../module/Article";
import User from "../module/User";
import connectDb from "./ConnectDB";

export const AddNewUser = async (formData) => {
  const { name, email, imageUrl, userSlug, job, phone, homeAddress } =
    Object.fromEntries(formData);
  try {
    connectDb();
    const newUser = User({
      name,
      email,
      imageUrl,
      userSlug,
      job,
      phone,
      homeAddress,
    });
    await newUser.save();
    console.log("user is saved");
    revalidatePath("/dashboard/users");
  } catch (err) {
    console.log(err);
  }
};
export const handelLoginGithub = async () => {
  "use server";
  await signIn("github");
};
export const handelLogOut = async () => {
  "use server";
  await signOut();
};
export const LoginWithGoogle = async () => {
  "use server";
  await signIn("google");
};

export const getPosts = async () => {
  try {
    connectDb();
    const posts = await Article.find();
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
