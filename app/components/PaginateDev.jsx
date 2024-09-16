"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const PaginateDev = ({ dev }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const handleMovePages = (page) => {
    setCurrentPage(page);
  };
  const perPage = 4;
  const indexOfLastBlog = currentPage * perPage;
  const indexOfFirstBlog = indexOfLastBlog - perPage;
  const currentBlog = dev.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(dev.length / perPage);

  return (
    <> 
    <div className="grid grid-cols-2 gap-10 lg:gap-4 px-16 py-8 lg:px-8 md:flex md:flex-col sm:px-2 xl:px-10 xs:gap-1">
      {currentBlog?.map((item) => (
        <div
          key={item.id}
          className="flex max-lg:flex-col bg-white dark:bg-dark sm:flex sm:flex-col cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300"
        >
          <div className="h-64 lg:w-full xs:h-auto">
            <Image
              src={item.cover_image}
              alt={item.title}
              width={400}
              height={300}
              loading="lazy"
              className="w-full h-full object-cover xs:object-contain xs:h-auto"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-light">{item.title}</h3>
            <span className="text-sm block text-gray-400 mt-2 dark:text-light">
              {item.readable_publish_date} | BY {item.user[0]}
            </span>
            <p className="text-sm text-gray-500 mt-4 dark:text-light">{item.description}</p>
            <Link
              href={item.url}
              target="blank"
              className="mt-4 inline-block text-blue-600 font-semibold text-sm hover:underline"
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
      </div>
      {dev.length === 0 ? null : (
        <div aria-label="Page navigation" className="flex justify-center items-center mt-4 dark:bg-dark">
          <ul className="inline-flex -space-x-px text-sm">
            <li>
              <button
                onClick={() => handleMovePages(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center justify-center dark:text-light px-3 h-8 leading-tight text-gray-500 bg-white dark:bg-dark border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
              >
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index}>
                <button
                  onClick={() => handleMovePages(index + 1)}
                  className={`flex items-center justify-center px-3 h-8 leading-tight border  ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-500 border-gray-300 dark:bg-dark dark:text-light hover:bg-gray-100 hover:text-gray-700"
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
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 dark:bg-dark dark:text-light hover:text-gray-700"
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default PaginateDev;
