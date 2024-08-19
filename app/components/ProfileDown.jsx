"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { handelLogOut } from "../utils/action";

const ProfileDown = ({ session }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  return (
    <div className="relative inline-block z-50">
      <div className="z-50">
        <button
          type="button"
          className="flex text-sm border-2 border-transparent z-50 rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
          onClick={toggleDropdown}
        >
          <Image
            width={50}
            height={50}
            priority
            src={session?.user?.image}
            alt="photo_profile"
            className="w-10 h-10 rounded-[50%] cursor-pointer"
          />
        </button>
      </div>
      {isDropdownOpen && (
        <div className="origin-top-right absolute right-2 mt-2 rounded-md shadow-lg z-50">
          <div className="py-1 bg-white rounded-md shadow-xs">
            <form action={handelLogOut}>
              <button className="block px-6 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                Logout
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDown;
