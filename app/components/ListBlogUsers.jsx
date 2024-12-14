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
const ListBlogUsers = ({ posts, totalPage, page, session }) => {
  const [isOpen, setOpen] = useState(false);
  const [blogIdDeleted, setBlogIdDeleted] = useState();
  const handelOpen = () => {
    setOpen(!isOpen);
  };
  const handelMoveToDelete = (id) => {
    handelOpen();
    setBlogIdDeleted(id);
  };
  console.log(totalPage);
  return (
    <>
      {" "}
      <div className="w-full overflow-x-auto">
        {posts.length > 0 ? (
          <>
            {" "}
            <h1 className="text-2xl font-bold mb-10 sm:mb-6">
              Your Blogs & Articles
            </h1>
            <table className="w-full">
              <thead>
                <tr className="font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-gray-600">
                  <th className="px-4 py-3 md:text-sm">title</th>
                  <th className="px-4 py-3 md:text-sm sm:hidden">writer</th>
                  <th className="px-4 py-3 md:text-sm">status</th>
                  <th className="px-4 py-3 md:text-sm sm:hidden">
                    Date publish
                  </th>
                  <th className="px-4 py-3 md:text-sm">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {posts?.map((post) => (
                  <tr key={post._id} className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <p className="font-semibold text-dark md:text-sm">
                        {post.title.slice(0, 40)}..
                      </p>
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold border sm:hidden">
                      {post.username}
                    </td>
                    <td className="px-4 py-3 text-xs border">
                      <span
                        className={`${
                          post.status === "draft"
                            ? "text-red-600 bg-red-100 px-4 py-1 font-semibold"
                            : "px-4 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"
                        }`}
                      >
                        {" "}
                        {post?.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm border sm:hidden">
                      {FormatDate(post?.createdAt)}
                    </td>
                    <td className="flex py-5 md:py-2 text-sm border font-semibold justify-evenly md:flex md:flex-col md:justify-center md:items-center">
                      <Link
                        href={`/dashboard/blogs/edit-articles/${post.slug}`}
                        className="px-3 py-2 xs:px-2 md:mb-2 hover:text-blue-500 bg-gray-100 rounded-md text-dark"
                      >
                        <BiSolidEdit className="ml-2 w-5 h-5" />
                      </Link>
                      <button
                        onClick={() => handelMoveToDelete(post._id)}
                        className="px-3 py-2 bg-gray-100 xs:px-2 hover:text-red-500 sm:mb-2 rounded-md text-dark"
                      >
                        <RiDeleteBin5Line className="ml-1 w-5 h-5" />
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
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <div
            className={`${
              !session ? "hidden" : "flex flex-col justify-center items-center"
            }`}
          >
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
      {posts?.length > 0 && totalPage > 1 && (
        <ServerPagination totalPage={totalPage} currentPage={page} />
      )}
    </>
  );
};

export default ListBlogUsers;
