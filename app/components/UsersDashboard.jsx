"use client";
import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SkeletonLoader from "./DashboardSkelton";
import Form from "next/form";
import { deleteUser } from "../utils/action";

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
          setLoading(false);
        } else {
          throw new Error("Failed to register user");
        }
      } catch (err) {
        setError(err.message);
      }
    }
  };

  return (
    <div className="container mx-auto p-4 py-6 xs:p-2 xs:py-1">
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
              <tr className="bg-mainColor text-xs font-semibold md:text-sm uppercase text-white">
                <th className="px-5 py-3 md:text-sm ms:font-normal">
                  Full Name
                </th>
                <th className="px-5 py-3 sm:hidden">Email</th>
                <th className="px-5 py-3 sm:hidden ">USER ROLE</th>
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
                    className="p-2 px-4 xs:px-2 py-2 max-w-full justify-start items-start border border-gray-100"
                  >
                    <td className="p-2 flex justify-start items-center px-4">
                      <Image
                        src={user.imageUrl}
                        alt="user image"
                        height={200}
                        width={200}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <h2 className="text-sm font-semibold px-4 md:text-xs md:font-normal">
                        {user.name}
                      </h2>
                    </td>
                    <td className=" px-5 text-sm sm:hidden">
                      <p className="text-gray-600 px-4">{user.email}</p>
                    </td>
                    <td className="sm:hidden">
                      <p className="text-sm px-5">
                        {user.name === "MOHAMMED DAKIR" ? (
                          <span>Admin</span> // Changed from <p> to <span>
                        ) : (
                          <span>User</span> // Changed from <p> to <span>
                        )}
                      </p>
                    </td>
                    <td className="flex justify-start items-start space-x-2 p-2">
                      <Form action={deleteUser} className="">
                        <button
                          className={`flex justify-around group px-2 py-1 items-center bg-red-500 rounded-md text-light`}
                        >
                          <input
                            type="text"
                            name="id"
                            value={user.id}
                            hidden
                          />
                          Delete
                          <RiDeleteBin5Line className="ml-2 hover:font-semibold" />
                        </button>
                      </Form>
                    </td>
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
