"use client";
import React from "react";
import { useFormState } from "react-dom";
import { sendMessage } from "../utils/action";

const FormMessage = () => {
  const [state, formAction] = useFormState(sendMessage, undefined);
  return (
    <form action={formAction} className="mb-12 w-full px-10">
      <div className="mb-3 w-full">
        <label className="block font-medium mb-[2px] text-teal-700">Name</label>
        <input
          type="name"
          name="name"
          className="px-2 py-2 border w-full outline-none rounded-md"
          placeholder="Name"
        />
      </div>
      <div className="mb-3 w-full">
        <label className="block font-medium mb-[2px] text-teal-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="px-2 py-2 border w-full outline-none rounded-md"
          placeholder="Enter your email address"
        />
      </div>
      <div className="mb-3 w-full">
        <label className="block font-medium mb-[2px] text-teal-700">
          Message
        </label>
        <textarea
          rows={5}
          name="message"
          className="px-2 py-2 border rounded-[5px] w-full outline-none"
        />
      </div>
      <button className="mb-6 inline-block w-full rounded bg-teal-400 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-teal-500">
        Send
      </button>
      {state && state.error}
    </form>
  );
};

export default FormMessage;
