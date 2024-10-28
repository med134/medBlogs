"use server";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import Article from "../module/Article";
import User from "../module/User";
import connectDb from "./ConnectDB";
import Category from "../module/Category";
import Posts from "../module/Post";
import Email from "../module/Email";
import { CgPassword } from "react-icons/cg";

export const handelLoginGithub = async () => {
  await signIn("github");
};
export const handelLogOut = async () => {
  await signOut();
  return Response.redirect(new URL("/login"));
};
export const LoginWithGoogle = async () => {
  await signIn("google");
};
export const sendMessage = async (prevState, formData) => {
  const { name, email, message } = Object.fromEntries(formData);
  try {
    connectDb();
    const newMessage = new Email({
      name,
      email,
      message,
    });
    await newMessage.save();
    revalidatePath("/contact_us");
    return { succuss: "Your message is send successfully" };
  } catch (err) {
    console.log(err.message);
    return { error: "something went wrong try again" };
  }
};

export const getPosts = async () => {
  try {
    connectDb();
    const posts = await Article.find().sort({ createdAt: -1 });
    const publicPosts = posts?.filter((item) => item.status === "publish");
    return publicPosts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};
export const getPostsHome = async () => {
  try {
    connectDb();
    const posts = await Article.find().sort({ createdAt: -1 });
    const publicPosts = posts?.filter(
      (item, index) => item.status === "publish" && index < 7 && index > 1
    );
    return publicPosts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};
export const getMessages = async () => {
  try {
    connectDb();
    const messages = await Email.find();
    return messages;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch messages!");
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
export const getUserBySlug = async (slug) => {
  try {
    connectDb();
    const user = await User.findOne({ slug });
    return user;
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
// search params
export const searchFunction = async (query) => {
  try {
    connectDb();
    const articles = await Article.find();
    const filteredPosts = articles.filter((post) => {
      const regex = new RegExp(`${query}`, "gi");
      return post.title.match(regex);
    });
    return filteredPosts;
  } catch (err) {
    console.log(err.message);
    throw new Error("Failed to fetch posts!");
  }
};
export const getTemplatesBySlug = async (slug) => {
  try {
    connectDb();
    const posts = await Posts.findOne({ slug });
    return posts;
  } catch (err) {
    console.log(err.message);
    throw new Error("Failed to fetch posts!");
  }
};

// concerting date function
export const FormatDate = async (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(dateString).toLocaleDateString(
    "en-US",
    options
  );
  return formattedDate;
};

export async function getPostOfUser(email) {
  const res = await fetch(
    `https://www.medcode.dev/api/articles?email=${email}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed");
  }
  const templates = await res.json();
  const totalBlog = templates.length;
  return totalBlog;
}

export const RegisterUser = async (formData) => {
  const { name, email, imageUrl, password, repeatPassword } =
    Object.formEntries(formData.entries());
  if (password == !repeatPassword) {
    return "password not match";
  }
  try {
    connectDb();
    const user = await User.findOne({ name });
    if (!user) {
      return "user all ready exist";
    }
    const newUser = new User({
      name,
      email,
      password,
      imageUrl,
    });
    await newUser.save();
    console.log("user save");
  } catch (err) {
    console.log(err);
  }
};
