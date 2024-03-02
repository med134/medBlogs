import React from "react";
import Link from "next/link";
import { BsArrowLeftCircleFill, BsArrowsFullscreen } from "react-icons/bs";
import Image from "next/image";
import PageNotFound from "@/app/PageNotFound";
import CodeEditor from "@/app/components/CodeEditor";
import BlogAction from "@/app/components/BlogAction";

async function getData(slug) {
  const res = await fetch(`https://www.medcode.dev/api/posts/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return <PageNotFound />;
  }
  return res.json();
}
async function getTemplates() {
  const res = await fetch(`https://medcode.dev/api/posts`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return <PageNotFound />;
  }

  return res.json();
}
export async function generateMetadata({ params }) {
  const post = await getData(params.slug);

  return {
    title: post.title,
    description: post.description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/templates/${params.slug}`,
      languages: {
        "en-US": `en-US/templates${params.slug}`,
      },
      types: {
        "application/rss+xml": "https://www.medcode.dev/rss",
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        {
          url: post.image,
          width: "400",
          height: "300",
        },
      ],
    },
  };
}
const TemplateId = async ({ params }) => {
  const templates = await getTemplates();
  const { slug } = params;
  const data = await getData(slug);

  return (
    <>
      <div className="p-12 pt-[40px] h-full xs:pt-6 dark:bg-dark xl:block md:p-4 xs:p-6">
        <div className="h-full flex justify-around items-center px-6 xs:px-1 lg:block">
          <div className="information pt-24">
            <Link
              href="/templates"
              className="group inline-flex justify-around rounded-md bg-mainColor mb-3 p-2 px-4 py-2 xs:mt-4 text-white transition sm:mt-0 sm:w-auto focus:outline-none focus:ring focus:ring-indigo-200"
            >
              <BsArrowLeftCircleFill className="ml-3 group-hover:-translate-x-3 group-hover:transition-all " />
              <span className="text-sm mr-3 px-3"> Back to templates </span>
            </Link>
            <p className="px-2 text-gray-500 dark:text-light">
              {data.category}
            </p>
            <h1 className="text-3xl font-serif px-2 font-semibold text-mainColor py-1 xs:text-xl dark:text-cyan-600">
              {data.title}
            </h1>
            <p className="px-2 py-4 text-sm text-gray-700 dark:text-light">
              {" "}
              {data.description}
            </p>

            <Link
              href={data?.link}
              target="_blank"
              className={`flex w-48 mb-2 cursor-pointer select-none items-center justify-center rounded-md bg-mainColor text-sm px-6 py-1 text-light`}
            >
              <span className="flex w-full items-center justify-between rounded py-1 text-center font-semibold">
                Full Screen
                <BsArrowsFullscreen className="h-4 w-4" />
              </span>
            </Link>
          </div>
          <div className="blog">
            <BlogAction />
          </div>
        </div>
        <div className="p-2 mt-6 w-full h-full xs:mt-6">
          {/* <ClipBoard data={data.code} /> */}
          {/* <CodeEditor code2={data.code} /> */}
        </div>
        <div className="w-full p-6 mb-16 xs:p-2">
          <span className="text-2xl font-semibold text-mainColor py-4 underline px-2 xs:mb-5 dark:text-light">
            Related components:
          </span>
          <div className="grid grid-cols-3 gap-8 px-8 pt-8 p-8 md:block xs:px-3 xs:p-3">
            {templates?.map((item, index) =>
              item.slug != slug && index < 7 ? (
                <div className="w-auto rounded-md overflow-hidden shadow-md hover:shadow-lg xs:mb-4 dark:shadow-light">
                  <div className="relative">
                    <Image
                      className="w-full"
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={400}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <Link
                      href={`/templates/${item.slug}`}
                      className="text-2xl xs:text-xl font-semibold hover:underline mb-2 text-mainColor dark:text-light"
                    >
                      {item.title}
                    </Link>
                    <p className="text-gray-600 text-sm mb-4 dark:text-light">
                      {item.description.slice(0, 70)}...
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-light px-2 py-1 bg-cyan-600 rounded-lg">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplateId;
