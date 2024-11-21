import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import Image from "next/image";
import Form from "next/form";
import { deleteUser } from "../utils/action";
import Link from "next/link";

const UsersDashboard = ({ users, isAdmin }) => {
  return (
    <div className="container mx-auto p-4 py-6 xs:p-2 xs:py-1">
      <h1 className="text-2xl font-bold mb-4">Admin & Users</h1>
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
                <th className={`${!isAdmin ? "hidden" : "px-5 py-3 "}`}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => (
                <tr
                  key={user._id}
                  className="p-2 px-4 xs:px-2 py-2 max-w-full justify-start items-start border border-gray-100"
                >
                  <td className="p-2 flex justify-start items-center px-4">
                    <Image
                      src={
                        user.imageUrl ||
                        "https://res.cloudinary.com/djcnq7nmj/image/upload/v1730411682/profile_qjehzj.png"
                      }
                      alt="user image"
                      height={200}
                      width={200}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <Link
                      href={`/dashboard/users/${user._id}`}
                      className="text-sm uppercase font-semibold px-4 md:text-xs md:font-normal hover:text-mainColor"
                    >
                      {user.name}
                    </Link>
                  </td>
                  <td className=" px-5 text-sm sm:hidden">
                    <p className="text-gray-600 px-4">{user.email}</p>
                  </td>
                  <td className="sm:hidden">
                    <p className="text-sm px-5">
                      {user.isAdmin ? <span>Admin</span> : <span>User</span>}
                    </p>
                  </td>
                  {isAdmin && (
                    <td className="flex justify-start items-start space-x-2 p-2">
                      <Form action={deleteUser} className="">
                        <input
                          type=""
                          hidden
                          name="id"
                          id="id"
                          value={user._id}
                          readOnly
                        />
                        <button
                          type="submit"
                          className={`flex justify-around group px-2 py-1 items-center bg-red-500 rounded-md text-light`}
                        >
                          Delete
                          <RiDeleteBin5Line className="ml-2 hover:font-semibold" />
                        </button>
                      </Form>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default UsersDashboard;
