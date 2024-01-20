import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";

const getData = async () => {
  const res = await fetch("https://dev.to/api/articles?username=med_code", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  const templates = await res.json();
  const sortedPosts = templates?.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  return sortedPosts;
};
const Dev = async () => {
  const dev = await getData();
  const formatDate = (timestamp) => {
    const options = { month: "long", day: "numeric" };
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", options);
  };
  return (
    <div className="grid grid-cols-3 gap-10 lg:grid-cols-3 lg:gap-4 px-10 py-8 lg:px-8 md:flex md:flex-wrap sm:px-2">
      {dev?.map((item, index) =>
        index < 6 ? (
          <div
            key={item.id}
            className="rounded overflow-hidden shadow-lg flex flex-col dark:border dark:border-light"
          >
            <Link href={item.url} target="blank" />
            <div className="relative">
              <Link href={item.url} target="blank">
                <Image
                  className="w-full"
                  src={item.cover_image}
                  alt={item.title}
                  width={500}
                  height={500}
                  priority
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </Link>
              <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                {item.tag_list[0]}
              </div>
            </div>
            <div className="px-6 py-1 mb-auto">
              <Link
                href={item.url}
                target="blank"
                className="font-medium text-2xl hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2 dark:text-light"
              >
                {item.title}
              </Link>
              <p className="text-gray-800 text-sm dark:text-light">
                {item.description}
              </p>
            </div>
            <div className="px-6 py-1 flex flex-row items-center justify-between">
              <span className="flex justify-start items-center py-2 dark:text-light">
                <FaRegCalendarAlt className="w-4 h-4 text-gray-800 dark:text-light" />
                <span className="dark:text-light text-sm ml-1">
                  {formatDate(item?.published_timestamp)}
                </span>
              </span>
              <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                <svg
                  className="h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  ></path>
                </svg>
                <span className="ml-1 dark:text-light">
                  {item.public_reactions_count} Comments
                </span>
              </span>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default Dev;
