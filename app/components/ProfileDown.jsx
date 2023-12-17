"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { signOut } from "next-auth/react";

const ProfileDown = () => {
  const session = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const MyLoader = ({ src }) => {
    const session = useSession();
    return `${session?.data?.user.image}`;
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
          onClick={toggleDropdown}
        >
          <Image
            loader={MyLoader}
            width={6}
            height={6}
            src={session?.data?.user.image}
            alt="photo_profile"
            className="w-10 h-10 rounded-[50%] cursor-pointer"
          />
        </button>
      </div>
      {isDropdownOpen && (
        <div className="origin-top-right absolute right-2 mt-2 rounded-md shadow-lg">
          <div className="py-1 bg-white rounded-md shadow-xs">
            <button
              onClick={signOut}
              className="block px-6 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDown;
