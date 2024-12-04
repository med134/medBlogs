import Link from "next/link";
import React from "react";

const ServerPagination = ({ totalPages, currentPage }) => {
  return (
    <div
      aria-label="Page navigation"
      className="flex justify-center flex-wrap mt-16"
    >
      <Link
        href={`/dashboard/blogs=${currentPage - 1}`}
        className={`${
          currentPage === 1
            ? "hidden"
            : " flex items-center justify-center dark:bg-dark dark:text-light px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
        } 
        `}
      >
        Previous
      </Link>
      {Array.from({ length: totalPages }, (_, index) => (
        <div key={index}>
          <Link
            href={`/dashboard/blogs/?page=${index + 1}`}
            className={`flex items-center justify-center px-3 h-8 leading-tight border ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-500 border-gray-300 dark:bg-dark dark:text-light hover:bg-gray-100 hover:text-gray-700"
            }`}
          >
            {index + 1}
          </Link>
        </div>
      ))}
      <Link
        href={`/dashboard/blogs/?page=${currentPage + 1}`}
        disabled={currentPage === totalPages ? true : false}
        className={`${
          currentPage === totalPages
            ? "hidden"
            : " flex items-center justify-center dark:bg-dark dark:text-light px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
        }
           
        `}
      >
        Next
      </Link>
    </div>
  );
};

export default ServerPagination;
