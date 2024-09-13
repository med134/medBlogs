"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TbArticleOff } from "react-icons/tb";

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
    <div className="">
      <div className="grid justify-center grid-cols-3 gap-6 mt-8 md:block bg-light px-16 sm:px-6 dark:bg-dark">
        {currentBlog.length > 0 ? (
          currentBlog?.map((item) => (
            <div
              key={item._id}
              className=" shadow-lg dark:shadow-white rounded-md lg:block md:mb-6 lg:w-full sm:w-full dark:bg-dark dark:border-light"
            >
              <Link
                href={`/blogs/${item.slug}`}
                className="hover:no-underline focus:no-underline dark:bg-gray-900"
              >
                <Image
                  width={500}
                  height={500}
                  className="object-contain w-full rounded h-44 dark:bg-gray-500 md:object-fill"
                  src={item.image.trimEnd()}
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
          ))
        ) : (
          <div className="flex flex-col ml-16 items-center justify-center py-8 px-4 text-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <svg
              className="w-12 h-12 dark:text-gray-400 text-gray-700"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              height="200px"
              width="200px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="File_Off">
                <g>
                  <path d="M4,3.308a.5.5,0,0,0-.7.71l.76.76v14.67a2.5,2.5,0,0,0,2.5,2.5H17.44a2.476,2.476,0,0,0,2.28-1.51l.28.28c.45.45,1.16-.26.7-.71Zm14.92,16.33a1.492,1.492,0,0,1-1.48,1.31H6.56a1.5,1.5,0,0,1-1.5-1.5V5.778Z" />
                  <path d="M13.38,3.088v2.92a2.5,2.5,0,0,0,2.5,2.5h3.07l-.01,6.7a.5.5,0,0,0,1,0V8.538a2.057,2.057,0,0,0-.75-1.47c-1.3-1.26-2.59-2.53-3.89-3.8a3.924,3.924,0,0,0-1.41-1.13,6.523,6.523,0,0,0-1.71-.06H6.81a.5.5,0,0,0,0,1Zm4.83,4.42H15.88a1.5,1.5,0,0,1-1.5-1.5V3.768Z" />
                </g>
              </g>
            </svg>
            <span className="text-xl font-medium mt-4 text-gray-700 dark:text-gray-200">
              Article not found
            </span>
            <span className="text-gray-500 dark:text-gray-400 mt-2">
              there are not article about productivity
            </span>
          </div>
        )}
      </div>
      {blog.length === 0 ? null : (
        <div
          aria-label="Page navigation"
          className="flex justify-center mt-4"
        >
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
        </div>
      )}
    </div>
  );
};

export default AllCategoryPage;
