"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FilterTemplates from "./FilterTemplates";

const TemplatesCategory = ({ data }) => {
  const [newData, setNewData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 3;
  const handleTagClick = (tag) => {
    const filtered = data.filter((item) => item.category === tag);
    setNewData(filtered);
  };
  const seAttCat = () => {
    setNewData(data);
  };
  const handleMovePages = (page) => {
    setCurrentPage(page);
  };
  const indexOfLastBlog = currentPage * perPage;
  const indexOfFirstBlog = indexOfLastBlog - perPage;
  const currentBlog = newData.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(newData.length / perPage);
  return (
    <>
      <FilterTemplates handleTagClick={handleTagClick} seAttCat={seAttCat} />
      <article className="grid grid-cols-3 gap-6 p-16 pt-4 xl:gap-4 xl:p-8 lg:grid-cols-2 lg:gap-6 lg:p-10 sm:flex flex-wrap dark:bg-dark">
        {currentBlog?.map((item) => (
          <div
            key={item._id}
            className="max-w-sm rounded overflow-hidden shadow-lg dark:shadow-light"
          >
            <Image
              className="w-full h-44"
              src={item.image}
              alt={item.title}
              priority={true}
              width={300}
              height={300}
            />
            <div className="px-6 py-2">
              <Link
                href={`/templates/${item.slug}`}
                className="font-bold text-xl mb-2 mt-2 text-tailwindColor dark:text-light hover:underline"
              >
                {item.title}
              </Link>
              <p className={`text-gray-700 text-sm mt-2 dark:text-light`}>
                {item.description.slice(0, 70)}...
              </p>
            </div>
            <div className="pt-1 pb-3 flex justify-between px-4 p-6">
              <span className="bg-gray-200 rounded-full text-sm p-1 py-1 px-2 font-semibold text-gray-700 ">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </article>
      {newData.length === 0 ? null : (
            <nav
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
            </nav>
          )}
    </>
  );
};

export default TemplatesCategory;