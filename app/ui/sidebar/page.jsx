"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { PiUsersThree } from "react-icons/pi";
import { RiArticleLine, RiSettings5Line } from "react-icons/ri";
import { LuLogOut } from "react-icons/lu";
import { MdPendingActions } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { CgFileAdd } from "react-icons/cg";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const session = useSession();
  const path = usePathname();
  console.log(path, "pathName");
  const menuItems = [
    { name: "Dashboard", link: "/dashboard", icon: RxDashboard },
    { name: "Users", link: "/dashboard/users", icon: PiUsersThree },
    { name: "Blogs", link: "/dashboard/blogs", icon: RiArticleLine },
    { name: "Add Blog", link: "/dashboard/add-articles", icon: CgFileAdd },
    { name: "Draft blog", link: "/dashboard/pending", icon: MdPendingActions },
    { name: "Settings", link: "/dashboard/settings", icon: RiSettings5Line },
  ];

  return (
    <div className="h-[100%] mb-6">
      <div className="h-screen w-64 pb-10 mt-28 bg-gradient-to-r from-gray-200 to-gray-100">
        <div className="flex px-4 h-full flex-grow flex-col rounded-br-lg rounded-tr-lg pt-5 ">
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
              className="w-10 h-10 rounded-[50%]"
            />
            <div className="flex ml-3 flex-col">
              <h3 className="font-medium text-xs">
                {session?.data?.user.name}
              </h3>
              <p className="text-xs text-gray-500 underline cursor-pointer hover:text-blue-500">
                see your profile
              </p>
            </div>
          </div>
          {/* list navBar */}
          <ul className="flex flex-col py-4">
            {menuItems.map((link) => {
              const LinkIcon = link.icon;
              const isActive = path === link.link;
              return (
                <li key={link.name} className="py-2">
                  <Link
                    href={link.link}
                    className={`flex flex-row items-center px-5 h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 ${
                      isActive ? "text-mainColor font-semibold" : ""
                    }`}
                  >
                    <LinkIcon className="mr-3 h-5 w-5" />
                    <span className="text-sm font-medium ml-3">
                      {link.name}
                    </span>
                  </Link>
                </li>
              );
            })}

            <li className="py-2">
              {session.status === "authenticated" ? (
                <button
                  onClick={() => signOut()}
                  className="flex flex-row px-5 items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                >
                  <LuLogOut />
                  <span className="text-sm font-medium ml-3">Logout</span>
                </button>
              ) : (
                <Link
                  href="/dashboard/login"
                  className="flex flex-row px-5 items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                >
                  <FiLogIn />
                  <span className="text-sm font-medium ml-3">Sign In</span>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
