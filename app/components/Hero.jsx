import React from "react";
import Link from "next/link";
import Image from "next/image";
import BlogLoading from "./BlogLoading";
import { FaRegCalendarAlt } from "react-icons/fa";

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
    <div className="sm:mb-3">
      {loading ? (
        <BlogLoading />
      ) : (
        posts?.map((item, index) =>
          index > 0 && index < 7 ? (
            <section
              key={item._id}
              className="p-2 w-full mb-3 flex justify-evenly px-8 bg-white items-start border border-gray-500 rounded-xl dark:bg-dark dark:border-light lg:flex-wrap-reverse lg:justify-start lg:items-start lg:px-3 xs:px-1"
            >
              <div className="text-start w-1/2 lg:w-full xs:p-2">
                <span className="flex justify-start items-center py-2 dark:text-light">
                  <FaRegCalendarAlt className="w-5 h-5 text-gray-800 dark:text-light" />
                  <span className="ml-2 font-semibold dark:text-light xs:text-sm">
                    {FormatDate(item?.createdAt.slice(0, 10))}
                  </span>
                </span>
                <Link href={`/blogs/${item._id}`}>
                  <span
                    className="bg-gradient-to-r text-2xl font-semibold from-red-300 to-red-600 bg-[length:0px_10px] bg-left-bottom
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
                <p className="text-sm text-gray-700 py-3 dark:text-light">
                  {item.description}
                </p>
                <div className="flex items-center justify-start py-3">
                  <Image
                    src="https://i.ibb.co/mSjZwpw/download.png"
                    alt="user_Image"
                    className="w-8 h-8 rounded-full"
                    width={32}
                    height={32}
                    loading="lazy"
                  />
                  <p className="text-sm text-gray-500 ml-2 dark:text-light uppercase">
                    {item?.username}
                  </p>
                </div>
                <div>
                  <Link
                    href={`/category/${item.category}`}
                    className="flex justify-start items-center"
                  >
                    <span className="bg-light p-1 uppercase ml-2 px-1 text-gray-800 rounded-md font-semibold hover:bg-slate-800 hover:text-white transition-transform duration-75 ease-out">
                      {item.category}
                    </span>
                  </Link>
                </div>
              </div>
              <div className="">
                <Image
                  src={item?.image}
                  alt={item.title}
                  width={400}
                  height={400}
                  priority
                  className="object-cover rounded-xl w-96 h-52 border border-gray-500 lg:w-[460px] xs:w-full"
                />
              </div>
            </section>
          ) : null
        )
      )}

      {posts.length > 0 && (
        <Link href="/category/all" className="flex justify-center items-center">
          <span className="text-center text-xl sm:text-sm text-gray-700 dark:text-light hover:bg-blue-950 rounded-md hover:text-light border border-gray-600 px-20 py-1 w-full dark:border-light">
            show moore...
          </span>
        </Link>
      )}
    </div>
  );
};

export default Card;
