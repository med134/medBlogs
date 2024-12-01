"use client";
import React, { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import Link from "next/link";
import ServerPagination from "./ServerPagination";
import DeleteConfirmation from "./DeleteConfirmation";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CgFileAdd } from "react-icons/cg";

const FormatDate = (dateString) => {
  const options = { month: "long", day: "numeric" };
  const formattedDate = new Date(dateString).toLocaleDateString(
    "en-US",
    options
  );
  return formattedDate;
};

const ListDashboardBlogs = ({ posts, totalPage, page }) => {
  const [isOpen, setOpen] = useState(false);
  const [blogIdDeleted, setBlogIdDeleted] = useState();
  const handelOpen = () => {
    setOpen(!isOpen);
  };
  const handelMoveToDelete = (id) => {
    handelOpen();
    setBlogIdDeleted(id);
  };

  return (
    <div className="p-4 md:p-1 ">
      {posts.length > 0 ? (
        <>
          <h1 className="text-2xl font-bold mb-10 sm:mb-6">
            Your Blogs & Articles
          </h1>
          <table className={`overflow-y-hidden rounded-lg border w-full`}>
            <thead className="w-full">
              <tr
                className={
                  "bg-mainColor w-min justify-between text-xs font-semibold uppercase text-white"
                }
              >
                <th className="px-5 py-3">title</th>
                <th className="px-5 py-3 sm:hidden">Author</th>
                <th className="px-5 py-3">status</th>
                <th className="px-5 py-3 md:hidden ">date publish</th>
                <th className="px-5 py-3 ">Action</th>
              </tr>
            </thead>
            {posts?.map((blog) => (
              <tbody key={blog.slug} className="w-full">
                <tr className="p-2 px-4 py-5 w-full justify-between border border-gray-300 bg-gray-100">
                  <td className="p-2">
                    <h2 className="text-sm font-semibold sm:text-xs sm:font-normal">
                      {blog.title}
                    </h2>
                  </td>
                  <td className="px-5 text-xs sm:hidden uppercase">
                    <p className="px-4">{blog?.username}</p>
                  </td>
                  <td className=" px-5 text-sm">
                    <p className="px-4">{blog.status}</p>
                  </td>
                  <td className="md:hidden">
                    <p className="text-sm px-6">
                      {FormatDate(blog?.createdAt)}
                    </p>
                  </td>
                  <td className="flex space-x-2 sm:space-x-0 p-2 sm:flex-col justify-center">
                    <Link
                      href={`/dashboard/blogs/edit-articles/${blog.slug}`}
                      className="flex justify-around group px-4 py-2 xs:px-2 sm:mb-2 items-center hover:bg-blue-400 bg-blue-500 rounded-md text-light"
                    >
                      <span className="text-xs xs:hidden">Edit</span>
                      <BiSolidEdit className="ml-2" />
                    </Link>
                    <button
                      onClick={() => handelMoveToDelete(blog._id)}
                      className="flex justify-around group px-4 py-2 xs:px-2 sm:mb-2 items-center hover:bg-red-400 bg-red-500 rounded-md text-light"
                    >
                      <span>delete</span>
                      <RiDeleteBin5Line className="ml-1" />
                    </button>
                  </td>
                  {isOpen && (
                    <td>
                      <DeleteConfirmation
                        blogId={blogIdDeleted}
                        handelOpen={handelOpen}
                      />
                    </td>
                  )}
                </tr>
              </tbody>
            ))}
          </table>
          {posts?.length > 4 && (
            <ServerPagination totalPages={totalPage} currentPage={page} />
          )}
        </>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <span className="text-3xl font-semibold py-6 text-mainColor">
            Not blogs yet
          </span>
          <Link
            href="/dashboard/add-articles"
            className=" px-32 sm:px-10 rounded-md text-dark bg-gray-200 py-2 flex justify-center items-center"
          >
            <CgFileAdd className="w-6 h-6" />
            <span className="ml-4 font-semibold">Create Blog</span>
          </Link>
        </div>
      )}
    </div>
  );
};
export default ListDashboardBlogs;
