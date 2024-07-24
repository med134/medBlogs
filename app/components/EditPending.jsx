"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useRouter } from "next/navigation";

const EditPending = () => {
  const [posts, setPosts] = useState([]);
  const router =useRouter();
  useEffect(() => {
    fetch("https://www.medcode.dev/api/articles")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.filter((item) => item.status === "draft"));
      });
  }, []);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Pending Blogs</h1>
      <div className="overflow-y-hidden rounded-lg border">
        <div className="">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-600 text-xs font-semibold uppercase text-white">
                <th className="px-5 py-3">title</th>
                <th className="px-5 py-3">slug</th>
                <th className="px-5 py-3 ">date publish</th>
                <th className="px-5 py-3 ">Delete/Edit</th>
              </tr>
            </thead>
            <tbody>
              {posts?.map((blog) => (
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
                    <p className="text-sm px-5">June 5, 2024</p>
                  </td>
                  <td className="flex space-x-2 p-2">
                    <button
                       onClick={() =>
                        router.push(`/dashboard/edit-articles/${blog.slug}`)
                      }
                      className="flex justify-around group px-2 py-1 items-center bg-blue-500 rounded-md text-light"
                    >
                      <span className="hover:font-semibold">Edit Status</span>
                      <BiSolidEdit className="ml-2 hover:font-semibold" />
                    </button>
                    <button
                      onClick={()=>handleDelete(blog.slug)}
                      className="flex justify-around group px-2 py-1 items-center bg-red-500 rounded-md text-light"
                    >
                      <span className="hover:font-semibold">Delete</span>
                      <RiDeleteBin5Line className="ml-2 hover:font-semibold" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default EditPending;
