import React from "react";
import styles from "@/app/components/categoryList/categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import Layout from "@/app/components/Layout";
const getData = async () => {
  const res = await fetch("https://www.medcode.dev/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};
async function getPosts(cat) {
  const res = await fetch(
    `https://www.medcode.dev/api/articles?category=${cat}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }
  const posts = await res.json();
  const sortedPosts = posts?.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return sortedPosts;
}
export async function generateMetadata({ params }) {
  const post = await getPosts(params.cat);
  const heading = `Blogs About ${params.cat}`;
  return {
    title: heading,
    description: `Explore a treasure trove of insightful programming articles and engaging blogs about ${params.cat} Discover expert-written content covering languages, frameworks`,
    keywords: [
      "React",
      "solution",
      "coding",
      "articles",
      "programming",
      "blogs",
      "learn",
      "money",
      "easy",
    ],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/category/${params.cat}`,
      languages: {
        "en-US": `en-US/category/${params.cat}`,
      },
      types: {
        "application/rss+xml": "https://www.medcode.dev/rss",
      },
    },
    openGraph: {
      title:
        params.cat === "all"
          ? `All Blogs & Articles`
          : `All Blogs About ${params.cat}`,
      description: `Explore a treasure trove of insightful programming articles and engaging blogs about ${params.cat} Discover expert-written content covering languages, frameworks`,
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

const Card = async ({ params }) => {
  const sortedPosts = await getPosts(params.cat);
  const category = await getData();
  const FormatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };
  const myTitle =
    params.cat === "all" ? `All Articles` : `All Articles About ${params.cat}`;
  return (
    <Layout className="py-4 px-16 p-8 xl:px-8 xl:p-6 pt-24 xl:pt-24 lg:pt-6 md:px-6 xs:px-4 xs:pt-10">
      <div className="px-2 xs:px-1 py-8 lg:py-5">
        <h1 className="px-4 text-mainColor sm:text-xl sm:px-0 text-3xl font-outFit font-bold uppercase mt-4 lg:mt-2 md:px-4 xs:pt-6">
          #{myTitle}
        </h1>
        <div className="grid grid-cols-7 gap-4 pt-14 px-4 lg:grid-cols-5 lg:px-4 lg:gap-y-6 md:flex md:flex-wrap md:justify-items-start md:items-center xs:flex xs:px-2 xs:justify-start">
          {category?.map((item) => (
            <Link
              className={`${styles.category} xs:shrink w-16 h-16 xl:w-10 xl:h-10 dark:text-light xs:bg-mainColor xs:text-light `}
              key={item._id}
              href={`/category/${item.value}`}
            >
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.label}
                  loading="lazy"
                  width={300}
                  height={300}
                  className={"w-16 h-16 xl:w-10 xl:h-10 rounded-full xs:hidden"}
                />
              )}
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="grid justify-center grid-cols-3 gap-6 mt-8 md:block">
        {sortedPosts?.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-lg dark:shadow-white rounded-md lg:block md:mb-6 lg:w-full sm:w-full dark:bg-dark dark:border-light"
          >
            <Link
              href={`/blogs/${item.slug}`}
              className="hover:no-underline focus:no-underline dark:bg-gray-900"
            >
              <Image
                width={500}
                height={500}
                className="object-cover w-full rounded h-44 dark:bg-gray-500 md:object-fill"
                src={item.image}
                alt={item.title}
                loading="lazy"
              />
              <div className="p-6 space-y-2 block">
                <p className="text-mainColor font-bold tex-sm">
                  #{item.category}
                </p>
                <span
                  className="bg-gradient-to-r text-2xl font-semibold from-red-200 to-red-400 bg-[length:0px_10px] bg-left-bottom
      bg-no-repeat
      transition-[background-size]
      duration-500
      hover:bg-[length:100%_3px]
      group-hover:bg-[length:100%_10px]
      dark:from-red-800 dark:to-purple-900 dark:text-light"
                >
                  {item.title}
                </span>
                <span className="flex justify-start items-center py-2 dark:text-light">
                  <FaRegCalendarAlt className="w-5 h-5 text-gray-800 dark:text-light" />
                  <span className="ml-2 font-semibold dark:text-light">
                    {FormatDate(item?.createdAt.slice(0, 10))}
                  </span>
                </span>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};
export default Card;
