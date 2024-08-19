"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { PiUsersThree } from "react-icons/pi";
import { RiArticleLine } from "react-icons/ri";
import { LuLogOut } from "react-icons/lu";
import { MdPendingActions } from "react-icons/md";
import { LuLayoutTemplate } from "react-icons/lu";
import { CgFileAdd } from "react-icons/cg";
import { usePathname } from "next/navigation";
import { handelLogOut } from "@/app/utils/action";
const SideBar = ({ session }) => {
  const path = usePathname();
  const menuItems = [
    { name: "Dashboard", link: "/dashboard", icon: RxDashboard },
    { name: "Users", link: "/dashboard/users", icon: PiUsersThree },
    { name: "Blogs", link: "/dashboard/blogs", icon: RiArticleLine },
    { name: "Add Blog", link: "/dashboard/add-articles", icon: CgFileAdd },
    { name: "Draft blog", link: "/dashboard/pending", icon: MdPendingActions },
    {
      name: "Add Templates",
      link: `/dashboard/add-templates`,
      icon: LuLayoutTemplate,
    },
  ];

  return (
    <div className="mb-6 h-[100%]">
      <div className="h-screen w-64 pb-10 bg-gradient-to-r from-[#f0f0f0] to-gray-50">
        <div className="flex px-4 h-full mt-24 flex-grow flex-col rounded-br-lg rounded-tr-lg pt-5 ">
          <div className="flex mt-10 justify-start items-center px-4 cursor-pointer">
            <div className="flex ml-3 flex-col">
              <Link
                href={`/dashboard/profile/${session.user.name
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
                className="flex justify-start items-center"
              >
                <Image
                  width={50}
                  height={50}
                  priority
                  src={session?.user?.image}
                  alt="photo_profile"
                  className="w-12 h-12 rounded-[50%]"
                />
                <div className="ml-3">
                  <h3 className="font-medium text-xs hover:text-mainColor">
                    Hi, {session?.user?.name}
                  </h3>
                </div>
              </Link>
            </div>
          </div>
          <ul className="flex flex-col pt-4">
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
          </ul>
          <form action={handelLogOut}>
            <button className="flex flex-row px-5 items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <LuLogOut />
              <span className="text-sm font-medium ml-3">Logout</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
