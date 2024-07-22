"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { signOut } from "next-auth/react";

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
            src={session?.data?.user.image}
            alt="photo_profile"
            className="w-10 h-10 rounded-[50%] cursor-pointer"
          />
            <div className="flex ml-3 flex-col">
              <h3 className="font-medium text-xs">{session?.data?.user.name}</h3>
              <p className="text-xs text-gray-500">Sr. Engineer</p>
            </div>
          </div>
          {/* list */}
          <ul className="flex flex-col py-4">
          <li>
              <Link
                href="/dashboard"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-home" />
                </span>
                <span className="text-sm font-medium">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/users"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-home" />
                </span>
                <span className="text-sm font-medium">Users</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/blogs"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-music" />
                </span>
                <span className="text-sm font-medium">Blogs</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/add-articles"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-drink" />
                </span>
                <span className="text-sm font-medium">Add Blog</span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-shopping-bag" />
                </span>
                <span className="text-sm font-medium">Pending</span>
              </a>
            </li>
            <li>
              <Link
                href="/dashboard/edit-articles"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-chat" />
                </span>
                <span className="text-sm font-medium">Settings</span>
              </Link>
            </li>

            <li>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-log-out" />
                </span>
                <span className="text-sm font-medium">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
