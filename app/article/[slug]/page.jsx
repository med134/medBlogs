import React from "react";
import AxiosFetch from "@/app/utils/AxiosFetch";
import "@/app/globals.css";
import SidBar from "@/app/components/SidBar";
import Image from "next/image";
import "quill/dist/quill.snow.css";
import Link from "next/link";
import dynamic from "next/dynamic";

const ShareButtons = dynamic(() => import("@/app/components/ShareButtons"), {
  ssr: false,
});
const Comments = dynamic(() => import("@/app/components/comments/comments"), {
  ssr: false,
});
export async function generateMetadata({ params }) {
  const post = await AxiosFetch.getBlogBySlug(params.slug);
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
  const post = await AxiosFetch.getBlogBySlug(slug);
  console.log("one post",post)

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
      <div className="flex col-span-5 flex-wrap justify-around dark:bg-dark">
        <div className="w-full px-4 mb-1 sm:text-sm sm:mb-2 dark:text-light dark:bg-dark">
          <h1 className="text-4xl font-bold py-6 pt-6 sm:text-xl text-mainColor dark:text-light xs:py-1">
            {post?.title}
          </h1>
          <p className="text-xl text-gray-600 py-3 xs:text-sm xs:py-1 dark:text-light">
            {post?.description}
          </p>
          <div className="flex justify-start py-1">
            <div className="flex justify-start items-center dark:bg-dark">
              <a
                href={`mailto:${post?.email}`}
                className="text-blue-600 text-sm lowercase"
              >
                {post?.username}
              </a>
              <span className="ml-2 text-sm text-gray-800 font-semibold dark:text-light">
                | {FormatDate(post?.createdAt.slice(0, 10))}
              </span>
            </div>
            <Link
              href={`/category/${post?.category}`}
              className="uppercase text-xs text-gray-800 font-semibold rounded-sm px-2 py-1 ml-2 bg-yellow-400 hover:bg-yellow-300"
            >
              {post?.category}
            </Link>
          </div>
          <Image
            src={post?.image}
            alt={post.title}
            className="w-full h-96 xs:h-auto object-cover md:object-contain sm:object-contain rounded mt-2"
            width={500}
            height={300}
            priority={true}
          />
          <ShareButtons url={`https://www.medcode.dev/blogs/${slug}`} />
          <h2 className="flex underline font-bold justify-start items-start py-6 xs:py-2 ml-2 mt-1 font-bolder">
            {post.tags}
          </h2>
          <div className="ql-snow">
            <div
              className="ql-editor"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
        <Comments postSlug={post._id} />
      </div>
      <div className="sm:w-full col-span-2 sm:p-6 sticky">
        <SidBar category={post.category} />
      </div>
    </section>
  );
};
export default BlogPage;
