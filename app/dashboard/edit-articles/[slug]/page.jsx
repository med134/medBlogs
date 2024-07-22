import React from "react";
import Layout from "@/app/components/Layout";
import PageNotFound from "@/app/PageNotFound";
import EditArticle from "@/app/components/EditArticle";

async function getData(slug) {
  const res = await fetch(`https://medcode.dev/api/articles/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return <PageNotFound />;
  }
  return res.json();
}

const Edit = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);

  return (
    <Layout className="p-6 lg:p-8 md:p-8 bg-white sm:p-8 xs:p-6 pt-[120px] md:pt-[80px] sm:pt-8">
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
      />
    </Layout>
  );
};
export default Edit;
