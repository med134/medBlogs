"use server";
import { auth, signIn, signOut } from "./auth";
import Article from "../module/Article";
import User from "../module/User";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import connectDb from "./ConnectDB";
import Category from "../module/Category";
import Posts from "../module/Post";
import Email from "../module/Email";
import bcrypt from "bcryptjs";

export const handelLoginGithub = async () => {
  await signIn("github");
};
export const handelLogOut = async () => {
  await signOut();
  revalidatePath("/dashboard");
  redirect("/create-account");
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
export const getUserById = async (_id) => {
  try {
    connectDb();
    const user = await User.findOne({ _id });
    return user;
  } catch (err) {
    console.log(err.message);
    throw new Error("Failed to fetch users!");
  }
};
export const getUserByEmail = async (email) => {
  try {
    connectDb();
    const user = await User.findOne({ email });
    return user;
  } catch (err) {
    console.log(err.message);
    throw new Error("Failed to fetch users!");
  }
};
export const getUserId = async () => {
  const session = await auth();
  if (session) {
    const user = getUserByEmail(session?.user?.email);
    return user;
  } else {
    return null;
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
export const deleteUser = async (formData) => {
  const _id = formData.get("id");
  console.log("this is email", _id);
  try {
    connectDb();
    await User.findByIdAndDelete(_id);
    console.log("deleted from db");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
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

export const getArticlesByEmail = async (email) => {
  try {
    connectDb(); // Connect to the database
    const query = email ? { email: { $regex: email, $options: "i" } } : {}; // Partial, case-insensitive match if email is provided
    const articles = await Article.find(query).sort({ createdAt: -1 }); // Find and sort articles
    return articles; // Return articles
  } catch (error) {
    console.log(error.message); // Log any errors
    throw new Error("Failed to fetch articles!"); // Throw a new error if something goes wrong
  }
};

export const getArticleByCategories = async (category) => {
  try {
    connectDb(); // Connect to the database
    const query = category
      ? { category: { $regex: category, $options: "i" } }
      : {}; // Partial, case-insensitive match if email is provided
    const articles = await Article.find(query).sort({ createdAt: -1 }); // Find and sort articles
    return articles; // Return articles
  } catch (error) {
    console.log(error.message); // Log any errors
    throw new Error("Failed to fetch articles!"); // Throw a new error if something goes wrong
  }
};

export const addUser = async (formData) => {
  const { name, email, password } = Object.fromEntries(formData);
  try {
    connectDb();
    const newUser = new User({
      name,
      email,
      password,
    });
    await newUser.save();
    console.log("user is save");
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/create-account");
  redirect("/login");
};
export const addArticle = async (formData) => {
  const session = await auth();
  const user = await getUserByEmail(session?.user.email);
  const { title, tags, description, image, category, slug, job, content } =
    Object.fromEntries(formData);
  try {
    connectDb();
    const newArticle = new Article({
      title,
      tags,
      description,
      image,
      category,
      slug,
      job,
      content,
      username: user.name,
      userId: user.id,
      userImage: user.imageUrl,
      email: user.email,
    });
    await newArticle.save();
    console.log("article is created");
  } catch (error) {
    console.log(error);
  }
};
export const login = async (formData) => {
  console.log(formData);
  const { name, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { name, password });
  } catch (err) {
    console.log(err);
    throw err;
  }
};
