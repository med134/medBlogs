"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const SettingsProfile = ({ id, imageUrl, job, name, email }) => {
  const [newEmail, setNewEmail] = useState(email);
  const [newJob, setNewJob] = useState(job);
  const [newName, setName] = useState(name);
  const [newPhone, setPhone] = useState("");
  const [newHomeAddress, setNewHomeAddress] = useState("");
  const [newImageUrl, setImageUrl] = useState(imageUrl);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = newName;
    const email = newEmail;
    const phone = newPhone;
    const imageUrl = newImageUrl;
    const homeAddress = newHomeAddress;
    const job = newJob;
    try {
      setLoading(true);
      await fetch(`/api/users/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          name,
          email,
          imageUrl,
          job,
          slug,
          phone,
          homeAddress,
        }),
      });

      setNewEmail("");
      setNewHomeAddress("");
      setNewJob("");
      setPhone("");
      setImageUrl("");
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container mx-auto py-8">
      <div className="bg-white shadow grid grid-cols-5 gap-4 rounded-lg p-6">
        <div className="col-span-2 flex flex-col items-center">
          <Image
            width={500}
            alt="user image"
            height={500}
            onChange={(e) => setImageUrl(e.target.value)}
            src={newImageUrl}
            className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
          />
          <h2 className="text-2xl block font-semibold text-dark">
            <span>Edit profile</span>{" "}
            <span className="text-mainColor">{name}</span>
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="col-span-3">
          <span className="text-dark">add new Image url </span>
          <input
            value={newImageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="mt-2 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
          />
          <hr className="my-3 border-t border-gray-300" />

          <span className=" text-dark">add new job </span>
          <input
            value={newJob}
            onChange={(e) => setNewJob(e.target.value)}
            className="mt-2 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
          />
          <hr className="my-3 border-t border-gray-300" />
          <div className="flex flex-col">
            <span className="text-dark">add new Email </span>

            <input
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              className="mt-2 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
            />
            <li className="my-3 border-t border-gray-300">
              Add new Home Address
            </li>
            <input
              value={newHomeAddress}
              placeholder="add address home"
              onChange={(e) => setNewHomeAddress(e.target.value)}
              className="p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
            />
            <li className="my-2 border-t border-gray-300">
              Add new Phone number
            </li>
            <input
              value={newPhone}
              type="tel"
              placeholder="+212-66604586"
              onChange={(e) => setPhone(e.target.value)}
              className="mt-2 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
            />
          </div>
          <div className="flex justify-evenly items-center mt-4">
            <button className="px-4 py-1 rounded-md text-light bg-gray-400 hover:bg-gray-600">
              save
            </button>
            <button
              onClick={() => router.push(`/dashboard/profile/${user._id}`)}
              className="px-6 py-1 rounded-md text-light bg-gray-400 hover:bg-gray-600"
            >
              cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsProfile;
