import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import SidBar from "@/app/components/SidBar";
import { auth } from "@/app/utils/auth";
import { getPostsBySlug, FormatDate } from "@/app/utils/action";
import "jodit-react/examples/app.css";

const ShareButtons = dynamic(() => import("@/app/components/ShareButtons"), {
  suspense: true,
});
const Comments = dynamic(() => import("@/app/components/comments/comments"), {
  suspense: true,
});

export async function generateMetadata({ params }) {
  const post = await getPostsBySlug(params.slug);
  const publishedAt = new Date(post?.createdAt).toISOString();
  const modifiedAt = new Date(post?.updatedAt || post?.createdAt).toISOString();
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
  const blog = await getPostsBySlug(slug);
  const content = blog.content;
  const session = await auth();

  return (
    <section className="w-full grid grid-cols-7 gap-12 p-10 pt-[160px] lg:block dark:bg-dark xl:p-8 xl:gap-3 sm:p-4 xs:p-2 xl:pt-44 xs:pt-28">
      <div className="col-span-5 flex flex-wrap justify-around dark:bg-dark">
        <div className="w-full px-4 mb-1 sm:text-sm sm:mb-2 dark:text-light dark:bg-dark">
          <h1 className="text-4xl font-bold py-6 pt-6 sm:text-2xl text-mainColor dark:text-light xs:py-1">
            {blog.title}
          </h1>
          <span className="text-xl text-gray-600 py-3 sm:text-sm xs:text-sm xs:py-1 dark:text-light">
            {blog.description}
          </span>
          <div className="mt-6">
            <div className="flex justify-start py-1">
              <div className="flex justify-start items-center dark:bg-dark">
                <Link
                  href={`/dashboard/profile/${blog.username
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                  className="text-blue-600 text-sm lowercase dark:text-light"
                >
                  {blog?.username}
                </Link>
                <span className="ml-2 text-sm text-gray-800 font-semibold dark:text-light">
                  | {FormatDate(blog?.createdAt)}
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
              src={blog.image ? blog.image : `/public/images/postera.png`}
              alt={blog.title}
              className="w-[850px] h-80 xs:h-auto object-contain rounded mt-2"
              width={500}
              height={300}
              priority={true}
              quality={100}
            />
          </div>
          <ShareButtons url={`https://www.medcode.dev/blogs/${slug}`} />
          <h2 className="flex underline font-bold justify-start items-start py-6 xs:py-2 ml-2 mt-1 font-bolder">
            {blog.tags}
          </h2>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <Comments postSlug={blog._id} session={session} />
        </div>
      </div>
      <div className="sm:w-full col-span-2 sm:p-6 sticky">
        <SidBar slug={slug} category={blog.category} />
      </div>
    </section>
  );
};
export default BlogPage;
