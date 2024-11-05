import React from "react";
import ListDashboardBlogs from "@/app/components/ListDashboardBlogs";
import { auth } from "@/app/utils/auth";
import { getArticlesByEmail, getPostsAdmin } from "@/app/utils/action";

async function fetchData(page) {
  const session = await auth();
  if (session.user.email === "mohamed7dakir@gmail.com") {
    const articles = await getPostsAdmin(page);
    return articles;
  } else {
    const articleByEmail = await getArticlesByEmail(session.user.email);
    return articleByEmail;
  }
}
const Blogs = async ({ searchParams }) => {
  const { page } = await searchParams;
  const currentPage = parseInt(page);
  const postAdmin = await fetchData(page);
  const posts = JSON.parse(JSON.stringify(postAdmin));
  return (
    <div className="w-full p-6 h-full md:p-1 xs:py-10">
      <ListDashboardBlogs
        posts={posts.posts}
        totalPage={posts.totalPage}
        page={currentPage}
      />
    </div>
  );
};

export default Blogs;
