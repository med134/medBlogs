import React from "react";
import Link from "next/link";
import { BsArrowLeftCircleFill, BsArrowsFullscreen } from "react-icons/bs";
import ClipBoard from "@/app/components/ClipBorad";
import Image from "next/image";
import PageNotFound from "@/app/PageNotFound";

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
      <div className="grid grid-cols-4 p-12 gap-6 dark:bg-dark xl:block xs:p-2 md:p-4">
        <div className="px-6 col-span-3">
          <Link
            href="/templates"
            className="group inline-flex justify-around rounded-md bg-purple-500 mb-3 p-2 px-4 py-2 xs:mt-4 text-white transition sm:mt-0 sm:w-auto focus:outline-none focus:ring focus:ring-indigo-200"
          >
            <BsArrowLeftCircleFill className="ml-3 group-hover:-translate-x-3 group-hover:transition-all " />
            <span className="text-sm mr-3 px-3"> Back to templates </span>
          </Link>
          <p className="px-2 text-gray-500 dark:text-light">{data.category}</p>
          <h1 className="text-3xl font-serif px-2 font-semibold text-borderColor py-1 xs:text-xl">
            {data.title}
          </h1>
          <p className="px-2 py-2 text-sm text-gray-700 dark:text-light">
            {" "}
            {data.description}
          </p>
          <div className="">
            <Link
              href={data?.link}
              target="_blank"
              className={`flex w-48 mb-2 cursor-pointer select-none items-center justify-center rounded-md bg-purple-500 text-sm px-6 py-1 text-light`}
            >
              <span className="flex w-full items-center justify-between rounded py-1 text-center font-semibold">
                Full Screen
                <BsArrowsFullscreen className="h-4 w-4" />
              </span>
            </Link>
          </div>
          <div className="w-full mb-4 xs:w-[350px] xs:mb-4">
            <Image
              alt={data.title}
              loading="lazy"
              src={data.image}
              className="h-full w-full border rounded-lg shadow-xl xs:w-[350px]"
              width={600}
              height={600}
            />
          </div>
          <div className="p-2 mt-6 w-full xs:mt-6">
            <ClipBoard data={data.code} />
          </div>
        </div>
        <div className="col-span-1 w-full p-6 mb-16">
          <h4 className="text-xl font-medium text-purple-400 mb-2 underline px-2">
            Recent Templates:
          </h4>
          <div className="flex flex-wrap justify-between items-center">
            {templates?.map((item) => (
              <div
                key={item._id}
                className="py-6 border shadow-md rounded-md mb-4 p-4 w-72"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  className="mb-2"
                  priority
                  width={300}
                  height={300}
                />
                <Link
                  href={`/templates/${item?.slug}`}
                  className="font-semibold mb-2 text-gray-600 hover:text-gray-400 hover:underline dark:text-light"
                >
                  {item.title}
                </Link>
                <h6 className="text-xs text-purple-400">{item?.category}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplateId;
