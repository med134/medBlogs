import React from "react";
import Image from "next/image";
import SidBar from "@/app/components/SidBar";
import "react-quill/dist/quill.snow.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import Comments from "@/app/components/comments/comments";


async function getData(id) {
  const res = await fetch(`https://www.medcode.dev/api/articles/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  const publicAt = new Date(post?.createdAt).toISOString();
  return {
    title: post?.title,
    description: post?.description,
    keywords: post?.tags,
    publishedTime: publicAt,
    alternates: {
      canonical: `/blogs/${params.id}`,
      languages: {
        "en-US": `en-US/blogs${params.id}`,
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
  const { id } = params;
  const blog = await getData(id);
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
    <section className="containerBlog  gap-6 p-16 mx-auto mt-2 lg:block sm:p-2 dark:bg-dark">
      <div className="flex flex-wrap justify-around dark:bg-dark">
        <div className="w-full px-4 mb-1 sm:text-sm sm:mb-2 dark:text-light dark:bg-dark">
          <div className="flex justify-start items-center dark:bg-dark">
            <FaRegCalendarAlt className="w-5 h-5 text-gray-800 dark:text-light" /> 
            <span className="ml-2 font-semibold">
              {FormatDate(blog?.createdAt.slice(0, 10))}
            </span>
          </div>
          <h1 className="text-4xl font-bold py-2 sm:text-xl">{blog.title}</h1>
          <span className="text-xl text-gray-600 py-3">{blog.description}</span>
          <Image
            src={blog.image}
            alt="Featured Image"
            className="w-full object-cover rounded mt-2"
            width={500}
            height={500}
            priority
          />
          <span className="flex underline font-bold justify-start items-start py-6 ml-2 mt-1 font-bolder">
            {blog.tags}
          </span>
          <div className="ql-snow">
            <div
              className="ql-editor"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </div>
          <Comments postSlug={id} /> 
        </div>
      </div>
      <div className="sm:w-full sm:p-6">
        <div className="flex items-center w-full max-w-sm mx-auto gap-4 mt-24 sm:mt-4 border-2 p-3 border-red-500 dark:border-light rounded-md">
          <Image
            alt="author image"
            width={44}
            loading="lazy"
            height={400}
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
              {(blog.email = !null ? blog.email : "unknown")}
            </a>
          </div>
        </div>
        <SidBar />
      </div>
    </section>
  );
};
export default BlogPage;
