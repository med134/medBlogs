"use client";
import React, { useState, useActionState } from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { addPassword } from "../utils/action";
import { MdOutlineCancelPresentation } from "react-icons/md";
import SearchLoading from "./SearchLoading";

const PasswordModal = ({ user, handelOpen }) => {
  const [confirmationPass, setConfirmationPass] = useState("");
  const [password, setPassword] = useState("");
  const [isMatch, setIsMatch] = useState(true);
  const [message, action, isPending] = useActionState(addPassword, null);

  const handleConfirmPassword = (e) => {
    const value = e.target.value;
    setConfirmationPass(value);
    setIsMatch(value !== password);
  };

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center z-99 bg-[rgba(0,0,0,0.5)] overflow-auto`}
    >
      {isPending && <SearchLoading />}
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
        <MdOutlineCancelPresentation
          onClick={handelOpen}
          className="absolute right-2 top-1 w-6 h-6 cursor-pointer text-mainColor hover:text-red-600"
        />
        <h4 className="text-center text-lg font-semibold text-gray-800 mb-6">
          Security & Password
        </h4>
        <form action={action} className="space-y-4">
          <div className="flex flex-col space-y-2">
            <input name="id" value={user._id} hidden readOnly />
            <input name="name" value={user.name} hidden readOnly />
            <input name="email" value={user.email} hidden readOnly />
            <label className="text-sm text-gray-600">Password</label>
            <div className="relative w-full">
              <RiLockPasswordLine className="absolute left-3 rounded-full w-5 h-5 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                className="w-full border-2 rounded-lg font-mono bg-gray-100 placeholder:capitalize px-12 py-1.5 outline-mainColor"
                type="password"
                placeholder="password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm text-gray-600">Confirm Password</label>
            <div className="relative w-full">
              <RiLockPasswordLine className="absolute left-3 rounded-full w-5 h-5 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                className={`w-full border-2 rounded-lg font-mono bg-gray-100 placeholder:capitalize px-12 py-1.5 outline-mainColor ${
                  isMatch && "outline-red-600"
                }`}
                type="password"
                required
                placeholder="confirm password"
                value={confirmationPass}
                onChange={(e) => handleConfirmPassword(e)}
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={isMatch && true}
            className={`px-5 w-full py-2 rounded-md text-light  ${
              isMatch
                ? "bg-gray-500 text-dark cursor-not-allowed"
                : "bg-mainColor hover:bg-cyan-600"
            }`}
          >
            {isPending ? "submitting..." : "submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordModal;
