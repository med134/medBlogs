"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SkeletonLoadingForm from "./SkeletonLoadingForm ";
const SettingsProfile = ({
  imageUrl,
  job,
  name,
  email,
  homeAddress,
  userSlug,
  phone,
}) => {
  const [newEmail, setNewEmail] = useState(email);
  const [newJob, setNewJob] = useState(job);
  const [newName, setName] = useState(name);
  const [newPhone, setPhone] = useState(phone);
  const [newHomeAddress, setNewHomeAddress] = useState(homeAddress);
  const [newImageUrl, setImageUrl] = useState(imageUrl);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const imageUrl = e.target[2].value;
    const job = e.target[3].value;
    const phone = e.target[4].value;
    const homeAddress = e.target[5].value;
    const userSlug = userSlug;
    setLoading(true);
    try {
      await fetch(`/api/users/${userSlug}`, {
        method: "PUT",
        body: JSON.stringify({
          name,
          email,
          imageUrl,
          job,
          userSlug,
          phone,
          homeAddress,
        }),
      });
      e.target.reset();
      setLoading(false);
      router.push(`/dashboard/profile/${userSlug}`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="py-32">
      <div className="border-b-2 flex-col md:flex">
        <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
          <div className="flex justify-center">
            <Image
              src={newImageUrl}
              alt="user"
              width={300}
              height={300}
              className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
            />
          </div>
          <div className="mt-16">
            <h1 className="font-bold text-center text-3xl text-gray-900">
              {newName}
            </h1>
            <p className="text-center text-sm text-gray-400 font-medium">
              {newJob}
            </p>

            <div className="my-5 px-6">
              <span className="text-gray-200 block cursor-text rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">
                Edit <span className="font-bold">Profile Admin</span>
              </span>
            </div>
          </div>
        </div>

        <div className="w-full p-8 bg-white lg:ml-4">
          {loading ? (
            <SkeletonLoadingForm />
          ) : (
            <form className="" onSubmit={handleSubmit}>
              <div className="rounded p-6 grid grid-cols-3 gap-4">
                <div className="pb-2">
                  <label
                    htmlFor="name"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Name
                  </label>
                  <div className="flex">
                    <input
                      onChange={(e) => setName(e.target.value)}
                      type="name"
                      value={newName}
                      className="w-full mt-2 py-2 px-3 rounded-lg dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="pb-2">
                  <label
                    htmlFor="email"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Email
                  </label>
                  <div className="flex">
                    <input
                      readOnly
                      type="name"
                      value={newEmail}
                      className="w-full mt-2 py-2 px-3 rounded-lg dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="pb-2">
                  <label
                    htmlFor="name"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Image url
                  </label>
                  <div className="flex">
                    <input
                      onChange={(e) => setImageUrl(e.target.value)}
                      type="imageUrl"
                      value={newImageUrl}
                      className="w-full mt-2 py-2 px-3 rounded-lg dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="pb-2">
                  <label
                    htmlFor="name"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    job
                  </label>
                  <div className="flex">
                    <input
                      onChange={(e) => setNewJob(e.target.value)}
                      type="job"
                      value={newJob}
                      className="w-full mt-2 py-2 px-3 rounded-lg dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="pb-2">
                  <label className="font-semibold text-gray-700 block pb-1">
                    Phone Number
                  </label>
                  <div className="flex">
                    <input
                      onChange={(e) => setPhone(e.target.value)}
                      type="tel"
                      value={newPhone}
                      placeholder="+2126458785"
                      className="w-full mt-2 py-2 px-3 rounded-lg dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="pb-2">
                  <label
                    htmlFor="address"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Address home
                  </label>
                  <div className="flex">
                    <input
                      onChange={(e) => setNewHomeAddress(e.target.value)}
                      type="address"
                      value={newHomeAddress}
                      placeholder="home address"
                      className="w-full mt-2 py-2 px-3 rounded-lg dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center py-5">
                <button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-blue-dark text-white font-bold py-2 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
                >
                  Save
                </button>
                <button
                  onClick={router.push(`/dashboard/profile/${userSlug}`)}
                  className="w-full ml-4 bg-gray-900 hover:bg-blue-dark text-white font-bold py-2 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsProfile;
