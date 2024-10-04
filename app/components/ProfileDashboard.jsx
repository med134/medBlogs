import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProfileDashboard = ({ dataSession, userData }) => {
  return (
    <div className="w-full mx-auto p-8 mb-8 bg-white rounded-lg md:p-3">
      <form method="post">
        <div className="flex md:block">
          <div className="w-full text-center">
            <div className="relative">
              <Image
                src={userData.imageUrl}
                alt="photo profile"
                className="w-3/4 mx-auto h-60 md:w-1/3 md:h-36 xs:w-80 xs:h-80 xs:rounded-full"
                width={400}
                height={400}
              />
              {userData.email === dataSession.user.email && (
                <div className="absolute bg-dark bg-opacity-80 text-white text-sm bottom-0 left-10 md:w-1/3 xs:left-16 cursor-pointer">
                  Change Photo
                  <input
                    type="file"
                    name="file"
                    className="absolute inset-0 opacity-0 cursor-pointer text-center"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="w-full md:mt-10 xs:mt-3">
            <div className="text-left mb-2">
              <h5 className="text-gray-800 text-2xl md:text-xl">
                {userData.name}
              </h5>
              <h6 className="text-blue-600 text-lg md:text-sm">
                {userData.job}
              </h6>
              <div className="text-sm text-gray-600 mt-2">
                STATUS :
                <span className="text-gray-900 font-semibold uppercase">
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
          <div className="w-full sm:flex sm:justify-between sm:items-center sm:text-sm">
            <div>
              <p className="text-xl md:text-sm text-gray-600 mt-8 mb-4">
                WORK LINKS
              </p>
              <a
                href={userData?.workLinks[0]}
                className="block hover:text-blue-500 text-gray-800 mb-2"
              >
                GITHUB LINK
              </a>
              <a
                href={userData?.workLinks[1]}
                className="block hover:text-blue-500 text-gray-800 mb-2"
              >
                WEBSITE LINK
              </a>
              <a
                href={userData?.workLinks[2]}
                className="block hover:text-blue-500 text-gray-800 mb-2"
              >
                LINKEDIN LINK
              </a>
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-600 mt-8 mb-4">
                SKILLS
              </p>
              {userData?.skills?.map((skill, index) => (
                <div key={index}>{skill}</div>
              ))}
            </div>
          </div>
          <div className="w-full">
            <div className="tab-content sm:mt-4">
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
