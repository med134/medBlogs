import React from "react";
import Layout from "@/app/components/Layout";
import EditArticle from "@/app/components/EditArticle";
import { getPostsBySlug } from "@/app/utils/action";
import { auth } from "@/app/utils/auth";

const Edit = async ({ params }) => {
  const { slug } = params;
  const data = await getPostsBySlug(slug);
  const session = await auth();

  return (
    <Layout className="p-6 lg:p-8 md:p-8 bg-white sm:p-8 xs:p-6  py-14 md:py-8">
      <h1 className="text-left py-6 text-2xl text-gray-800 font-semibold dark:text-light">
        Edit Your Article & Submit
      </h1>
      <EditArticle
        slug={slug}
        title={data.title}
        description={data.description}
        image={data.image}
        tags={data.tags}
        job={data.job}
        category={data.category}
        content={data.content}
        status={data.status}
        userName={data.username}
        UserEmail={data.email}
        session={session}
      />
    </Layout>
  );
};
export default Edit;
