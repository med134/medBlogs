import React from "react";
import Image from "next/image";
import Link from "next/link";
import med from "@/public/images/logo-med-removebg-preview.png";
import { RxExit } from "react-icons/rx";
import { auth } from "../utils/auth";
import { MdSpaceDashboard } from "react-icons/md";

async function DashboardNav() {
  const session = await auth();
  return (
    <div className="h-20 flex sticky top-0 justify-between z-99 w-full items-center bg-gradient-to-r from-[#f0f0f0] to-gray-50">
      <div className="px-8 flex justify-center items-center text-2xl font-bold text-gray-800">
        <MdSpaceDashboard className="fill-mainColor w-10 h-10" />
        <span className="text-mainColor ml-3">Admin Panel</span>
      </div>
      <div>
        {" "}
        <div className="flex justify-start items-center px-4 cursor-pointer">
          <div className="flex mr-6 flex-col">
            <Link
              href={`/dashboard/profile/${session.user.name
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
              className="flex justify-start items-center"
            >
              <div className="">
                <h3 className="font-medium text-xs hover:text-mainColor dark:text-light">
                  Hi, {session?.user?.name}
                </h3>
              </div>
              <Image
                width={50}
                height={50}
                priority
                src={session?.user?.image}
                alt="photo_profile"
                className="w-10 h-10 rounded-[50%] ml-3"
              />
            </Link>
          </div>
          <Link href="/" className="ml-3">
            <RxExit className="w-8 h-8 fill-mainColor" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DashboardNav;
