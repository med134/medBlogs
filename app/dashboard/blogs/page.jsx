import ListDashboardBlogs from "@/app/components/ListDashboardBlogs";
import { getPostsByUser } from "@/app/utils/action";
import { auth } from "@/app/utils/auth";
import React from "react";

const Blogs = async () => {
  const session = await auth();
  const posts = await getPostsByUser(session?.user.name);
  return (
    <div className="mx-auto p-6 pt-24 h-full">
      <ListDashboardBlogs posts={posts} />
    </div>
  );
};

export default Blogs;
