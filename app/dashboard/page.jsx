"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function DashBoard() {
  const session = useSession();
  console.log(session);
  return (
    <div>
      <button
        onClick={() => {
          signIn("github");
        }}
        className="w-full mt-4 text-center px-6 py-2 border flex justify-center items-center gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
      >
        <FcGoogle className="w-6 h-6" />
        <span className="font-semibold">Login with Google</span>
      </button>
      <button onClick={() => signOut()}>out</button>
    </div>
  );
}
