import React from "react";
import styles from "@/app/components/categoryList/categoryList.module.css";
import Link from "next/link";
import { Suspense } from "react";
import Image from "next/image";
import AllCategoryPage from "@/app/components/AllCategoryPage";
import { getAllCategories } from "@/app/utils/action";
import SkeltonCard from "@/app/components/SkeltonCard";

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
  const heading = `All Articles About ${params.cat}`;
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
      "Next.js",
      "JavaScript",
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
  const category = await getAllCategories();

  const myTitle =
    params.cat === "all" ? `All Articles` : `All Articles About ${params.cat}`;
  return (
    <div className="bg-light dark:bg-dark w-full py-16">
      <h1 className="px-14 text-mainColor dark:text-light sm:text-xl text-3xl font-outFit font-bold uppercase mt-16 lg:mt-2 md:px-6 xs:pt-6">
        #{myTitle}
      </h1>
      <div className="flex justify-around items-center px-16 pt-14 lg:px-4  md:flex md:flex-wrap md:justify-around md:items-center xs:flex xs:px-6 xs:justify-start">
        {category?.map((item) => (
          <Link
            className={`${styles.category} text-sm md:mb-3 xs:shrink w-12 h-16 xl:w-12 xl:h-10 sm:ml-4 dark:text-light xs:bg-mainColor xs:text-light `}
            key={item._id}
            href={`/category/${item.value}`}
          >
            {item.image && (
              <Image
                src={item.image.trimEnd()}
                alt={item.label}
                loading="lazy"
                width={300}
                height={300}
                className={"w-12 h-12 xl:w-10 xl:h-10 rounded-full xs:hidden"}
              />
            )}
            {item.label}
          </Link>
        ))}
      </div>
      <Suspense fallback={<SkeltonCard />}>
        <AllCategoryPage sortedPosts={sortedPosts} />
      </Suspense>
    </div>
  );
};
export default Card;
