"use client";
import { RiArticleLine, RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineWork } from "react-icons/md";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { RiSettings5Line } from "react-icons/ri";
import DeleteConfirmation from "./DeleteConfirmation";
import SkeletonLoader from "./BlogDashboardSkelton";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Profile = ({ user }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [phone, setPhone] = useState("");
  const totalBlog = Object.keys(data).length;
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    fetch(`/api/articles?username=${user.name}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  const FormatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };
  const closeModelDelete = () => {
    setShowModel(false);
  };
  return (
    <div className="">
      <div className="container mx-auto py-8">
        <div className=" gap-6 px-4">
          <div className="">
            <div className="bg-white shadow rounded-lg p-6 relative">
              <RiSettings5Line
                onClick={() => router.push(`/dashboard/settings/${user._id}`)}
                className="absolute w-8 h-8 cursor-pointer hover:fill-mainColor"
              />
              <div className="flex flex-col items-center">
                <Image
                  width={500}
                  alt="user image"
                  height={500}
                  src={user?.imageUrl}
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                />
                <h1 className="text-xl font-bold">{user?.name}</h1>
                <div className="flex justify-start items-center">
                  <MdOutlineWork className="w-6 h-6 fill-gray-400" />{" "}
                  <p className="text-gray-700 ml-2">{user?.job}</p>
                </div>
              </div>
              <hr className="my-3 border-t border-gray-300" />
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-gray-400 tracking-wider mb-2">
                    Email Address
                  </span>
                  <p className="text-gray-700">{user.email}</p>
                </div>
                <div>
                  <li className="text-gray-400 tracking-wider mb-2">
                    Home Address
                  </li>
                  <p className="text-gray-700">
                    {user?.homeAddress}
                  </p>
                </div>
                <div>
                  <li className="text-gray-400 tracking-wider mb-2">
                    Phone Number
                  </li>
                  <p className="text-gray-700">{user?.phone}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex rounded-xl bg-white py-2 px-2 text-gray-700 ">
              <div className="my-auto mr-4 p-3 text-blue-500">
                <RiArticleLine className="fill-mainColor w-10 h-10" />
              </div>
              <div className>
                <p className="text-2xl font-bold">{totalBlog}</p>
                <p className="text-sm">Total blog</p>
              </div>
            </div>
            <table className="w-full">
              <thead>
                <tr className="bg-gray-400 text-xs font-semibold uppercase text-white">
                  <th className="px-5 py-3">Title</th>
                  <th className="px-5 py-3">Slug</th>
                  <th className="px-5 py-3">Date Published</th>
                  <th className="px-5 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <SkeletonLoader />
                ) : (
                  data.map((blog) => (
                    <tr
                      key={blog.slug}
                      className="p-2 px-4 py-2 max-w-full justify-between items-center border border-gray-100"
                    >
                      <td className="p-2">
                        <h2 className="text-sm font-normal">
                          {blog.title.slice(0, 10)}..
                        </h2>
                      </td>
                      <td className="bg-white px-5 text-sm">
                        <p className="text-gray-600 px-4">
                          {blog.slug.slice(0, 18)}...
                        </p>
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
                          className="flex justify-around group px-2 py-1 items-center bg-blue-500 rounded-md text-white"
                        >
                          <span className="hover:font-semibold">Edit</span>
                          <BiSolidEdit className="ml-2" />
                        </button>
                        <button
                          onClick={() => setShowModel(true)}
                          className="flex justify-around group px-2 py-1 items-center bg-red-500 rounded-md text-white"
                        >
                          <span className="hover:font-semibold">Delete</span>
                          <RiDeleteBin5Line className="ml-2" />
                        </button>
                      </td>
                      {
                        <DeleteConfirmation
                          showModel={showModel}
                          blogDelete={blog.slug}
                          onClose={closeModelDelete}
                        />
                      }
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
