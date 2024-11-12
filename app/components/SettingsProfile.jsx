import React from "react";
import Form from "next/form";
import { editUserProfile } from "../utils/action";
import Image from "next/image";

const SettingsProfile = ({ imageUrl, name, email, userId }) => {
  return (
    <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-16">
      <div
        id="profile"
        className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
      >
        <Form
          action={editUserProfile}
          className="p-4 md:p-12 text-center lg:text-left"
        >
          {/* Image for mobile view */}
          <Image
            className="block rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
            src={imageUrl}
            width={300}
            height={300}
            alt="user image"
          />
          <h1 className="text-3xl font-bold pt-8 lg:pt-0 uppercase">{name}</h1>
          <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-mainColor opacity-25" />
          {/* Job and Country */}
          <div className="w-full py-6 flex justify-evenly items-center">
            <input name="id" value={userId} hidden readOnly />
            <input name="name" value={name} hidden readOnly />
            <input name="email" value={email} hidden readOnly />
            <div className="border-2 relative">
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
            <label htmlFor="input" className="font-semibold text-lg mb-4">
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
          <button
            type="submit"
            className="rounded-lg p-3 w-1/2 bg-cyan-700/20 border-2 border-solid border-green-500/20 transition-colors hover:bg-cyan-500/40 font-medium text-base leading-none inline-flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width={18}
              height={18}
            >
              <path
                fillRule="evenodd"
                d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-bold">Edit now!</span>
          </button>
        </Form>
      </div>
    </div>
  );
};

export default SettingsProfile;
