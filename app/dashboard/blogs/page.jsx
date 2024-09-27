 import React from "react";
import ListDashboardBlogs from "@/app/components/ListDashboardBlogs";
import { auth } from "@/app/utils/auth";

const Blogs = async () => {
  const session = await auth();
  const user = session.user.name;
  console.log("this is username",user)
  return (
    <div className="w-full p-6 h-full md:p-1">
      <ListDashboardBlogs user={user} />
    </div>
  );
};

export default Blogs;
