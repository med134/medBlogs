import React from "react";
import { EditButton } from "./SearchButton";
import Image from "next/image";
import Form from "next/form";
import { editUserProfile } from "../utils/action";
import { BsDribbble, BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { XIcon } from "react-share";

const SettingsUser = ({ user }) => {
  return (
    <div className="w-full rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
      <Form
        action={editUserProfile}
        className="p-4 md:p-2 text-center lg:text-left"
      >
        {/* Image for mobile view */}
        <Image
          className="block rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
          src={user?.imageUrl}
          width={300}
          height={300}
          alt="user image"
        />
        <h1 className="text-3xl font-bold pt-8 lg:pt-3 sm:text-xl uppercase lg:text-center">
          {user.name}
        </h1>
        <div className="mx-auto w-4/5 pt-3 border-b-2 border-mainColor opacity-25" />
        {/* Job and Country */}
        <div className="w-full py-6 flex justify-evenly items-center sm:flex sm:flex-col">
          <input name="id" value={user._id} hidden readOnly />
          <input name="name" value={user.name} hidden readOnly />
          <input name="email" value={user.email} hidden readOnly />
          <div className="border-2 relative sm:mb-2">
            <input
              className="w-full placeholder:capitalize px-8 py-1.5 outline-mainColor"
              type="text"
              placeholder="Your Job"
              name="job"
            />
          </div>
          <div className="border-2 relative">
            <input
              className="w-full placeholder:capitalize px-8 py-1.5 outline-mainColor"
              type="text"
              placeholder="Country"
              name="homeAddress"
            />
          </div>
        </div>

        {/* About Me Textarea */}
        <div className="flex flex-col mx-auto gap-2 max-w-lg p-4">
          <label
            htmlFor="input"
            className="font-semibold text-lg sm:text-sm mb-4"
          >
            Enter somethings about you
          </label>
          <textarea
            name="about"
            id="about"
            rows={5}
            maxLength={256}
            placeholder="write somethings about you experience or skills to describe you self [Max 256 chars]"
            className="rounded-lg p-4 bg-gray-100 border-2 border-solid border-black/10 font-mono font-medium text-sm"
          />
        </div>
        <div className="socialMedia">
          <label className="font-semibold text-lg sm:text-sm mb-4">
            Social Media Links
          </label>
          <div className="flex justify-evenly flex-wrap mx-auto gap-4 max-w-lg p-4">
            <div className="relative w-full">
              <XIcon className="absolute left-3 rounded-full w-5 h-5 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="url"
                name="twitterUrl"
                placeholder="X URL..."
                className="w-full px-12 rounded-lg p-2 bg-gray-100 border-2 border-solid border-black/10 font-mono font-medium text-sm"
              />
            </div>
            <div className="relative w-full">
              <BsLinkedin className="absolute left-3 fill-slate-600 rounded-full w-5 h-5 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="url"
                name="linkedInUrl"
                placeholder="linkedIn URL..."
                className="w-full px-12 rounded-lg p-2 bg-gray-100 border-2 border-solid border-black/10 font-mono font-medium text-sm"
              />
            </div>
            <div className="relative w-full">
              <BsGithub className="absolute left-3 rounded-full w-5 h-5 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="url"
                name="githubUrl"
                placeholder="github URL..."
                className="w-full px-12 rounded-lg p-2 bg-gray-100 border-2 border-solid border-black/10 font-mono font-medium text-sm"
              />
            </div>
            <div className="relative w-full">
              <BsYoutube className="absolute left-3 rounded-full w-5 h-5 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="url"
                name="youtubeUrl"
                placeholder="youtube channel URL..."
                className="w-full px-12 rounded-lg p-2 bg-gray-100 border-2 border-solid border-black/10 font-mono font-medium text-sm"
              />
            </div>
            <div className="relative w-full">
              <BsDribbble className="absolute left-3 rounded-full w-5 h-5 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="url"
                name="dribbleUrl"
                placeholder="dribble URL..."
                className="w-full px-12 rounded-lg p-2 bg-gray-100 border-2 border-solid border-black/10 font-mono font-medium text-sm"
              />
            </div>
            <div className="relative w-full">
              <BsInstagram className="absolute left-3 rounded-full w-5 h-5 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="url"
                name="instagramUrl"
                placeholder="instagram URL..."
                className="w-full px-12 rounded-lg p-2 bg-gray-100 border-2 border-solid border-black/10 font-mono font-medium text-sm"
              />
            </div>
          </div>
        </div>
        <EditButton />
      </Form>
    </div>
  );
};

export default SettingsUser;
