import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import HeroLoading from "./HeroLoading";

const Card = ({ posts, loading }) => {
  const FormatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };
  return (
    <div className="sm:mb-3 p-16 dark:bg-dark md:p-6 md:mt-3">
      {loading ? (
        <HeroLoading />
      ) : (
        posts?.map((item, index) =>
          index < 1 ? (
            <div
              key={item._id}
              className="flex justify-between items-center relative dark:bg-dark rounded-lg bg-gray-100 shadow-md p-8 md:flex-wrap-reverse md:p-4 md:mt-4 xs:mt-0"
            >
              <div className="xl:w-[900px] md:w-full p-2">
                <span className="flex justify-start items-center py-2 dark:text-light">
                  <FaRegCalendarAlt className="w-5 h-5 text-gray-800 dark:text-light" />
                  <span className="ml-2 font-semibold dark:text-light xs:text-sm">
                    {FormatDate(item?.createdAt.slice(0, 10))}
                  </span>
                </span>
                <Link href={`/blogs`}>
                  <h1
                    className="bg-gradient-to-r text-4xl xl:text-3xl font-extrabold from-red-300 to-red-600 bg-[length:0px_10px] bg-left-bottom
      bg-no-repeat
      transition-[background-size]
      duration-500
      hover:bg-[length:100%_3px]
      group-hover:bg-[length:100%_10px]
      dark:from-red-800 dark:to-purple-900 dark:text-light xs:text-xl"
                  >
                    {item.title}
                  </h1>
                </Link>
                <p className="mt-2 text-xl text-gray-500 py-4 xs:text-sm xs:mt-1">
                  {item?.description}...
                </p>
                <Link
                  href={`/category/${item.category}`}
                  className="flex justify-start items-center"
                >
                  <span className="bg-light p-1 uppercase text-gray-800 rounded-md font-semibold hover:bg-slate-800 hover:text-white transition-transform duration-75 ease-out">
                    {item.category} {item.tags}
                  </span>
                </Link>
                <button className="group flex items-center dark:border dark:border-light dark:from-[#1b1b1b] dark:to-[#1b1b1b] px-3 py-2 mt-3 xs:mt-1 hover:underline rounded-md bg-gradient-to-r from-slate-300 to-slate-400 text-white transition sm:mt-0 sm:w-auto focus:outline-none focus:ring focus:ring-indigo-200">
                  <Link
                    href={`/blogs/${item._id}`}
                    className="text-sm font-medium dark:text-light"
                  >
                    {" "}
                    Read more...{" "}
                  </Link>
                  <svg
                    className="group-hover:translate-x-2 ml-3 h-5 w-5 transition-all"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
              <div className="w-full">
                <Image
                  alt="Laptop"
                  width={500}
                  height={500}
                  src={item.image}
                  className="w-full h-80 rounded-xl object-cover xl:object-contain"
                />
              </div>
            </div>
          ) : null
        )
      )}
    </div>
  );
};

export default Card;