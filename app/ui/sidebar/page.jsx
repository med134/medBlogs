import React from "react";
import Image from "next/image";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="h-[100%] mb-6">
      <div className="h-screen w-64 pb-10 mt-32">
        <div className="flex px-4 h-full flex-grow flex-col rounded-br-lg rounded-tr-lg bg-gray-200 pt-5 ">
          <div className="flex mt-10 items-center px-4">
            <Image
              className="h-12 w-auto max-w-full rounded-full align-middle"
              width={"100"}
              height={"100"}
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="flex ml-3 flex-col">
              <h3 className="font-medium">Sarah Carter</h3>
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
