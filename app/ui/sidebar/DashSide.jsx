"use client";
import React from "react";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { PiUsersThree } from "react-icons/pi";
import { RiArticleLine } from "react-icons/ri";
import { LuLogOut } from "react-icons/lu";
import { MdPendingActions } from "react-icons/md";
import { LuLayoutTemplate } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { CgFileAdd } from "react-icons/cg";
import { usePathname } from "next/navigation";
import { handelLogOut } from "@/app/utils/action";

export const menuItems = [
 { name: "Dashboard", link: "/dashboard", icon: RxDashboard },
 { name: "Users", link: "/dashboard/users", icon: PiUsersThree },
 { name: "Blogs", link: "/dashboard/blogs", icon: RiArticleLine },
 { name: "Add Blog", link: "/dashboard/add-articles", icon: CgFileAdd },
 { name: "Draft blog", link: "/dashboard/pending", icon: MdPendingActions },
 { name: "Messages", link: "/dashboard/messages", icon: MdOutlineMail },
 {
   name: "Add Templates",
   link: `/dashboard/add-templates`,
   icon: LuLayoutTemplate,
 },
];
const SideBar = () => {
  const path = usePathname();
  return (
    <div className="fixed left-0 top-16 h-screen lg:hidden flex px-4 flex-grow flex-col bg-gradient-to-r from-[#f0f0f0] to-gray-50">
      <ul className="flex flex-col pt-12">
        {menuItems.map((link) => {
          const LinkIcon = link.icon;
          const isActive = path === link.link;
          return (
            <li key={link.name} className="py-3">
              <Link
                href={link.link}
                className={`flex flex-row items-center px-5 h-10 cursor-pointer transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 ${
                  isActive ? "font-semibold bg-mainColor  text-light" : ""
                }`}
              >
                <LinkIcon className="mr-3 h-6 w-6" />
                <span className="font-medium ml-3">
                  {link.name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      <form action={handelLogOut} className="mt-3">
        <button className="flex flex-row px-5 items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <LuLogOut className="w-6 h-6" />
          <span className="font-medium ml-3">
            Logout
          </span>
        </button>
      </form>
    </div>
  );
};

export default SideBar;
