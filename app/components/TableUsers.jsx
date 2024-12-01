import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FormatDate } from "../utils/action";

const TableUsers = ({ data }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
            <th className="px-4 py-3 sm:text-sm">Full Name</th>
            <th className="px-4 py-3 sm:text-sm">Location</th>
            <th className="px-4 py-3 sm:text-sm">Role</th>
            <th className="px-4 py-3 sm:text-sm">Join Date</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {data?.map((user) => (
            <tr key={user._id} className="text-gray-700">
              <td className="px-4 py-3 border">
                <div className="flex items-center text-sm">
                  <Link
                    href={`/dashboard/users/${user._id}`}
                    className="relative w-8 h-8 mr-3 rounded-full md:block"
                  >
                    <Image
                      className="object-cover w-full h-full rounded-full"
                      src={user.imageUrl}
                      alt="user image"
                      loading="lazy"
                      width={200}
                      height={200}
                    />
                    <div
                      className="absolute inset-0 rounded-full shadow-inner"
                      aria-hidden="true"
                    />
                  </Link>
                  <div>
                    <p className="font-semibold text-dark">{user.name}</p>
                    <p className="text-xs text-gray-600">{user?.job}</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3 text-ms font-semibold border">
                {user?.homeAddress || "unknown"}
              </td>
              <td className="px-4 py-3 text-xs border">
                <span
                  className={`${
                    user.isAdmin
                      ? "text-red-600 bg-red-100 px-4 py-1 font-semibold"
                      : "px-4 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"
                  }`}
                >
                  {" "}
                  {user?.isAdmin ? "ADMIN" : "USER"}{" "}
                </span>
              </td>
              <td className="px-4 py-3 text-sm border">
                {FormatDate(user.createdAt)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableUsers;
