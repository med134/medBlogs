"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ArticlesByCat = ({ posts }) => {
  const [sortedPosts, setSortedPosts] = useState([]);
  useEffect(() => {
    const sorted = posts.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    setSortedPosts(sorted);
  }, [posts]);
  return (
    <div className="grid justify-center grid-cols-3 gap-6 mt-8 md:block">
      {sortedPosts?.map((item) => (
        <div
          key={item._id}
          className="bg-white shadow-lg dark:shadow-white rounded-md lg:block md:mb-6 lg:w-full sm:w-full dark:bg-dark dark:border-light"
        >
          <Link
            href={`https://www.medcode.dev/blogs/${item._id}`}
            className="hover:no-underline focus:no-underline dark:bg-gray-900"
          >
            <Image
              width={300}
              height={300}
              className="object-cover w-full rounded h-44 dark:bg-gray-500 md:object-fill"
              src={item.image}
              alt="blog_image"
            />
            <div className="p-6 space-y-2 block">
              <p className="text-red-600 font-bold tex-sm">
                #{item.category}
              </p>
              <span
                  className="bg-gradient-to-r text-2xl font-semibold from-red-200 to-red-400 bg-[length:0px_10px] bg-left-bottom
      bg-no-repeat
      transition-[background-size]
      duration-500
      hover:bg-[length:100%_3px]
      group-hover:bg-[length:100%_10px]
      dark:from-red-800 dark:to-purple-900">
                  {item.title}
                </span>
              <p className="text-xs dark:text-gray-400">
                {item?.createdAt.slice(0, 10)}
              </p>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ArticlesByCat;
