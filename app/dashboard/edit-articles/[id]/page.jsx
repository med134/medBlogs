import React from "react";
import Layout from "@/app/components/Layout";
import PageNotFound from "@/app/PageNotFound";
import EditArticle from "@/app/components/EditArticle";

async function getData(id) {
  const res = await fetch(`https://medcode.dev/api/articles/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return <PageNotFound />;
  }
  return res.json();
}

const Edit = async ({ params }) => {
  const { id } = params;
  const data = await getData(id);

  return (
    <Layout className="p-16 lg:p-8 md:p-8 sm:p-8 xs:p-6">
      <h1 className="text-center text-2xl text-gray-800 font-semibold dark:text-light">
        Edit Your Article & Submit
      </h1>
      <EditArticle
        id={id}
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