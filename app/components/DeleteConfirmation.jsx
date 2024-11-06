"use client";
import React from "react";
import Form from "next/form";
import { handelDeleteBlog } from "../utils/action";
import { RiDeleteBin5Line, RiCloseFill } from "react-icons/ri";
import { DeleteButton } from "./SearchButton";

const DeleteConfirmation = ({ blogId, onClose }) => {
  console.log("blog id 2",blogId);
  return (
    <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 relative">
        <RiCloseFill
          onClick={onClose}
          className="fill-gray-400 hover:fill-red-500 float-right w-7 h-7 cursor-pointer"
        />
        <div className="my-8 text-center flex flex-col justify-end items-center">
          <RiDeleteBin5Line className="fill-red-500 w-14 h-16 flex justify-center" />
          <h4 className="text-gray-800 text-lg font-semibold mt-4">
            Are you sure you want to delete that article
          </h4>
          <p className="text-sm text-gray-600 mt-4">
            Touch and hold the blog you want to delete, deleting process...
          </p>
        </div>
        <div className="flex justify-around items-center">
          <Form
            action={handelDeleteBlog}
            className="w-full flex items-center justify-center cursor-pointer px-4 py-2 rounded-lg text-white text-sm tracking-wide bg-red-500 hover:bg-red-400 active:bg-red-500"
          >
            <input type="" hidden name="id" id="id" value={blogId} readOnly />
            <DeleteButton />
          </Form>
          <button
            type="button"
            onClick={onClose}
            className="w-full ml-2 cursor-pointer px-4 py-2 rounded-lg text-white text-sm tracking-wide bg-gray-500 hover:bg-gray-400 active:bg-gray-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
