import React from "react";
import ListDashboardBlogs from "@/app/components/ListDashboardBlogs";
import { auth } from "@/app/utils/auth";
import { getArticlesByEmail, getPostsAdmin } from "@/app/utils/action";

async function fetchData() {
  const session = await auth();
  if (session.user.email === "mohamed7dakir@gmail.com") {
    const articles = await getPostsAdmin();
    return articles;
  } else {
    const articleByEmail = await getArticlesByEmail(session.user.email);
    return articleByEmail;
  }
}
const Blogs = async () => {
  const postAdmin = await fetchData();
  const posts = JSON.parse(JSON.stringify(postAdmin));
  return (
    <div className="w-full p-6 h-full md:p-1 xs:py-10">
      <ListDashboardBlogs posts={posts} />
    </div>
  );
};

export default Blogs;
