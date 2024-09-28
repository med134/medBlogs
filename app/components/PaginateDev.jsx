"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Pagination from "./Pagination";

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
      <div className="grid grid-cols-2 gap-10 lg:gap-4 px-16 py-8 xs:py-3 lg:px-8 md:flex md:flex-col sm:px-2 xl:px-10 xs:gap-1">
        {currentBlog?.map((item) => (
          <div
            key={item.id}
            className="flex max-lg:flex-col bg-white dark:bg-dark md:mb-3 sm:flex sm:flex-col cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300"
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
              <h3 className="text-xl font-bold text-gray-800 dark:text-light">
                {item.title}
              </h3>
              <span className="text-sm block text-gray-400 mt-2 dark:text-light">
                {item.readable_publish_date} | BY {item.user[0]}
              </span>
              <p className="text-sm text-gray-500 mt-4 dark:text-light">
                {item.description}
              </p>
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
      {dev.length > 0 && (
        <Pagination
          totalPages={totalPages}
          handleMovePages={handleMovePages}
          currentPage={currentPage}
        />
      )}
    </>
  );
};

export default PaginateDev;
