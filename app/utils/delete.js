"use server";

import Article from "../module/Article";
import { revalidatePath } from "next/cache";
import connectDb from "./ConnectDB";

export const handelDeleteBlog = async (previousState, formData) => {
  const slug = formData.get("slug");
  console.log("slug delete", slug);
  try {
    connectDb();
    await Article.findOneAndDelete({ slug });
    console.log("article deleted successfully");
    return { success: "article deleted successfully" };
  } catch (err) {
    console.log(err);
  }
  revalidatePath("/dashboard/blog");
};
