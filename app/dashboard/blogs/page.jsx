import React from "react";
import ListDashboardBlogs from "@/app/components/ListDashboardBlogs";
import { auth } from "@/app/utils/auth";
import { getArticlesByEmail, getPostsAdmin } from "@/app/utils/action";
import ListBlogUsers from "@/app/components/ListBlogUsers";

async function fetchData(page, email) {
  if (email === "mohamed7dakir@gmail.com") {
    const articles = await getPostsAdmin(page);
    return articles;
  } else {
    const articleByEmail = await getArticlesByEmail(email, page);
    return articleByEmail;
  }
}
const Blogs = async ({ searchParams }) => {
  const { page } = await searchParams;
  const session = await auth();
  const currentPage = parseInt(page);
  const postAdmin = await fetchData(page, session.user.email);
  const posts = JSON.parse(JSON.stringify(postAdmin));
  return (
    <div className="w-full p-6 h-full md:p-1 xs:py-10">
      {session.user.email === process.env.ADMIN_EMAIL ? (
        <ListDashboardBlogs
          posts={posts.posts}
          totalPage={posts.totalPage}
          page={currentPage || 1}
        />
      ) : (
        <ListBlogUsers
          posts={posts.posts}
          totalPage={posts.totalPage}
          page={currentPage || 1}
        />
      )}
    </div>
  );
};

export default Blogs;
