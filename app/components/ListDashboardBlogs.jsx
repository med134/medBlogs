"use client";
import React, { useState, useEffect } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";
const DeleteConfirmation = dynamic(() => import("./DeleteConfirmation"), {
  ssr: false,
});
const BlogSkelton = dynamic(() => import("./BlogSkelton"), {
  ssr: false,
});
const Pagination = dynamic(() => import("./Pagination"), {
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
const ListDashboardBlogs = ({ user }) => {
  const [showModel, setShowModel] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogs, setBlogs] = useState([]);
  const [articleDelete, setArticleDelete] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const perPage = 4;
  useEffect(() => {
    const getBlogs = async (username) => {
      setLoading(true);
      const res = await fetch(
        `https://www.medcode.dev/api/articles?username=${username}`
      );
      if (!res.ok) {
        throw new Error("failed to get data");
      }
      const posts = await res.json();
      setBlogs(posts);
      setLoading(false);
    };
    getBlogs(user);
  }, [user]);

  const closeModelDelete = (slug) => {
    setShowModel(!showModel);
    setArticleDelete(slug);
  };
  const indexOfLastBlog = currentPage * perPage;
  const indexOfFirstBlog = indexOfLastBlog - perPage;
  const currentBlog = blogs?.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs?.length / perPage);
  const handleMovePages = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="container mx-auto p-4 md:p-1">
      <h1 className="text-2xl font-bold mb-4">Your Blogs & Articles</h1>
      {blogs.length > 0 ? (
        <div className={`overflow-y-hidden rounded-lg border`}>
          <table className="">
            <thead className="w-min">
              <tr className="bg-mainColor w-min justify-between text-xs font-semibold uppercase text-white">
                <th className="px-5 py-3">title</th>
                <th className="px-5 py-3 sm:hidden">slug</th>
                <th className="px-5 py-3">status</th>
                <th className="px-5 py-3 md:hidden ">date publish</th>
                <th className="px-5 py-3 ">Delete/Edit</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <BlogSkelton />
              ) : (
                currentBlog?.map((blog) => (
                  <tr
                    key={blog.slug}
                    className="p-2 px-4 py-2 w-full justify-between border border-gray-100"
                  >
                    <td className="p-2">
                      <h2 className="text-sm font-semibold sm:text-xs sm:font-normal">
                        {blog.title}
                      </h2>
                    </td>
                    <td className=" px-5 text-sm sm:hidden">
                      <p className="text-gray-600 px-4">{blog.slug}</p>
                    </td>
                    <td className=" px-5 text-sm">
                      <p className="text-gray-600 px-4">{blog.status}</p>
                    </td>
                    <td className="md:hidden">
                      <p className="text-sm px-5">
                        {FormatDate(blog?.createdAt)}
                      </p>
                    </td>
                    <td className="flex space-x-2 sm:space-x-0 p-2 sm:flex-col justify-center">
                      <button
                        onClick={() =>
                          router.push(`/dashboard/edit-articles/${blog.slug}`)
                        }
                        className="flex justify-around group px-4 py-2 sm:mb-2 items-center hover:bg-blue-400 bg-blue-500 rounded-md text-light"
                      >
                        <span className="text-xs">Edit</span>
                        <BiSolidEdit className="ml-2" />
                      </button>
                      <button
                        onClick={() => closeModelDelete(blog.slug)}
                        className="flex justify-around group px-4 py-2 items-center hover:bg-red-400 bg-red-500 rounded-md text-light"
                      >
                        <span className="text-xs">Delete</span>
                        <RiDeleteBin5Line className="ml-2" />
                      </button>
                      {showModel && (
                        <DeleteConfirmation
                          blogDelete={articleDelete}
                          onClose={closeModelDelete}
                          blogTitle={articleDelete}
                        />
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="py-6 sm:text-center">
          <Link
            href="/dashboard/add-articles"
            className="px-10 py-2 bg-mainColor sm:text-center rounded-md text-light hover:text-white"
          >
            Create Blog
          </Link>
        </div>
      )}
      {blogs?.length > 0 && (
        <Pagination
          totalPages={totalPages}
          handleMovePages={handleMovePages}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};
export default ListDashboardBlogs;
