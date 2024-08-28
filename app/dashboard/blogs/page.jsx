import React from "react";
import ListDashboardBlogs from "@/app/components/ListDashboardBlogs";
import { getPostsByUser } from "@/app/utils/action";
import { auth } from "@/app/utils/auth";

const Blogs = async () => {
  const session = await auth();
  const posts = await getPostsByUser(session?.user.name);
  console.log(posts)
  return (
    <div className="mx-auto p-6 pt-24 h-full">
      <ListDashboardBlogs data={posts}/>
    </div>
  );
};

export default Blogs;
