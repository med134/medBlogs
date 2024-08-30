import React from "react";
import ListDashboardBlogs from "@/app/components/ListDashboardBlogs";
import { auth } from "@/app/utils/auth";
const getPostsByUser = async (username) => {
  const res = await fetch(
    `https://www.medcode.dev/api/articles?username=${username}`
  );
  if (!res.ok) {
    throw new Error("failed to get data");
  }
  const posts = await res.json();
  return posts;
};
const Blogs = async () => {
  const session = await auth();
  const posts = await getPostsByUser(session?.user.name);
  return (
    <div className="mx-auto p-6 pt-24 h-full">
      <ListDashboardBlogs data={posts} />
    </div>
  );
};

export default Blogs;
