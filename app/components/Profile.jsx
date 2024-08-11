"use client";
import { MdOutlineWork } from "react-icons/md";
import Image from "next/image";
import React from "react";
import { RiSettings5Line } from "react-icons/ri";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Profile = ({ user }) => {
  const router = useRouter();

  return (
    <div className="">
      <div className="container mx-auto py-8">
        <div className=" gap-6 px-4">
          <div className="">
            <div className="bg-white shadow rounded-lg p-6 relative">
              <RiSettings5Line
                onClick={() =>
                  router.push(`/dashboard/settings/${user?.userSlug}`)
                }
                className="absolute w-8 h-8 cursor-pointer hover:fill-mainColor"
              />
              <h3 className="ml-10 font-semibold">complete profile</h3>
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
                  <span className="text-gray-400">Email Address</span>
                  <p className="text-gray-700">{user?.email}</p>
                </div>
                <div>
                  <span className="text-gray-400">Home Address</span>
                  <p className="text-gray-700">
                    {user.homeAddress != "" ? user.homeAddress : "..."}
                  </p>
                </div>
                <div>
                  <span className="text-gray-400">Phone Number</span>
                  <p className="text-gray-700">
                    {user.phone != "" ? user.phone : "..."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;