import React from "react";
import Form from "next/form";
import { editUserProfile } from "../utils/action";
import ImageUploader from "./ImageUploader";

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
          <ImageUploader imageUrl={imageUrl} />
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
          <textarea
            className="w-1/2 ml-20 px-6 py-1.5 h-28 outline-mainColor border flex justify-start"
            type="text"
            placeholder="Write something about you..."
            rows={4}
            minLength="10"
            maxLength="50"
            name="about"
          />
          <button
            type="submit"
            className="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b dark:shadow-blue-900 shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400 hover:-tranneutral-y-px "
          >
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};

export default SettingsProfile;
