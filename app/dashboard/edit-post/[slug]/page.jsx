import React from "react";
import Layout from "@/app/components/Layout";
import PageNotFound from "@/app/PageNotFound";
import EditPost from "@/app/components/EditPost";

async function getData(slug) {
  const res = await fetch(`https://medcode.dev/api/posts/${slug}`, {
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
    <Layout className="p-16 lg:p-8 md:p-8 sm:p-8 xs:p-6 pt-[120px] md:pt-[80px] sm:pt-8">
      <h1 className="text-center text-2xl text-gray-800 font-semibold dark:text-light">
        Edit Your Post & Submit
      </h1>
      <EditPost
        slug={slug}
        title={data.title}
        description={data.description}
        image={data.image}
        link={data.link}
        category={data.category}
        code={data.code}
      />
    </Layout>
  );
};
export default Edit;
