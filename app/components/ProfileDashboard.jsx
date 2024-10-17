import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { CgWorkAlt } from "react-icons/cg";
import { FormatDate } from "../utils/action";
import { PiUserGear } from "react-icons/pi";
import { RiArticleLine } from "react-icons/ri";
import { getPostOfUser } from "../utils/action";

const ProfileDashboard = async ({ dataSession, userData }) => {
  const myLinks = userData?.workLinks;
  const totalPost = await getPostOfUser(userData.email);
  return (
    <div className="w-full mx-auto mb-8 rounded-lg md:p-3 sm:p-3">
      <div className="relative w-full bg-light p-4 shadow-md flex justify-start items-center md:flex md:flex-col md:justify-center">
        {userData.email === dataSession.user.email && (
          <Link
            href={`/dashboard/settings/${userData?.userSlug}`}
            className="absolute z-10 group right-10 top-3 inline-flex px-4 items-center bg-gray-200 p-2 rounded-full hover:bg-mainColor  text-gray-600 cursor-pointer md:right-4"
          >
            <span className="sm:text-sm group-hover:text-light xs:hidden">
              Edit Profile
            </span>
            <CiEdit className="w-6 h-6 fill-dark ml-1 group-hover:fill-light" />
          </Link>
        )}
        <div className="relative w-full">
          <Image
            src={userData?.imageUrl}
            alt="photo profile"
            className="mx-auto w-60 h-60 sm:w-56 sm:h-56 rounded-full"
            width={400}
            height={400}
            loading="lazy"
          />
        </div>
        <div className="w-full py-6">
          <div className="text-left mb-2 md:text-center pt-5">
            <h5 className="text-gray-800 text-3xl md:text-xl">
              Hello, {userData.name}
            </h5>
            <div className="text-sm text-gray-600 mt-4 flex md:justify-center">
              <PiUserGear className="w-6 h-6 fill-gray-600" />
              <span className="text-gray-900 font-semibold uppercase ml-3">
                {userData.isAdmin ? "Admin" : "user"}
              </span>
            </div>
            <div className="text-sm text-gray-600 mt-2 flex md:justify-center ">
              <CgWorkAlt className="w-6 h-6 fill-gray-600" />
              <span className="text-gray-900 font-semibold uppercase ml-3">
                {userData.job || "...."}
              </span>
            </div>
            <div className="text-sm text-gray-600 mt-2 flex md:justify-center ">
              <RiArticleLine className="w-6 h-6 fill-gray-600" />
              <span className="text-gray-900 font-semibold uppercase ml-3">
                {totalPost || "0"} article
              </span>
            </div>
            <div className="text-sm text-gray-600 mt-2 flex md:justify-center  ">
              <LiaBirthdayCakeSolid className="w-6 h-6 fill-gray-600" />
              <span className="text-gray-900 font-semibold ml-3">
                Joined on {FormatDate(userData.createdAt)}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-6 md:gap-0 mt-8 space-x-4 md:space-x-0 md:flex md:flex-col-reverse sm:mt-4">
        <div className="w-full px-6 col-span-2 sm:block sm:justify-between sm:items-center sm:text-sm bg-light rounded-md shadow-md">
          <div className="">
            <p className="text-xl font-semibold text-mainColor mt-8 mb-4">
              WORK LINKS
            </p>
            {Object.keys(myLinks).length > 0 ? (
              myLinks?.map((link, index) => (
                <a
                  key={index}
                  href={link?.url} // Use link.url for the href
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-white border mb-3 border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:w-full"
                >
                  <Image
                    src={link?.image}
                    width={100}
                    height={100}
                    className="h-5 w-5"
                    alt="icons image"
                  />
                  <span className="ml-4">{link?.title}</span>
                </a>
              ))
            ) : (
              <Link
                href={`/dashboard/settings/${userData?.userSlug}`}
                className="px-6 shadow-md hover:bg-mainColor hover:text-light border rounded-md py-2"
              >
                No work links, Add links
              </Link>
            )}
          </div>
          <div className="mt-4 block mb-4">
            <span className="font-semibold text-xl text-mainColor">SOME SKILLS</span>
            {userData?.skills.length > 0 ? (
              userData.skills?.map((skill, index) => (
                <div
                  key={index}
                  className="uppercase flex items-center bg-white border mt-3 border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:w-full"
                >
                  {skill}
                </div>
              ))
            ) : (
              <Link
                href={`/dashboard/settings/${userData?.userSlug}`}
                className="px-6 shadow-md hover:bg-mainColor hover:text-light border rounded-md py-2"
              >
                No skills, Add skills
              </Link>
            )}
          </div>
        </div>
        <div className="col-span-4 bg-light rounded-md shadow p-6 md:mb-4">
          <span className="font-semibold uppercase text-xl text-mainColor">
            Personnel Information
          </span>
          <div className="tab-content mt-4">
            <div className="active xs:text-sm" id="home">
              <div className="flex flex-wrap mb-4">
                <div className="w-1/3 text-gray-700">Email</div>
                <div className="w-1/2 text-blue-600 font-semibold">
                  {userData.email}
                </div>
              </div>
              <div className="flex flex-wrap mb-4">
                <div className="w-1/2 text-gray-700">Phone</div>
                <div className="w-1/2 text-blue-600 font-semibold">
                  {userData?.phone}
                </div>
              </div>
              <div className="flex flex-wrap mb-4">
                <div className="w-1/2 text-gray-700">Profession</div>
                <div className="w-1/2 text-blue-600 font-semibold">
                  {userData?.job}
                </div>
              </div>
              <div className="flex flex-wrap mb-4">
                <div className="w-1/2 text-gray-700">Country</div>
                <div className="w-1/2 text-blue-600 font-semibold">
                  {userData?.homeAddress}
                </div>
              </div>
            </div>
            <div id="profile">
              <div className="flex flex-wrap mb-4">
                <div className="w-1/2 text-gray-700">Experience</div>
                <div className="w-1/2 text-blue-600 font-semibold">
                  {userData?.experience} years
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
