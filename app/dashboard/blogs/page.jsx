import React from "react";
import ListDashboardBlogs from "@/app/components/ListDashboardBlogs";
import { getPostsByUser,getPosts } from "@/app/utils/action";
import { auth } from "@/app/utils/auth";

const Blogs = async () => {
  const session = await auth();
  const allPosts =await getPosts();
  const posts = await getPostsByUser(session?.user.name);
  return (
    <div className="mx-auto p-6 pt-24 h-full">
      <ListDashboardBlogs data={posts} allPosts={allPosts} session={session}/>
    </div>
  );
};

export default Blogs;
