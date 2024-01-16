import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import HeroLoading from "./HeroLoading";
import { motion } from "framer-motion";

const FirstView = ({ posts, loading }) => {
  const FormatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };
  return (
    <div className="sm:mb-3 px-8 py-6 dark:bg-dark md:p-6 md:mt-3 xs:pt-0 xs:py-0 xs:p-0">
      {loading ? (
        <HeroLoading />
      ) : (
        posts?.map((item, index) =>
          index < 1 ? (
            <motion.div
              key={item._id}
              initial={{ x: -100, y: -200, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="flex justify-between items-center relative dark:bg-dark rounded-lg bg-gray-100 shadow-md xs:shadow-none p-8 md:flex-wrap-reverse md:p-4 md:mt-4 xs:mt-0 xs:p-3">
                <div className="xl:w-[900px] md:w-full p-2">
                  <span className="flex justify-start items-center py-2 dark:text-light">
                    <FaRegCalendarAlt className="w-5 h-5 text-gray-800 dark:text-light" />
                    <span className="ml-2 font-semibold dark:text-light xs:text-sm">
                      {FormatDate(item?.createdAt.slice(0, 10))}
                    </span>
                  </span>
                  <Link
                    href={`/blogs/${item._id}`}
                    aria-current="page"
                    rel="preload"
                  >
                    <span
                      className="bg-gradient-to-r text-4xl xl:text-3xl font-extrabold from-red-300 to-red-600 bg-[length:0px_10px] bg-left-bottom
      bg-no-repeat
      transition-[background-size]
      duration-500
      hover:bg-[length:100%_3px]
      group-hover:bg-[length:100%_10px]
      dark:from-red-800 dark:to-purple-900 dark:text-light xs:text-xl"
                    >
                      {item.title}
                    </span>
                  </Link>
                  <p className="mt-2 text-xl text-gray-700 py-4 xs:text-sm xs:mt-1 xs:py-2">
                    {item?.description.slice(0, 130)}...
                  </p>
                  <Link
                    href={`/category/${item.category}`}
                    className="flex justify-start items-center"
                    aria-current="page"
                  >
                    <span className="bg-light p-1 uppercase text-gray-800 rounded-md font-semibold hover:bg-slate-800 hover:text-white transition-transform duration-75 ease-out">
                      {item.category} {item.tags}
                    </span>
                  </Link>
                  <Link
                    aria-current="page"
                    href={`/blogs/${item._id}`}
                    className="inline-flex items-center mt-4 first-line:mt-4 mr-2  justify-center rounded-md dark:text-dark bg-sky-800 px-8 py-2 text-center text-white duration-150 md:mb-4 hover:translate-y-1 hover:bg-sky-500 dark:bg-light"
                  >
                    <span>Read more...</span>
                  </Link>
                </div>
                <div className="w-full">
                  <Image
                    alt={item.title}
                    width={500}
                    priority
                    height={500}
                    src={item.image}
                    className="w-full h-80 rounded-xl object-cover xl:object-contain xs:h-56"
                  />
                </div>
              </div>
            </motion.div>
          ) : null
        )
      )}
    </div>
  );
};

export default FirstView;
