 import React from "react";
import ListDashboardBlogs from "@/app/components/ListDashboardBlogs";
import { auth } from "@/app/utils/auth";

const Blogs = async () => {
  const session = await auth();
  const user = session.user.email;
  return (
    <div className="w-full p-6 h-full md:p-1 xs:py-10">
      <ListDashboardBlogs user={user} />
    </div>
  );
};

export default Blogs;
