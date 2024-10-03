import Image from "next/image";
import React from "react";
import Icon from "@/public/images/med.jpg";

const ProfileDashboard = () => {
  return (
    <div className="w-full mx-auto p-8 mb-8 bg-white rounded-lg md:p-3">
      <form method="post">
        <div className="flex md:block">
          <div className="w-full text-center">
            <div className="relative">
              <Image
                src={Icon}
                alt="photo profile"
                className="w-3/4 mx-auto h-60 md:w-1/3 md:h-36 xs:w-80 xs:h-80 xs:rounded-full"
                width={300}
                height={300}
              />
              <div className="absolute bg-dark bg-opacity-80 text-white text-sm bottom-0 left-10 md:w-1/3 xs:left-16 cursor-pointer">
                Change Photo
                <input
                  type="file"
                  name="file"
                  className="absolute inset-0 opacity-0 cursor-pointer text-center"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:mt-10 xs:mt-3">
            <div className="text-left mb-2">
              <h5 className="text-gray-800 text-2xl md:text-xl">
                Kshiti Ghelani
              </h5>
              <h6 className="text-blue-600 text-lg md:text-sm">
                Web Developer and Designer
              </h6>
              <div className="text-sm text-gray-600 mt-2">
                STATUS :
                <span className="text-gray-900 font-semibold">Admin</span>
              </div>
            </div>
          </div>
          <div className="w-full text-right">
            <input
              type="submit"
              defaultValue="Edit Profile"
              className="w-full bg-gray-200 p-2 rounded-full font-semibold text-gray-600 cursor-pointer"
            />
          </div>
        </div>
        <div className="flex mt-8 sm:flex-col sm:mt-4">
          <div className="w-full sm:flex sm:justify-between sm:items-center sm:text-sm">
            <div>
              <p className="font-semibold text-sm text-gray-600 mt-8 mb-4">
                WORK LINKS
              </p>
              <a href="#" className="block font-semibold text-gray-800 mb-2">
                GITHUB LINK
              </a>
              <a href="#" className="block font-semibold text-gray-800 mb-2">
                WEBSITE LINK
              </a>
              <a href="#" className="block font-semibold text-gray-800 mb-2">
                LINKEDIN LINK
              </a>
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-600 mt-8 mb-4">
                SKILLS
              </p>
              <a href="#" className="block font-semibold text-gray-800 mb-2">
                Web Designer
              </a>
              <a href="#" className="block font-semibold text-gray-800 mb-2">
                Web Developer
              </a>
              <a href="#" className="block font-semibold text-gray-800 mb-2">
                WordPress
              </a>
            </div>
          </div>
          <div className="w-full">
            <div className="tab-content sm:mt-4">
              <div className="active xs:text-sm" id="home">
                <div className="flex flex-wrap mb-4">
                  <div className="w-1/3 text-gray-700">Email</div>
                  <div className="w-1/2 text-blue-600 font-semibold">
                    kshitighelani@gmail.com
                  </div>
                </div>
                <div className="flex flex-wrap mb-4">
                  <div className="w-1/2 text-gray-700">Phone</div>
                  <div className="w-1/2 text-blue-600 font-semibold">
                    123 456 7890
                  </div>
                </div>
                <div className="flex flex-wrap mb-4">
                  <div className="w-1/2 text-gray-700">Profession</div>
                  <div className="w-1/2 text-blue-600 font-semibold">
                    Web Developer and Designer
                  </div>
                </div>
                <div className="flex flex-wrap mb-4">
                  <div className="w-1/2 text-gray-700">Country</div>
                  <div className="w-1/2 text-blue-600 font-semibold">
                    moroocoo
                  </div>
                </div>
              </div>
              <div id="profile">
                <div className="flex flex-wrap mb-4">
                  <div className="w-1/2 text-gray-700">Experience</div>
                  <div className="w-1/2 text-blue-600 font-semibold">
                    Expert
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
