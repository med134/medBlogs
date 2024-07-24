"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { PiUsersThree } from "react-icons/pi";
import { RiArticleLine, RiSettings5Line } from "react-icons/ri";
import { LuLogOut } from "react-icons/lu";
import { MdPendingActions } from "react-icons/md";
import { CgFileAdd } from "react-icons/cg";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

const SideBar = () => {
  const session = useSession();
  return (
    <div className="h-[100%] mb-6">
      <div className="h-screen w-64 pb-10 mt-32">
        <div className="flex px-4 h-full flex-grow flex-col rounded-br-lg rounded-tr-lg bg-gray-200 pt-5 ">
          <div className="flex mt-10 items-center px-4">
            <Image
              width={50}
              height={50}
              priority
              src={
                session.status === "authentication"
                  ? session?.data?.user.image
                  : "https://i.ibb.co/mSjZwpw/download.png"
              }
              alt="photo_profile"
              className="w-10 h-10 rounded-[50%] cursor-pointer"
            />
            <div className="flex ml-3 flex-col">
              <h3 className="font-medium text-xs">
                {session?.data?.user.name}
              </h3>
              <p className="text-xs text-gray-500">Sr. Engineer</p>
            </div>
          </div>
          {/* list */}
          <ul className="flex flex-col py-4">
            <li>
              <Link
                href="/dashboard"
                className="flex flex-row px-6 items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <RxDashboard />
                <span className="text-sm font-medium ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/users"
                className="flex flex-row items-center px-5 h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <PiUsersThree />
                <span className="text-sm font-medium ml-3">Users</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/blogs"
                className="flex flex-row items-center px-5 h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <RiArticleLine />
                <span className="text-sm font-medium ml-3">Blogs</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/add-articles"
                className="flex flex-row items-center px-5 h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <CgFileAdd />
                <span className="text-sm font-medium ml-3">Add Blog</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/pending"
                className="flex flex-row items-center px-5 h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <MdPendingActions />
                <span className="text-sm font-medium ml-3">Pending</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/edit-articles"
                className="flex flex-row items-center px-5 h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <RiSettings5Line />
                <span className="text-sm font-medium ml-3">Settings</span>
              </Link>
            </li>

            <li>
              <button
                onClick={() => signOut()}
                className="flex flex-row px-5 items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <LuLogOut />
                <span className="text-sm font-medium ml-3">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
