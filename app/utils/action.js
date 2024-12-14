"use server";
import { auth, signIn, signOut } from "@/auth";
import Article from "../module/Article";
import User from "../module/User";
import { redirect } from "next/navigation";
import Category from "../module/Category";
import Posts from "../module/Post";
import Email from "../module/Email";
import Comments from "../module/Comments";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import Likes from "../module/Likes";
import connect from "./ConnectDB";

export const handelLoginGithub = async () => {
  await signIn("github");
};
export const handelLogOut = async () => {
  try {
    await signOut();
  } catch (err) {
    console.log(err);
  }
  revalidatePath("/dashboard");
  redirect("/login");
};
export const LoginWithGoogle = async () => {
  await signIn("google");
};
export const sendMessage = async (formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  try {
    connect();
    const newMessage = new Email({
      name,
      email,
      message,
    });
    await newMessage.save();
    return "Your message is send successfully";
  } catch (err) {
    return "Something was error";
  }
  revalidatePath("/contact-us");
};

export const getPosts = async () => {
  try {
    connect();
    const posts = await Article.find().sort({ createdAt: -1 });
    const publicPosts = posts?.filter((item) => item.status === "publish");
    return JSON.parse(JSON.stringify(publicPosts));
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPostsHome = async () => {
  try {
    connect();
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
    connect();
    const messages = await Email.find();
    return messages;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch messages!");
  }
};
export const getDraftBlog = async () => {
  try {
    connect();
    const posts = await Article.find();
    const draftBlog = posts.filter((draft) => draft.status === "draft");
    return draftBlog;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch draft posts!");
  }
};

export const getAllUsers = async (page) => {
  try {
    connect();
    const pageSizes = 4;
    const pageNumber = page || 1;
    const count = await User.find({}).countDocuments();
    const AllUsers = await User.find({})
      .limit(pageSizes)
      .skip((pageNumber - 1) * pageSizes)
      .sort({ createdAt: 1 });
    const users = JSON.parse(JSON.stringify(AllUsers));
    const totalPage = Math.ceil(count / pageSizes);
    return { users, totalPage };
  } catch (err) {
    console.log(err.message);
    throw new Error("Failed to fetch users!");
  }
};
export const getUserById = async (_id) => {
  try {
    connect();
    const user = await User.findOne({ _id });
    return JSON.parse(JSON.stringify(user));
  } catch (err) {
    console.log(err.message);
    throw new Error("Failed to fetch users!");
  }
};
export const getUserByEmail = async (email) => {
  try {
    connect();
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
    connect();
    const posts = await Article.findOne({ slug });
    return posts;
  } catch (err) {
    console.log(err.message);
    throw new Error("Failed to fetch posts!");
  }
};

export const getAllCategories = async () => {
  try {
    connect();
    const categories = await Category.find().sort({ slug: 1 });
    return JSON.parse(JSON.stringify(categories));
  } catch (err) {
    console.log(err.message);
    throw new Error("Failed to fetch categories!");
  }
};
export const deleteUser = async (formData) => {
  const _id = formData.get("id");
  try {
    connect();
    await User.findByIdAndDelete({ _id });
    console.log("deleted from db");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
  revalidatePath("/dashboard/users");
};
export const deleteMessage = async (formData) => {
  const _id = formData.get("id");
  try {
    connect();
    await Email.findByIdAndDelete({ _id });
    console.log("deleted message from db");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
  revalidatePath("/dashboard/messages");
};

export const getTemplates = async () => {
  try {
    connect();
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
    await connect();
    const filteredPosts = await Article.find({
      $or: [
        { title: { $regex: query, $options: "i" } }, // Search in title
        { description: { $regex: query, $options: "i" } }, // Search in description
      ],
    });
    if (!filteredPosts.length) {
      console.log("No posts found with the given query");
      return [];
    }
    return JSON.parse(JSON.stringify(filteredPosts));
  } catch (err) {
    console.error("Error during search operation:", err.message);
  }
};
export const getTemplatesBySlug = async (slug) => {
  try {
    connect();
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

export const getArticlesByEmail = async (email, page) => {
  try {
    connect();
    const pageSizes = 4;
    const pageNumber = page || 1;
    const query = email ? { email: { $regex: email, $options: "i" } } : {}; // Partial, case-insensitive match if email is provided
    const count = await Article.find(query).countDocuments();
    const posts = await Article.find(query)
      .limit(pageSizes)
      .skip((pageNumber - 1) * pageSizes)
      .sort({ createdAt: -1 });
    const totalPage = Math.ceil(count / pageSizes);
    return { posts, totalPage, count }; // Find and sort articles
  } catch (error) {
    console.log(error.message); // Log any errors
    throw new Error("Failed to fetch articles!"); // Throw a new error if something goes wrong
  }
};
export const getPostsAdmin = async () => {
  try {
    connect();
    const posts = await Article.find().sort({ createdAt: -1 });
    return JSON.parse(JSON.stringify(posts));
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getArticleByCategories = async (category) => {
  try {
    connect();
    if (category === "all") {
      const articles = await Article.find().sort({ createdAt: -1 });
      return articles;
    } else {
      const query = category
        ? { category: { $regex: category, $options: "i" } }
        : {};
      const articles = await Article.find(query).sort({ createdAt: -1 });
      const publicPosts = articles?.filter((item) => item.status === "publish");
      return publicPosts;
    }
  } catch (error) {
    console.log(error.message);
    throw new Error("Failed to fetch articles!");
  }
};

export const addUser = async (formData) => {
  const { id, name, email, password } = Object.fromEntries(formData);
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  try {
    connect();
    const newUser = new User({
      id,
      name,
      email,
      password: hashedPassword,
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
    connect();
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
// login auth credentials
export const loginAuth = async (prvState, formData) => {
  const { email, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { email, password });
    redirect(`/dashboard`);
  } catch (err) {
    console.log(err);
    return "Invalid email or password";
  }
};
export const handelDeleteBlog = async (_id) => {
  try {
    connect();
    await Article.findByIdAndDelete({ _id });
    console.log("article deleted successfully");
  } catch (err) {
    console.log(err);
  }
  revalidatePath("/dashboard/blogs");
};

export const getComments = async (blogId) => {
  try {
    connect();
    const query = blogId ? { blogId: { $regex: blogId, $options: "i" } } : {};
    const comment = await Comments.find(query).sort({ createdAt: -1 });
    return comment;
  } catch (error) {
    console.log(error.message);
    throw new Error("Failed to fetch comments!");
  }
};
export const createComment = async (formData) => {
  const blogId = formData.get("blogId");
  const username = formData.get("username");
  const imageUser = formData.get("imageUser");
  const comment = formData.get("comment");
  try {
    connect();
    const newComment = new Comments({
      blogId,
      username,
      imageUser,
      comment,
    });
    await newComment.save();
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/blogs");
};
export const editUserProfile = async (prevSettings, formData) => {
  const _id = formData.get("id");
  const name = formData.get("name");
  const email = formData.get("email");
  const job = formData.get("job");
  const about = formData.get("about");
  const imageUrl = formData.get("imageUrl");
  const homeAddress = formData.get("homeAddress");
  const twitterUrl = formData.get("twitterUrl");
  const linkedInUrl = formData.get("linkedInUrl");
  const githubUrl = formData.get("githubUrl");
  const youtubeUrl = formData.get("youtubeUrl");
  const dribbleUrl = formData.get("dribbleUrl");
  const instagramUrl = formData.get("instagramUrl");
  /*   const password = formData.get("password");
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt); */

  try {
    connect();
    const updatedUser = await User.findByIdAndUpdate(
      _id,
      {
        name,
        email,
        job,
        imageUrl,
        homeAddress,
        about,
        twitterUrl,
        linkedInUrl,
        githubUrl,
        youtubeUrl,
        dribbleUrl,
        instagramUrl,
      },
      { new: true }
    );
  } catch (err) {
    console.log(err.message);
  }
  revalidatePath("/dashboard/users");
  redirect(`/dashboard/users/${_id}`);
};

// get Likes
export const getLikes = async (_id) => {
  try {
    connect();
    const likesPost = await Likes.findOne({ blogId: _id });
    return likesPost;
  } catch (error) {
    console.log(error.message);
    throw new Error("Failed to fetch likes!");
  }
};
// update likes
export const incrementLike = async (_id) => {
  try {
    connect();
    const likesPost = await Likes.findOne({ blogId: _id });
    if (likesPost) {
      await Likes.updateOne(
        { blogId: _id }, // Filter query
        { $inc: { numberOfLikes: 1 } },
        { new: true } // Update operation
      );
      const updatedDoc = await Likes.findOne(
        { blogId: _id }, // Filter query to find the blog by _id
        { numberOfLikes: 1, _id: 0 } // Projection: only return numberOfLikes
      );
      return updatedDoc.numberOfLikes; // Return the updated numberOfLikes value
    } else {
      connect();
      const newLikes = new Likes({ blogId: _id, numberOfLikes: 1 });
      await newLikes.save();
      return newLikes.numberOfLikes;
    }
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/blogs");
};
// edit article
export const editArticles = async (prevSettings, formData) => {
  const _id = formData.get("id");
  const title = formData.get("title");
  const tags = formData.get("tags");
  const job = formData.get("job");
  const description = formData.get("description");
  const image = formData.get("image");
  const status = formData.get("status");
  const content = formData.get("content");
  const category = formData.get("category");
  const userId = formData.get("userId");
  const username = formData.get("username");
  const email = formData.get("email");
  const slug = formData.get("slug");
  const userImage = formData.get("userImage");

  console.log(tags, title, slug);

  try {
    connect();
    const updatedArticle = await Article.findByIdAndUpdate(
      _id,
      {
        title,
        tags,
        image,
        description,
        slug,
        category,
        job,
        status,
        content,
        username,
        userId,
        email,
        userImage,
      },

      { new: true }
    );
    return { message: "your article is update successfully" };
  } catch (err) {
    console.log(err.message);
  }
  revalidatePath("/dashboard/blogs/edit-articles");
  redirect(`/dashboard/blogs`);
};

export const getEmailSession = async () => {
  const session = await auth();
  return session.user.email;
};

export const addPassword = async (prevSettings, formData) => {
  const _id = formData.get("id");
  const password = formData.get("password");
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    connect();
    const updatedUser = await User.findByIdAndUpdate(
      _id,
      {
        password: hashedPassword,
      },
      { new: true }
    );
  } catch (err) {
    console.log(err.message);
  }
  revalidatePath("/dashboard/users");
  redirect(`/dashboard/users/${_id}`);
};

export const completeAccount = async (prvState, formData) => {
  const { id, name, email, password, homeAddress, about } =
    Object.fromEntries(formData);
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  try {
    connect();
    const newUser = new User({
      id,
      name,
      email,
      password: hashedPassword,
      homeAddress,
      about,
    });
    await newUser.save();
    console.log("user is save");
  } catch (error) {
    console.log(error);
    return "something went wrong !";
  }
  revalidatePath("/dashboard/complete-profile");
  redirect("/dashboard");
};
