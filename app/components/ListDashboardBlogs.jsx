"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";
import SkeletonLoader from "./BlogDashboardSkelton";
import dynamic from "next/dynamic";
const DeleteConfirmation = dynamic(() => import("./DeleteConfirmation"), {
  ssr: false,
});

const ListDashboardBlogs = ({posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModel, setShowModel] = useState(false);
  const [data, setData] = useState(posts);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const perPage = 4;

  const handleMovePages = (page) => {
    setCurrentPage(page);
  };
  const closeModelDelete = () => {
    setShowModel(!showModel);
  };

  const indexOfLastBlog = currentPage * perPage;
  const indexOfFirstBlog = indexOfLastBlog - perPage;
  const currentBlog = data.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(data.length / perPage);

  const FormatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Blog List</h1>
      <div className="overflow-y-hidden rounded-lg border">
        <div className="">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-600 text-xs font-semibold uppercase text-white">
                <th className="px-5 py-3">Title</th>
                <th className="px-5 py-3">Slug</th>
                <th className="px-5 py-3">Date Published</th>
                <th className="px-5 py-3">status</th>
                <th className="px-5 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="4">
                    <SkeletonLoader />
                  </td>
                </tr>
              ) : (
                currentBlog.map((blog) => (
                  <tr
                    key={blog.slug}
                    className="p-2 px-4 py-2 max-w-full justify-between items-center border border-gray-100"
                  >
                    <td className="p-2">
                      <h2 className="text-sm font-semibold">{blog.title}</h2>
                    </td>
                    <td className="bg-white px-5 text-sm">
                      <p className="text-gray-600 px-4">{blog.slug}</p>
                    </td>
                    <td>
                      <p className="text-sm px-5">
                        {FormatDate(blog.createdAt)}
                      </p>
                    </td>
                    <td>
                      <p className="text-sm px-5">
                        {blog.status}
                      </p>
                    </td>
                    <td className="flex space-x-2 p-2">
                      <button
                        onClick={() =>
                          router.push(`/dashboard/edit-articles/${blog.slug}`)
                        }
                        className="flex justify-around group px-2 py-1 items-center bg-blue-500 rounded-md text-white"
                      >
                        <span className="hover:font-semibold">Edit</span>
                        <BiSolidEdit className="ml-2" />
                      </button>
                      <button
                        onClick={closeModelDelete}
                        className="flex justify-around group px-2 py-1 items-center bg-red-500 rounded-md text-white"
                      >
                        <span className="hover:font-semibold">Delete</span>
                        <RiDeleteBin5Line className="ml-2" />
                      </button>
                    </td>
                    {showModel && (
                      <DeleteConfirmation
                        showModel={showModel}
                        blogDelete={blog.slug}
                        onClose={closeModelDelete}
                        blogTitle={blog.title}
                      />
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
          {data.length === 0 ? null : (
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
        </div>
      </div>
    </div>
  );
};

export default ListDashboardBlogs;
