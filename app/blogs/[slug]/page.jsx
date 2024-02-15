import React from "react";
import Image from "next/image";
import SidBar from "@/app/components/SidBar";
import "react-quill/dist/quill.snow.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import Comments from "@/app/components/comments/comments";
import ShareButtons from "@/app/components/ShareButtons";

async function getData(slug) {
  const res = await fetch(`https://www.medcode.dev/api/articles/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export async function generateMetadata({ params }) {
  const post = await getData(params.slug);
  return {
    title: post?.title,
    description: post?.description,
    keywords: post?.tags,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/blogs/${params.slug}`,
      languages: {
        "en-US": `en-US/blogs${params.slug}`,
      },
      types: {
        "application/rss+xml": "https://www.medcode.dev/rss",
      },
    },
    local: "en_Us",
    type: "article",
    openGraph: {
      title: post?.title,
      description: post?.description,
      images: [
        {
          url: post?.image,
          width: "400",
          height: "300",
        },
      ],
    },
  };
}
const BlogPage = async ({ params }) => {
  const { slug } = params;
  const blog = await getData(slug);
  const content = blog.content;

  const FormatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };

  return (
    <section className="w-full grid grid-cols-6 gap-4 p-10 pt-[160px] lg:block dark:bg-dark xl:p-8 xl:gap-3 sm:p-4 xs:p-2 xs:pt-24">
      <div className="col-span-4 flex flex-wrap justify-around dark:bg-dark">
        <div className="w-full px-4 mb-1 sm:text-sm sm:mb-2 dark:text-light dark:bg-dark">
          <div className="flex justify-start items-center dark:bg-dark">
            <FaRegCalendarAlt className="w-5 h-5 text-gray-800 dark:text-light" />
            <span className="ml-2 font-semibold">
              {FormatDate(blog?.createdAt.slice(0, 10))}
            </span>
          </div>
          <h1 className="text-4xl font-bold py-2 sm:text-xl text-mainColor">{blog.title}</h1>
          <span className="text-xl text-gray-600 py-3 xs:text-sm">
            {blog.description.slice(0, 200)}...
          </span>
          <Image
            src={blog.image}
            alt={blog.title}
            className="w-full object-cover rounded mt-2"
            width={500}
            height={500}
            priority
          />
          <h2 className="flex underline font-bold justify-start items-start py-6 xs:py-2 ml-2 mt-1 font-bolder">
            {blog.tags}
          </h2>
          <div className="ql-snow">
            <div
              className="ql-editor"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
          <ShareButtons url={`https://www.medcode.dev/blogs/${slug}`} />
          <Comments postSlug={blog._id} />
        </div>
      </div>
      <div className="sm:w-full col-span-2 sm:p-6">
        <div className="flex items-center w-full max-w-sm mx-auto gap-4 mt-24 sm:mt-4 border-2 p-3 border-mainColor dark:border-light rounded-md">
          <Image
            alt="author image"
            width={200}
            loading="lazy"
            height={200}
            src="https://i.ibb.co/WVDZRxF/bussiness-man.png"
            className="w-24 h-24  object-cover rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-sm text-gray-700 dark:text-light">
              Author
            </span>
            <span className="text-gray-600 dark:text-gray-200 font-bold uppercase">
              {blog?.username}
            </span>
            <span className="text-xs text-gray-600 dark:text-light">
              {blog?.job}
            </span>
            <a
              href={`mailto:${blog?.email}`}
              className="text-xs text-gray-500 dark:text-light hover:text-blue-600 hover:underline"
            >
              {blog.email}
            </a>
          </div>
        </div>
        <SidBar slug={slug} category={blog.category} />
      </div>
    </section>
  );
};
export default BlogPage;
