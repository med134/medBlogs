import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import "quill/dist/quill.snow.css";
import Link from "next/link";
import SidBar from "@/app/components/SidBar";

const ShareButtons = dynamic(() => import("@/app/components/ShareButtons"), {
  ssr: false,
});
const Comments = dynamic(() => import("@/app/components/comments/comments"), {
  ssr: false,
});

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
  const publishedAt = new Date(post.createdAt).toISOString();
  const modifiedAt = new Date(post.updatedAt || blog.createdAt).toISOString();
  return {
    title: post?.title,
    description: post?.description,
    keywords: post?.tags,
    publishedTime: publishedAt,
    modifiedTime: modifiedAt,
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
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
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
    <section className="w-full grid grid-cols-7 gap-12 p-10 pt-[160px] lg:block dark:bg-dark xl:p-8 xl:gap-3 sm:p-4 xs:p-2 xl:pt-44 xs:pt-28">
      <div className="col-span-5 flex flex-wrap justify-around dark:bg-dark">
        <div className="w-full px-4 mb-1 sm:text-sm sm:mb-2 dark:text-light dark:bg-dark">
          <h1 className="text-4xl font-bold py-6 pt-6 sm:text-xl text-mainColor dark:text-light xs:py-1">
            {blog.title}
          </h1>
          <span className="text-xl text-gray-600 py-3 xs:text-sm xs:py-1 dark:text-light">
            {blog.description.slice(0, 200)}...
          </span>
          <div className="mt-6">
            <div className="flex justify-start py-1">
              <div className="flex justify-start items-center dark:bg-dark">
                <a
                  href={`mailto:${blog?.email}`}
                  className="text-blue-600 text-sm lowercase"
                >
                  {blog?.username}
                </a>
                <span className="ml-2 text-sm text-gray-800 font-semibold dark:text-light">
                  | {FormatDate(blog?.createdAt.slice(0, 10))}
                </span>
              </div>
              <Link
                href={`/category/${blog.category}`}
                className="uppercase text-xs text-gray-800 font-semibold rounded-sm px-2 py-1 ml-2 bg-yellow-400 hover:bg-yellow-300"
              >
                {blog.category}
              </Link>
            </div>
            <Image
              src={blog.image}
              alt={blog.title}
              className="w-full h-96 xs:h-auto object-cover md:object-contain sm:object-contain rounded mt-2"
              width={500}
              height={300}
              priority={true}
            />
          </div>
          <ShareButtons url={`https://www.medcode.dev/blogs/${slug}`} />
          <h2 className="flex underline font-bold justify-start items-start py-6 xs:py-2 ml-2 mt-1 font-bolder">
            {blog.tags}
          </h2>
          <div className="ql-snow">
            <div
              className="ql-editor"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
          <Comments postSlug={blog._id} />
        </div>
      </div>
      <div className="sm:w-full col-span-2 sm:p-6 sticky">
        <SidBar slug={slug} category={blog.category} />
      </div>
    </section>
  );
};
export default BlogPage;
