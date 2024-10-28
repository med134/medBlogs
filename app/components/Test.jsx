import React from "react";
import { FcGoogle } from "react-icons/fc";
import {
  LoginWithGoogle,
  RegisterUser,
  handelLoginGithub,
} from "../utils/action";
import Image from "next/image";

const Test = () => {
  return (
    <div className="w-full p-10 bg-white shadow-lg sm:rounded-lg flex justify-center">
      <div className="w-full flex-1 p-5 shadow-md">
        <div className="flex justify-center py-4 px-10">
          <h1 className="text-3xl font-sans">
            Create an account in{" "}
            <span className="text-mainColor font-bold">
              MedCode Community !
            </span>
          </h1>
        </div>
        <div className="flex justify-center items-center lg:flex lg:flex-col">
          <form action={LoginWithGoogle} className=" px-10 flex w-full">
            <button className="w-full mt-4 text-center px-6 py-2 border flex justify-center items-center gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
              <FcGoogle className="h-6 w-6 " />
              <span className="dark:text-light">Login with Google</span>
            </button>
          </form>
          <form action={handelLoginGithub} className="px-10 flex w-full">
            <button className="text-white w-full mt-4  bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-center items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 ">
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
          </form>
        </div>
        <div className="py-4 border-b text-center">
          <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
            Or sign In with Cartesian E-mail
          </div>
        </div>
        <form className="px-4 mt-4 " action={RegisterUser}>
          <div className="grid grid-cols-2 gap-6">
            <input
              className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              type="name"
              placeholder="full name"
            />
            <input
              className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              type="email"
              placeholder="Email"
            />
            <input
              className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              type="password"
              placeholder="Password"
            />
            <input
              className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              type="password"
              placeholder="repeat password"
            />
          </div>
          <button
            type="submit"
            className="mt-5 tracking-wide font-semibold bg-[#2b7aa6] text-white-500 w-full py-4 rounded-lg hover:bg-[#2b9aa2] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
          >
            <svg
              className="w-6 h-6 -ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="8.5" cy={7} r={4} />
              <path d="M20 8v6M23 11h-6" />
            </svg>
            <span className="ml-">Sign In</span>
          </button>
        </form>
        <p className="py-6 text-xs text-gray-600 text-center">
          I agree to abide by Cartesian Kinetics
          <a
            href="terms-and-conditions"
            className="border-b border-gray-500 border-dotted hover:text-blue-500"
          >
            Terms of Service
          </a>
          and its
          <a
            href="privacy-policy"
            className="border-b border-gray-500 border-dotted hover:text-blue-500"
          >
            Privacy Policy
          </a>
        </p>
      </div>
      <div className="flex-3 text-center lg:flex">
        <Image
          src={
            "https://res.cloudinary.com/djcnq7nmj/image/upload/v1730126500/Tablet_login-bro_c2gqmz.png"
          }
          alt=""
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Test;
