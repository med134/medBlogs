"use client";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const session = useSession();
  console.log(session);
  return (
    <>
      <div className="flex min-h-0 w-full items-center justify-center bg-gray-100 p-28 lg:p-16 md:p-8 sm:p-4 sm:block">
        <div className="m-2 w-full rounded-2xl bg-gray-400 bg-cover bg-center text-white sm:hidden">
       {/*    <img
            height={400}
            width={400}
            className="w-full h-full object-fill rounded-2xl"
            alt="image_blog"
            src={
              "https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg?w=740&t=st=1692306911~exp=1692307511~hmac=934f6612ddfadbc6609f4eb967ba1f967be7adb40fe57751209a33792fcabc86"
            }
          /> */}
        </div>
        <div className="w-full sm:w-full">
          <div className="p-8 xs:p-4">
            <h1 className="text-3xl font-black text-slate-700">Sign In</h1>
            <p className="mt-2 mb-5 text-base leading-tight text-gray-600">
              Create an account in{" "}
              <span className="font-bold text-blue-500 text-xl">
                MedCode Community ! 
              </span> to publish blogs.
            </p>

            <button
              onClick={() => {
                signIn("google");
              }}
              className="w-full mt-4 text-center px-6 py-2 border flex justify-center items-center gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
            >
              <FcGoogle className="h-6 w-6" />
              <span>Login with Google</span>
            </button>
            <button
              onClick={() => {
                signIn("github");
              }}
              type="button"
              className="text-white w-full mt-4  bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-center items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
            >
              <svg
                className="w-4 h-4 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              Sign in with Github
            </button>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Dont have an account ?
                <Link
                  href="/dashboard/register"
                  className="font-bold text-blue-600 no-underline hover:text-blue-400"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
