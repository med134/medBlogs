import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const ProfileDashboard = ({ dataSession, userData }) => {
  return (
    <div className="w-full mx-auto p-8 mb-8 bg-white rounded-lg md:p-3 sm:p-3">
      <form method="post">
        <div className="flex md:block">
          <div className="w-full">
            <div className="relative">
              <Image
                src={userData?.imageUrl}
                alt="photo profile"
                className="w-3/4 mx-auto h-60 md:w-1/3 md:h-36 sm:w-56 sm:h-56 rounded-full"
                width={400}
                height={400}
                loading="lazy"
              />
            </div>
          </div>
          <div className="w-full md:mt-10 xs:mt-3">
            <div className="text-left mb-2">
              <h5 className="text-gray-800 text-2xl md:text-xl">
                Hello, {userData.name}
              </h5>
              <h6 className="text-blue-600 text-lg md:text-sm">
                {userData.job}
              </h6>
              <div className="text-sm text-gray-600 mt-2">
                STATUS :
                <span className="text-gray-900 font-semibold uppercase ml-3">
                  {userData.isAdmin ? "Admin" : "user"}
                </span>
              </div>
            </div>
          </div>
          {userData.email === dataSession.user.email && (
            <div className="w-full text-right px-6">
              <Link
                href={`/dashboard/settings/${userData?.userSlug}`}
                className="w-full bg-gray-200 p-2 rounded-full px-6 hover:bg-mainColor hover:text-light text-gray-600 cursor-pointer"
              >
                Edit Profile
              </Link>
            </div>
          )}
        </div>
        <div className="flex mt-8 sm:flex-col sm:mt-4">
          <div className="w-full sm:block sm:justify-between sm:items-center sm:text-sm">
            <div>
              <p className="text-xl font-semibold text-mainColor mt-8 mb-4">
                WORK LINKS
              </p>
              <a
                href={userData?.workLinks[0]}
                className="w-1/2 flex items-center bg-white border mb-3 border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:w-full"
              >
                <FaGithub className="fill-dark w-6 h-6" />{" "}
                <span className="ml-4">GITHUB LINK</span>
              </a>
              <a
                href={userData?.workLinks[1]}
                className="w-1/2 flex items-center bg-white border mb-3 border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:w-full"
              >
                <CgWebsite className="fill-dark w-6 h-6" />{" "}
                <span className="ml-4">Website LINK</span>
              </a>
              <a
                href={userData?.workLinks[2]}
                className="w-1/2 flex items-center bg-white border  border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:w-full"
              >
                <FaLinkedin className="w-6 h-6 fill-blue-900" />
                <span className="ml-4 font-semibold">LinkedIn Link</span>
              </a>
            </div>
            <div className="mt-4">
              <span className="font-semibold text-xl text-mainColor">
                SKILLS
              </span>
              {userData?.skills?.map((skill, index) => (
                <div
                  key={index}
                  className="w-1/2 flex items-center bg-white border mt-3 border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:w-full"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full mt-8">
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
      </form>
    </div>
  );
};

export default ProfileDashboard;
