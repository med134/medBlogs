"use client";
import React, { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
const DeleteConfirmation = dynamic(() => import("./DeleteConfirmation"), {
  ssr: false,
});
const FormatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(dateString).toLocaleDateString(
    "en-US",
    options
  );
  return formattedDate;
};

const EditPending = ({ draftBlog }) => {
  const router = useRouter();
  const [showModel, setShowModel] = useState(false);

  const closeModelDelete = (slug) => {
    setShowModel(!showModel);
  };
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Draft Blogs</h1>
      <div className="overflow-y-hidden rounded-lg border">
        <div className="">
          <table className="w-full">
            <thead>
              <tr className="bg-mainColor text-xs font-semibold uppercase text-white">
                <th className="px-5 py-3">title</th>
                <th className="px-5 py-3">slug</th>
                <th className="px-5 py-3 ">date publish</th>
                <th className="px-5 py-3 ">Delete/Edit</th>
              </tr>
            </thead>
            <tbody>
              {draftBlog.length > 0 ? (
                draftBlog?.map((blog) => (
                  <tr
                    key={blog.slug}
                    className="p-2 px-4 py-2 max-w-full justify-between items-center border border-gray-100"
                  >
                    <td className="p-2">
                      <h2 className="text-sm font-semibold">{blog.title}</h2>
                    </td>
                    <td className=" bg-white px-5 text-sm">
                      <p className="text-gray-600 px-4">{blog.slug}</p>
                    </td>
                    <td>
                      <p className="text-sm px-5">
                        {FormatDate(blog.createdAt)}
                      </p>
                    </td>

                    <td className="flex space-x-2 p-2">
                      <button
                        onClick={() =>
                          router.push(`/dashboard/edit-articles/${blog.slug}`)
                        }
                        className="flex justify-around group hover:bg-blue-400 px-2 py-1 items-center bg-blue-500 rounded-md text-light"
                      >
                        <span className="">Edit Status</span>
                        <BiSolidEdit className="ml-2" />
                      </button>
                      <button
                        onClick={closeModelDelete}
                        className="flex justify-around group px-2 py-1 items-center bg-red-500 hover:bg-red-400 rounded-md text-light"
                      >
                        <span className="">Delete</span>
                        <RiDeleteBin5Line className="ml-2" />
                      </button>
                    </td>

                    {showModel && (
                      <DeleteConfirmation
                        blogDelete={blog.slug}
                        onClose={closeModelDelete}
                        blogTitle={blog.title}
                      />
                    )}
                  </tr>
                ))
              ) : (
                <tr className="p-6 items-center">
                  <td className="text-xl font-semibold p-12">
                    <h2>No Draft blogs yet... </h2>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default EditPending;
