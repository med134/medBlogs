"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { BiSolidEdit } from "react-icons/bi";

const ListDashboardBlogs = () => {
  const session = useSession();
  const router = useRouter();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const {
    data: articles,
    isLoading,
    mutate,
  } = useSWR(`/api/articles?username=${session?.data?.user?.name}`, fetcher);
  /* handel delete blog */
  const handleDelete = async (id) => {
    const confirmed = confirm("Are you sure you want to delete...?");
    if (confirmed) {
      try {
        await fetch(`/api/articles/${id}`, {
          method: "DELETE",
        });
        mutate();
      } catch (err) {
        console.log(err);
      }
    }
  };
  /* handel edit blog */

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blog List</h1>
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
              {articles?.map((blog) => (
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
                      <span className="hover:font-semibold">Edit</span>
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

export default ListDashboardBlogs;
