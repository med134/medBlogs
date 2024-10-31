import React from "react";
import ListDashboardBlogs from "@/app/components/ListDashboardBlogs";
import { auth } from "@/app/utils/auth";
import { getArticlesByEmail } from "@/app/utils/action";

async function fetchData() {
  const session = await auth();
  const articleByEmail = await getArticlesByEmail(session.email);
  return [session, articleByEmail];
}
const Blogs = async () => {
  const [session, articleByEmail] = await fetchData();
  const posts = JSON.parse(JSON.stringify(articleByEmail));
  return (
    <div className="w-full p-6 h-full md:p-1 xs:py-10">
      <ListDashboardBlogs posts={posts} />
    </div>
  );
};

export default Blogs;
