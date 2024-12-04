import React from "react";
import ListDashboardBlogs from "@/app/components/ListDashboardBlogs";
import {
  getArticlesByEmail,
  getEmailSession,
  getPostsAdmin,
} from "@/app/utils/action";
import ListBlogUsers from "@/app/components/ListBlogUsers";

async function fetchData(page, email) {
  if (email === process.env.ADMIN_EMAIL) {
    const articles = await getPostsAdmin();
    return articles;
  } else {
    const articleByEmail = await getArticlesByEmail(email, page);
    return JSON.parse(JSON.stringify(articleByEmail));
  }
}
const Blogs = async ({ searchParams }) => {
  const { page } = await searchParams;
  const email = await getEmailSession();
  const currentPage = parseInt(page);
  const posts = await fetchData(page, email);
  return (
    <div className="w-full p-6 h-full md:p-1 xs:py-10">
      {email === process.env.ADMIN_EMAIL ? (
        <ListDashboardBlogs posts={posts} />
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
