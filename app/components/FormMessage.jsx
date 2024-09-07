"use client";
import React, { useState } from "react";
import { useFormState } from "react-dom";
import { sendMessage } from "../utils/action";
import IsUpdate from "./IsUpdate";

const FormMessage = () => {
  const [state, formAction] = useFormState(sendMessage, undefined);

  return (
    <form action={formAction} className="mb-12 w-full px-10">
      {state && (
        <span className="bg-green-500 text-white px-10 py-2">{state.succuss}</span>
      )}
      <div className="mb-3 w-full">
        <label className="block font-medium mb-[2px] text-teal-700 dark:text-light">Name</label>
        <input
          type="name"
          required
          name="name"
          className="px-2 py-2 border w-full outline-none rounded-md"
          placeholder="Name"
        />
      </div>
      <div className="mb-3 w-full">
        <label className="block font-medium mb-[2px] text-teal-700 dark:text-light">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="px-2 py-2 border w-full outline-none rounded-md"
          placeholder="Enter your email address"
        />
      </div>
      <div className="mb-3 w-full">
        <label className="block font-medium mb-[2px] text-teal-700 dark:text-light">
          Message
        </label>
        <textarea
          rows={5}
          name="message"
          maxlength="300"
          minlength="10"
          required
          className="px-2 py-2 border rounded-[5px] w-full outline-none"
        />
      </div>
      <button className="mb-6 inline-block w-full rounded bg-teal-400 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-teal-500">
        Send
      </button>
      {state && (
        <h3 className="text-red-500 px-10 py-2">{state.error}</h3>
      )}
    </form>
  );
};

export default FormMessage;
