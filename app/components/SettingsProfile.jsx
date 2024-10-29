"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SkeletonLoadingForm from "./SkeletonLoadingForm ";
import { CiEdit } from "react-icons/ci";
import imageCompression from "browser-image-compression";
import ImageUser from "./ImageUser";
import { myWorkLinks } from "./ProjectArrays";

const SettingsProfile = ({
  imageUrl,
  job,
  name,
  email,
  homeAddress,
  userSlug,
  phone,
  workLinks,
  skills,
  experience,
  userId
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
  const [newSkillInput, setNewSkillInput] = useState("");
  const [newWorkLinksInput, setNewWorkLinksInput] = useState("");
  const router = useRouter();

  // Handle change a new work link
  const handleWorkLinkChange = (index, newUrl) => {
    const updatedLinks = [...newWorkLinks];
    updatedLinks[index] = { ...updatedLinks[index], url: newUrl }; // Only update the URL
    setNewWorkLinks(updatedLinks);
  };

  const handleSkillsChange = (index, value) => {
    const updatedSkills = [...newSkills];
    updatedSkills[index] = value;
    setNewSkills(updatedSkills);
  };
  // Add new skill to array
  const handleAddNewSkill = () => {
    if (newSkillInput.trim() !== "") {
      setNewSkills([...newSkills, newSkillInput]); // Add new skill to the array
      setNewSkillInput(""); // Clear the input field
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userSlug = newSlug;
    setLoading(true);
    try {
      await fetch(`/api/users/${userId}`, {
        method: "PUT",
        body: JSON.stringify({
          name: newName,
          email: newEmail,
          imageUrl: newImageUrl,
          job: newJob,
          userSlug,
          phone: newPhone,
          homeAddress: newHomeAddress,
          skills: newSkills,
          workLinks: newWorkLinks,
        }),
      });
      e.target.reset();
      setLoading(false);
      router.push(`/dashboard/profile/${userId}`);
    } catch (err) {
      console.log(err);
    }
  };
  // upload photo
  const readURL = async (event) => {
    const input = event.target;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      // Compression options
      const options = {
        maxSizeMB: 1, // Maximum file size in MB
        maxWidthOrHeight: 800, // Maximum width or height
        useWebWorker: true, // For better performance
      };
      try {
        // Compress the image file
        const compressedFile = await imageCompression(file, options);
        // Convert the compressed file to base64 URL
        const reader = new FileReader();
        reader.onload = () => {
          const src = reader.result;
          setImageUrl(src); // Set compressed image to state
        };
        reader.readAsDataURL(compressedFile);
      } catch (error) {
        console.log("Error while compressing the image", error);
      }
    }
  };
  useEffect(() => {
    if (newWorkLinks.length < 2) {
      setNewWorkLinks(myWorkLinks);
    }
  }, [newWorkLinks, router]);
  return (
    <div className="w-full mx-auto p-8 mb-8 bg-white rounded-lg md:p-3">
      {loading ? (
        <SkeletonLoadingForm />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="flex md:block">
            <div className="w-full text-center">
              <div className="relative">
                <ImageUser
                  imageUrl={newImageUrl}
                  className="w-1/2 mx-auto h-60 xs:w-60 xs:h-60 xs:rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <label className="py-1.5 px-3 bg-dark bg-opacity-80 text-white text-sm cursor-pointer">
                    Change Photo
                    <input
                      type="file"
                      onChange={readURL}
                      id="image"
                      accept="image/*"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full md:mt-3">
              <div className="text-left mb-2">
                <div className="flex items-center mb-3 md:justify-center">
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
              </div>
            </div>
          </div>

          <div className="flex mt-8 md:flex-col sm:mt-8">
            <div className="w-full sm:flex sm:flex-col sm:text-sm">
              <div className="sm:mb-4 p-4">
                <span className="text-xl font-semibold text-mainColor mt-8 sm:text-sm">
                  WORK LINKS
                </span>
                {newWorkLinks.length > 0 &&
                  newWorkLinks.map((link, index) => (
                    <div key={index} className="flex items-center sm:mt-2">
                      <ImageUser
                        imageUrl={link.image || ""}
                        className="w-5 h-6"
                      />
                      <input
                        key={index}
                        type="url"
                        value={link.url || ""}
                        placeholder={link.title}
                        required={false}
                        onChange={(e) =>
                          handleWorkLinkChange(index, e.target.value)
                        }
                        className="block mb-2 sm:w-full ml-3 w-1/2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-purple-500 hover:border-purple-300 shadow-sm focus:shadow"
                      />
                    </div>
                  ))}
              </div>
              <div className="sm:mb-4 p-4">
                <span className="text-xl font-semibold text-mainColor mt-8 sm:text-sm">
                  SKILLS
                </span>
                {newSkills.length > 2 ? (
                  newSkills.map((link, index) => (
                    <div key={index} className="flex items-center sm:mt-2">
                      <input
                        key={index}
                        type="text"
                        value={link}
                        required={false}
                        onChange={(e) =>
                          handleSkillsChange(index, e.target.value)
                        }
                        className="block mb-2 sm:w-full w-1/2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-purple-500 hover:border-purple-300 shadow-sm focus:shadow"
                      />
                      <CiEdit className="w-6 h-6 fill-dark ml-1" />
                    </div>
                  ))
                ) : (
                  <div className="flex items-center sm:mt-2">
                    <input
                      type="text"
                      required={false}
                      placeholder="Add a new three skill"
                      value={newSkillInput}
                      onChange={(e) => setNewSkillInput(e.target.value)}
                      className="block mb-2 sm:w-full w-1/2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-purple-500 hover:border-purple-300 shadow-sm focus:shadow"
                    />
                    <button
                      type="button"
                      onClick={handleAddNewSkill}
                      className="ml-2 px-6 py-1 sm:tex-xs bg-mainColor text-white rounded"
                    >
                      Add three Skill
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="w-full">
              <span className="font-semibold uppercase text-xl text-mainColor sm:text-sm">
                Personnel Information
              </span>
              <div className="tab-content mt-4 sm:mt-4">
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
                      placeholder="Add phone number"
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
                      placeholder="Add your job"
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
                      placeholder="Add your country"
                      onChange={(e) => setNewHomeAddress(e.target.value)}
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
      )}
    </div>
  );
};

export default SettingsProfile;
