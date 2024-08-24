"use client";
import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BiSolidEdit } from "react-icons/bi";
import SkeletonLoader from "./DashboardSkelton";

const UsersDashboard = ({ users }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleDelete = async (id) => {
    const confirmed = confirm("Are you sure you want to delete this user...?");
    if (confirmed) {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(`/api/users/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          setSuccess(true); 
          setLoading(false)
        } else {
          throw new Error("Failed to register user");
        }
      } catch (err) {
        setError(err.message);
      }
    }
  };

  return (
    <div className="container mx-auto p-4 py-28">
      <h1 className="text-2xl font-bold mb-4">Admin & Users</h1>
      {success && (
        <span className="text-white bg-green-500 mb-1 px-6 py-2 rounded-md uppercase font-semibold">
          user has ben deleted
        </span>
      )}
      {error && <p className="text-red-500">{error}</p>}
      <div className="overflow-y-hidden rounded-lg border">
        <div className="">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-600 text-xs font-semibold uppercase text-white">
                <th className="px-5 py-3">Full Name</th>
                <th className="px-5 py-3">Email</th>
                <th className="px-5 py-3 ">USER ROLE</th>
                <th className="px-5 py-3 ">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="4">
                    <SkeletonLoader />
                  </td>
                </tr>
              ) : (
                users?.map((user) => (
                  <tr
                    key={user._id}
                    className="p-2 px-4 py-2 max-w-full justify-start items-start border border-gray-100"
                  >
                    <td className="p-2 flex justify-start items-center px-4">
                      <Image
                        src={user.imageUrl}
                        alt="user image"
                        height={200}
                        width={200}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <h2 className="text-sm font-semibold px-4">
                        {user.name}
                      </h2>
                    </td>
                    <td className=" bg-white px-5 text-sm">
                      <p className="text-gray-600 px-4">{user.email}</p>
                    </td>
                    <td>
                      <p className="text-sm px-5">
                        {user.name === "MOHAMMED DAKIR" ? (
                          <span>Admin</span> // Changed from <p> to <span>
                        ) : (
                          <span>User</span> // Changed from <p> to <span>
                        )}
                      </p>
                    </td>
                    {user.userSlug != "mohammed-dakir" ? (
                      <td className="flex justify-start items-start space-x-2 p-2">
                        <button
                          onClick={() => handleDelete(user.userSlug)}
                          disabled={loading}
                          className={`flex justify-around group px-2 py-1 items-center bg-red-500 rounded-md text-light`}
                        >
                          Delete
                          <RiDeleteBin5Line className="ml-2 hover:font-semibold" />
                        </button>

                        <button
                          onClick={() =>
                            router.push(`/dashboard/profile/${user.name}`)
                          }
                          className="flex justify-around group px-2 py-1 items-center bg-blue-500 rounded-md text-white"
                        >
                          <span className="hover:font-semibold">Edit</span>
                          <BiSolidEdit className="ml-2" />
                        </button>
                      </td>
                    ) : null}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default UsersDashboard;
