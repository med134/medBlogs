"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const AllCategoryPage = ({ sortedPosts }) => {
  const [blog, setBlog] = useState(sortedPosts);
  const [loading, setLoading] = useState(false);
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
    <>
      <div className="grid justify-center grid-cols-3 gap-6 mt-8 md:block">
        {currentBlog?.map((item) => (
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
                src={item.image.trimEnd()}
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
      {blog.length === 0 ? null : (
        <nav aria-label="Page navigation" className="flex justify-center mt-4 mb-10">
          <ul className="inline-flex -space-x-px text-sm">
            <li>
              <button
                onClick={() => handleMovePages(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
              >
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index}>
                <button
                  onClick={() => handleMovePages(index + 1)}
                  className={`flex items-center justify-center px-3 h-8 leading-tight border ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-500 border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleMovePages(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default AllCategoryPage;
