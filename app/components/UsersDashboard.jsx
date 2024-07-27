"use client";
import React, { useState, useEffect } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SkeletonLoader from "./DashboardSkelton";

const UsersDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);
  const handleDelete = async (id) => {
    const confirmed = confirm("Are you sure you want to delete this user...?");
    if (confirmed) {
      try {
        await fetch(`/api/users/${id}`, {
          method: "DELETE",
        });
        mutate();
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="container mx-auto p-4 py-28">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="overflow-y-hidden rounded-lg border">
        <div className="">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-600 text-xs font-semibold uppercase text-white">
                <th className="px-5 py-3">Full Name</th>
                <th className="px-5 py-3">Email</th>
                <th className="px-5 py-3 ">USER ROLE</th>
                <th className="px-5 py-3 ">Delete/Edit</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <SkeletonLoader />
              ) : (
                users?.map((user) => (
                  <tr
                    key={user._id}
                    className="p-2 px-4 py-2 max-w-full justify-between items-center border border-gray-100"
                  >
                    <td className="p-2 flex justify-center items-center">
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
                          <p>Administrator</p>
                        ) : (
                          <p>user</p>
                        )}
                      </p>
                    </td>
                    <td className="flex space-x-2 p-2">
                      {user.name != "MOHAMMED DAKIR" && (
                        <button
                          onClick={() => handleDelete(user._id)}
                          className="flex justify-around group px-2 py-1 items-center bg-red-500 rounded-md text-light"
                        >
                          <span className="hover:font-semibold">Delete</span>
                          <RiDeleteBin5Line className="ml-2 hover:font-semibold" />
                        </button>
                      )}
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
