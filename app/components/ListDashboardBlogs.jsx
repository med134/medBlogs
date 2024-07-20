"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import useSWR from "swr";

const ListDashboardBlogs = () => {
  const session = useSession();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const {
    data: articles,
    isLoading,
    mutate,
  } = useSWR(`/api/articles?username=${session?.data?.user?.name}`, fetcher);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blog List</h1>
      <ul className="">
        {articles?.map((blog) => (
          <li
            key={blog.slug}
            className="bg-white shadow-md rounded-lg p-4 mb-4 flex justify-between items-center"
          >
            <div className="flex justify-center items-center">
              <h2 className="text-sm font-semibold">
                {blog.title.slice(0, 60)}...
              </h2>
              <p className="text-gray-600 px-4">{blog.slug}</p>
            </div>
            <div className="flex space-x-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Edit
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListDashboardBlogs;
