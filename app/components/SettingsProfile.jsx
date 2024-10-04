"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SkeletonLoadingForm from "./SkeletonLoadingForm ";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";

const SettingsProfile = ({
  imageUrl,
  job,
  name,
  email,
  homeAddress,
  userSlug,
  phone,
  isAdmin,
  workLinks,
  skills,
  experience,
}) => {
  const [newEmail, setNewEmail] = useState(email);
  const [newJob, setNewJob] = useState(job);
  const [newName, setName] = useState(name);
  const [newPhone, setPhone] = useState(phone);
  const [newExperience, setNewExperience] = useState(experience);
  const [newHomeAddress, setNewHomeAddress] = useState(homeAddress);
  const [newImageUrl, setImageUrl] = useState(imageUrl);
  const [newSlug, setNewSlug] = useState(userSlug);
  const [newWorkLinks, setNewWorkLinks] = useState(workLinks);
  const [newSkills, setNewSkills] = useState(skills);

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  console.log("skills", newSkills);
  // Handle change a new work link
  const handleWorkLinkChange = (index, value) => {
    const updatedLinks = [...newWorkLinks];
    updatedLinks[index] = value;
    setNewWorkLinks(updatedLinks);
  };

  // Handle adding a new work link
  const handleAddWorkLink = () => {
    setNewWorkLinks([...newWorkLinks, ""]);
  };

  const handleSkillsChange = (index, value) => {
    const updatedSkills = [...newSkills];
    updatedSkills[index] = value;
    setNewSkills(updatedSkills);
  };

  // Handle adding a new work link
  const handleAddSkills = () => {
    setNewSkills([...newSkills, ""]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const imageUrl = e.target[2].value;
    const job = e.target[3].value;
    const phone = e.target[4].value;
    const homeAddress = e.target[5].value;
    const userSlug = newSlug;
    setLoading(true);
    try {
      await fetch(`/api/users/${newSlug}`, {
        method: "PUT",
        body: JSON.stringify({
          name,
          email,
          imageUrl,
          job,
          userSlug,
          phone,
          homeAddress,
          skills: newSkills,
          workLinks: newWorkLinks,
          experience: newExperience,
        }),
      });
      e.target.reset();
      setLoading(false);
      router.push(`/dashboard/profile/${newSlug}`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full mx-auto p-8 mb-8 bg-white rounded-lg md:p-3">
      <form onSubmit={handleSubmit}>
        <div className="flex md:block">
          <div className="w-full text-center">
            <div className="relative">
              <Image
                src={newImageUrl}
                alt="photo profile"
                className="w-1/2 mx-auto h-60 md:w-1/3 md:h-36 xs:w-80 xs:h-80 xs:rounded-full"
                width={400}
                height={400}
              />
              <div className="absolute bg-dark bg-opacity-80 text-white text-sm bottom-0 left-[40%] md:w-1/3 xs:left-16 cursor-pointer">
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
              <div className="flex items-center mb-3">
                <input
                  type="text"
                  name="name"
                  value={newName}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-purple-500 hover:border-purple-300 shadow-sm focus:shadow"
                />
                <CiEdit className="w-6 h-6 fill-dark ml-1" />
              </div>
              <span className="text-blue-500 text-xl">{newJob}</span>
              <div className="text-sm text-gray-600 mt-2">
                STATUS:
                <span className="text-gray-900 font-semibold uppercase">
                  {isAdmin ? "Admin" : "User"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-8 sm:flex-col sm:mt-4">
          <div className="w-full sm:flex sm:justify-between sm:items-center sm:text-sm">
            <div>
              <p className="text-xl md:text-sm text-gray-600 mt-8 mb-4">
                WORK LINKS
              </p>
              {newWorkLinks?.map((link, index) => (
                <div key={index} className="flex items-center">
                  <input
                    key={index}
                    type="url"
                    value={link}
                    onChange={(e) =>
                      handleWorkLinkChange(index, e.target.value)
                    }
                    className="block mb-2 w-1/2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-purple-500 hover:border-purple-300 shadow-sm focus:shadow"
                  />
                  <CiEdit className="w-6 h-6 fill-dark ml-1" />
                </div>
              ))}
            </div>
            <div>
              <p className="text-xl xs:text-sm text-gray-600 mt-8 mb-4">
                SKILLS
              </p>
              {newSkills?.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <input
                    key={index}
                    type="text"
                    onChange={(e) => handleSkillsChange(index, e.target.value)}
                    value={skill}
                    className="block mb-2 w-1/2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-purple-500 hover:border-purple-300 shadow-sm focus:shadow"
                  />
                  <CiEdit className="w-6 h-6 fill-dark ml-1" />
                </div>
              ))}
            </div>
          </div>

          <div className="w-full">
            <div className="tab-content sm:mt-4">
              <div className="active xs:text-sm" id="home">
                <div className="flex flex-wrap mb-4">
                  <div className="w-1/3 text-gray-700">Email</div>
                  <input
                    type="email"
                    name="email"
                    value={newEmail}
                    className="w-1/2 text-blue-600 font-semibold"
                    readOnly
                  />
                </div>
                <div className="flex flex-wrap items-center mb-4">
                  <div className="w-1/3 text-gray-700">Phone</div>
                  <input
                    type="tel"
                    name="phone"
                    value={newPhone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-1/2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-purple-500 hover:border-purple-300 shadow-sm focus:shadow"
                  />
                  <CiEdit className="w-6 h-6 fill-dark ml-1" />
                </div>
                <div className="flex flex-wrap mb-4 items-center">
                  <div className="w-1/3 text-gray-700">Profession</div>
                  <input
                    type="text"
                    name="job"
                    value={newJob}
                    onChange={(e) => setNewJob(e.target.value)}
                    className="w-1/2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-purple-500 hover:border-purple-300 shadow-sm focus:shadow"
                  />
                  <CiEdit className="w-6 h-6 fill-dark ml-1" />
                </div>
                <div className="flex flex-wrap items-center mb-4">
                  <div className="w-1/3 text-gray-700">Country</div>
                  <input
                    type="country"
                    name="homeAddress"
                    value={newHomeAddress}
                    onChange={(e) => setNewHomeAddress(e.target.value)}
                    className="w-1/2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-purple-500 hover:border-purple-300 shadow-sm focus:shadow"
                  />
                  <CiEdit className="w-6 h-6 fill-dark ml-1" />
                </div>
              </div>

              <div id="profile">
                <div className="flex flex-wrap items-center mb-4">
                  <div className="w-1/3 text-gray-700">Experience</div>
                  <input
                    type="number"
                    name="experience"
                    value={newExperience}
                    onChange={(e) => setNewExperience(e.target.value)}
                    className="w-1/2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-purple-500 hover:border-purple-300 shadow-sm focus:shadow"
                  />
                  <CiEdit className="w-6 h-6 fill-dark ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-mainColor text-white p-2 rounded-lg mt-6"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default SettingsProfile;
