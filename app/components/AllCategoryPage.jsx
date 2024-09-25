"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import imageBlog from "@/public/images/postera.png";
import dynamic from "next/dynamic";
const Pagination = dynamic(() => import("./Pagination"), { ssr: false });

const AllCategoryPage = ({ sortedPosts }) => {
  const [blog, setBlog] = useState(sortedPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 3;
  const FormatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };
  const handleMovePages = (page) => {
    setCurrentPage(page);
  };
  const indexOfLastBlog = currentPage * perPage;
  const indexOfFirstBlog = indexOfLastBlog - perPage;
  const currentBlog = blog.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blog.length / perPage);
  return (
    <div className="">
      <div className="grid justify-center grid-cols-3 gap-6 mt-8 md:block bg-light px-16 sm:px-6 dark:bg-dark">
        {currentBlog?.map((item) => (
          <div
            key={item._id}
            className=" shadow-lg dark:shadow-white rounded-md lg:block md:mb-6 lg:w-full sm:w-full dark:bg-dark dark:border-light"
          >
            <Link
              href={`/blogs/${item.slug}`}
              className="hover:no-underline focus:no-underline dark:bg-gray-900"
            >
              <Image
                width={300}
                height={300}
                className="object-contain w-full rounded h-44 dark:bg-gray-500 md:object-fill"
                src={item.image ? item.image.trimEnd() : imageBlog}
                alt={item.title}
                loading="lazy"
              />
              <div className="p-6 flex flex-col space-y-2">
                <span className="text-mainColor font-bold tex-sm">
                  #{item.category}
                </span>
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
                    {FormatDate(item?.createdAt)}
                  </span>
                </span>
                <p className="text-gray-500 text-sm">
                  {item.description.slice(0, 100)}...
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {blog.length > 0 && (
        <Pagination
          totalPages={totalPages}
          handleMovePages={handleMovePages}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default AllCategoryPage;
