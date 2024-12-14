import React from "react";
import Layout from "@/app/components/Layout";
import EditArticle from "@/app/components/EditArticle";
import { getPostsBySlug } from "@/app/utils/action";
import { auth } from "@/auth";

const Edit = async ({ params }) => {
  const { slug } = await params;
  const data = await getPostsBySlug(slug);
  const article = JSON.parse(JSON.stringify(data));
  const session = await auth();

  return (
    <div className="p-6 md:p-1 bg-white">
      <h1 className="text-left text-2xl text-gray-800 font-semibold py-8">
        Edit Your Article & Submit
      </h1>
      <EditArticle article={article} session={session} />
    </div>
  );
};
export default Edit;
