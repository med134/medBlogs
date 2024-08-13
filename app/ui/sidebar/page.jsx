"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { PiUsersThree } from "react-icons/pi";
import { RiArticleLine, RiProfileFill } from "react-icons/ri";
import { LuLogOut } from "react-icons/lu";
import { MdPendingActions } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { CgFileAdd } from "react-icons/cg";
import { signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import ProfileLoader from "@/app/components/ProfileLoader";

const SideBar = () => {
  const session = useSession();
  const router = useRouter();
  const path = usePathname();
  const [user, setUser] = useState([]);
  const menuItems = [
    { name: "Dashboard", link: "/dashboard", icon: RxDashboard },
    { name: "Users", link: "/dashboard/users", icon: PiUsersThree },
    { name: "Blogs", link: "/dashboard/blogs", icon: RiArticleLine },
    { name: "Add Blog", link: "/dashboard/add-articles", icon: CgFileAdd },
    { name: "Draft blog", link: "/dashboard/pending", icon: MdPendingActions },
    {
      name: "Profile",
      link: `/dashboard/profile/${session?.data?.user?.name
        .replace(/\s+/g, "-")
        .toLowerCase()}`,
      icon: RiProfileFill,
    },
  ];
  useEffect(() => {
    if (session?.status === "authenticated") {
      const userSlug = session?.data?.user?.name
        .replace(/\s+/g, "-")
        .toLowerCase();
      fetch(`/api/users/${userSlug}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
        });
    }
  }, [session]);
  const handleMoveProfile = () => {
    if (user) {
      router.push(`/dashboard/profile/${user.userSlug}`);
    } else if (user === null) {
      router.push(`/dashboard/create-user`);
    }
  };
  const removeLastName = (fullName) => {
    const nameParts = fullName.trim().split(" ");
    nameParts.pop();
    return nameParts.join(" ");
  };
  return (
    <div className="mb-6 h-[100%]">
      <div className="h-screen w-64 pb-10 bg-gradient-to-r from-[#f0f0f0] to-gray-50">
        <div className="flex px-4 h-full mt-24 flex-grow flex-col rounded-br-lg rounded-tr-lg pt-5 ">
          <div
            onClick={() => handleMoveProfile()}
            className="flex mt-10 justify-start items-center px-4 cursor-pointer"
          >
            <div className="flex ml-3 flex-col">
              {session.status === "unauthenticated" ? (
                <div className="flex justify-start items-center">
                  <Image
                    width={50}
                    height={50}
                    priority
                    src={
                      "https://res.cloudinary.com/djcnq7nmj/image/upload/v1722710170/programmer_bnkuqg.png"
                    }
                    alt="photo_profile"
                    className="w-12 h-12 rounded-[50%]"
                  />
                  <Link
                    href={"/dashboard/login"}
                    rel="preload"
                    className="hover:text-blue-500 hover:underline text-gray-500 text-xl font-semibold"
                  >
                    Login
                  </Link>
                </div>
              ) : session.status === "loading" ? (
                <ProfileLoader />
              ) : (
                <div className="flex justify-start items-center">
                  <Image
                    width={50}
                    height={50}
                    priority
                    src={session?.data?.user?.image}
                    alt="photo_profile"
                    className="w-12 h-12 rounded-[50%]"
                  />
                  <div className="ml-3">
                    <h3 className="font-medium text-xs hover:text-mainColor">
                      Hi, {removeLastName(session?.data?.user?.name)}
                    </h3>
                    {/* <p className="text-xs text-gray-500">{user.job}</p> */}
                  </div>
                </div>
              )}
            </div>
          </div>
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
