import { MdOutlineWork } from "react-icons/md";
import Image from "next/image";
import React from "react";
import { FormatDate } from "../utils/action";
import Link from "next/link";
import { IoSettingsOutline } from "react-icons/io5";

const Profile = ({ userData, dataSession }) => {
  return (
    <div className="">
      <div className="container mx-auto py-8 sm:py-4">
        <div className="gap-6 px-4">
          <div className="">
            <div className="bg-white shadow rounded-lg p-6 relative sm:p-3">
              {userData?.name === dataSession?.user?.name && (
                <Link
                  href={`/dashboard/settings/${userData?.userSlug}`}
                  className="mb-4 flex justify-start items-start"
                >
                  <IoSettingsOutline className="fill-dark h-6 w-6" />
                  <h3 className="ml-2 font-semibold xs:text-sm">complete profile</h3>
                </Link>
              )}
              <div className="flex flex-col items-center">
                <Image
                  width={150}
                  alt="user image"
                  height={150}
                  loading="lazy"
                  quality={50}
                  src={userData?.imageUrl}
                  className="w-32 h-32 object-cover bg-gray-300 rounded-full mb-4 shrink-0"
                />
                <h1 className="text-xl font-bold">{userData?.name}</h1>
                <div className="flex justify-start items-center">
                  <MdOutlineWork className="w-6 h-6 fill-gray-400" />{" "}
                  <p className="text-gray-700 ml-2">{userData?.job}</p>
                </div>
                <p>
                  Status :{" "}
                  {userData?.name === "MOHAMMED DAKIR" ? "Admin" : "User"}
                </p>
                <p>Date Created : {FormatDate(userData?.createdAt)}</p>
              </div>
              <hr className="my-3 border-t border-gray-300" />
              <div className="flex justify-between items-center md:flex md:flex-col sm:justify-start">
                <div>
                  <span className="text-gray-400">Email Address</span>
                  <p className="text-gray-700">{userData?.email}</p>
                </div>
                <div>
                  <span className="text-gray-400">Home Address</span>
                  <p className="text-gray-700">
                    {userData?.homeAddress != ""
                      ? userData?.homeAddress
                      : "..."}
                  </p>
                </div>
                <div>
                  <span className="text-gray-400">Phone Number</span>
                  <p className="text-gray-700">
                    {userData?.phone != "" ? userData?.phone : "..."}
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
