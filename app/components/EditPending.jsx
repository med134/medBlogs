"use client";
import React, { useState, useEffect } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const EditPending = () => {
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const session = useSession();
  useEffect(() => {
    if (
      session?.data?.user?.name === "MOHAMMED DAKIR" &&
      session.status === "authenticated"
    ) {
      fetch("http://localhost:3000/api/articles")
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            setPosts(data.filter((item) => item.status === "draft"));
          }
        });
    } else {
      router.push("/dashboard/login");
    }
  }, [session, router]);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Pending Blogs</h1>
      {session?.data?.user?.name === "MOHAMMED DAKIR" ? (
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
                {posts.length > 0 ? (
                  posts?.map((blog) => (
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
                          <span className="hover:font-semibold">
                            Edit Status
                          </span>
                          <BiSolidEdit className="ml-2 hover:font-semibold" />
                        </button>
                        <button
                          onClick={() => handleDelete(blog.slug)}
                          className="flex justify-around group px-2 py-1 items-center bg-red-500 rounded-md text-light"
                        >
                          <span className="hover:font-semibold">Delete</span>
                          <RiDeleteBin5Line className="ml-2 hover:font-semibold" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <div className="p-6 items-center">
                    <h2 className="text-xl font-semibold">
                      Pending Blogs is Empty...
                    </h2>
                  </div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div
          className="bg-blue-50 text-blue-800 p-6 rounded-lg relative"
          role="alert"
        >
          <div className="mb-3 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[18px] cursor-pointer fill-blue-500 inline mr-3 shrink-0"
              viewBox="0 0 23.625 23.625"
            >
              <path
                d="M11.812 0C5.289 0 0 5.289 0 11.812s5.289 11.813 11.812 11.813 11.813-5.29 11.813-11.813S18.335 0 11.812 0zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539s-.611-.814-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193z"
                data-original="#030104"
              />
            </svg>
            <strong className="font-bold text-sm mr-3">
              You Are Not Admin!
            </strong>
          </div>
        </div>
      )}
    </div>
  );
};
export default EditPending;
