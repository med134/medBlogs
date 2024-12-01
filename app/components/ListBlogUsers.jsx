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
const ListBlogUsers = ({ posts, totalPage, page }) => {
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
    <>
      {" "}
      <div className="w-full overflow-x-auto">
        <h1 className="text-2xl font-bold mb-10 sm:mb-6">
          Your Blogs & Articles
        </h1>
        <table className="w-full">
          <thead>
            <tr className="font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
              <th className="px-4 py-3 sm:text-sm">title</th>
              <th className="px-4 py-3 sm:text-sm">writer</th>
              <th className="px-4 py-3 sm:text-sm">status</th>
              <th className="px-4 py-3 sm:text-sm">Date publish</th>
              <th className="px-4 py-3 sm:text-sm">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {posts?.map((post) => (
              <tr key={post._id} className="text-gray-700">
                <td className="px-4 py-3 border">
                  <p className="font-semibold text-dark">
                    {post.title.slice(0, 40)}..
                  </p>
                </td>
                <td className="px-4 py-3 text-sm font-semibold border">
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
                <td className="px-4 py-3 text-sm border">
                  {FormatDate(post?.createdAt)}
                </td>
                <td className="flex py-3 text-ms font-semibold border justify-evenly">
                  <Link
                    href={`/dashboard/blogs/edit-articles/${post.slug}`}
                    className="px-3 py-2 xs:px-2 sm:mb-2 hover:text-blue-500 items-center bg-gray-100 rounded-md text-dark"
                  >
                    <BiSolidEdit className="ml-2 w-5 h-5" />
                  </Link>
                  <button
                    onClick={() => handelMoveToDelete(post._id)}
                    className="px-3 py-2 bg-gray-100 xs:px-2 hover:text-red-500 sm:mb-2 items-center rounded-md text-dark"
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
      </div>
      {posts?.length > 0 && totalPage > 1 && (
        <ServerPagination totalPage={totalPage} currentPage={page} />
      )}
    </>
  );
};

export default ListBlogUsers;
