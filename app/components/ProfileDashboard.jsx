import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";

const ProfileDashboard = ({ dataSession, userData }) => {
  const myLinks = userData?.workLinks;
  console.log(myLinks);
  return (
    <div className="w-full mx-auto p-8 mb-8 bg-white rounded-lg md:p-3 sm:p-3">
      {userData.email === dataSession.user.email && (
        <Link
          href={`/dashboard/settings/${userData?.userSlug}`}
          className="absolute group right-10 inline-flex px-4 items-center bg-gray-200 p-2 rounded-full hover:bg-mainColor  text-gray-600 cursor-pointer xs:right-4"
        >
          <span className="sm:text-sm group-hover:text-light xs:hidden">
            Edit Profile
          </span>
          <CiEdit className="w-6 h-6 fill-dark ml-1 group-hover:fill-light" />
        </Link>
      )}
      <form method="post">
        <div className="w-full flex justify-start items-center md:flex md:flex-col md:justify-center">
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
          <div className="w-full md:mt-10 xs:mt-3">
            <div className="text-left mb-2 md:text-center">
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
        </div>

        <div className="flex mt-8 md:flex-col sm:mt-4">
          <div className="w-full sm:block sm:justify-between sm:items-center sm:text-sm">
            <div>
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
                    className="w-1/2 flex items-center bg-white border mb-3 border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:w-full"
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
            <div className="mt-4 block">
              <span className="font-semibold text-xl text-mainColor">
                SKILLS
              </span>
              {userData?.skills.length > 0 ? (
                userData.skills?.map((skill, index) => (
                  <div
                    key={index}
                    className="w-1/2 uppercase flex items-center bg-white border mt-3 border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:w-full"
                  >
                    {skill}
                  </div>
                ))
              ) : (
                <Link
                  href={`/dashboard/settings/${userData?.userSlug}`}
                  className="text-dark px-6 py-1.5 rounded-md hover:text-mainColor hover:font-semibold"
                >
                  No skills, Add skills
                </Link>
              )}
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
