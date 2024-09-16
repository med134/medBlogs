import React from "react";
import logo from "@/public/images/logo.png";
import { CustomMobileLink } from "./CustomLinks";
import dynamic from "next/dynamic";
const SearchTwo = dynamic(() => import("./SearchTwo"));
import Image from "next/image";
import { handelLogOut } from "../utils/action";
import { GithubIcon, LinkedInIcon } from "./Icons";
import { AiFillYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { MoonIcon, SunIcon } from "./Icons";
import Link from "next/link";

const SmallLinksNavBar = ({ session }) => {
  return (
    <div
      className="min-w-[60vw] fixed xs:absolute xs:top-80 sm:min-w-[70vw] sm:h-min flex flex-col justify-between z-9999 items-center top-[50%] sm:top-[20%] left-2/4 -translate-x-1/2 -translate-y-1/2
bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-8
"
    >
      <div className="flex items-center flex-col justify-center z-9999 max-w-full">
        <div className="flex items-center justify-center xs:w-full mb-1">
          <Image
            src={logo}
            alt="logo_website"
            className="w-20 dark:bg-white dark:rounded-xl dark:p-1"
            priority={false}
            width={100}
            height={100}
            quality={30}
          />
          <div className="block mt-2">
            <span className="font-Yeseva text-3xl text-light dark:text-dark">
              edCode
            </span>
            <h3 className="text-xs tracking-widest text-light dark:text-dark">
              blog for programmers
            </h3>
          </div>
        </div>
        <SearchTwo
          className={
            "text-light xs:placeholder:text-light md:placeholder:text-light"
          }
        />
        <div className="line bg-gray-600 w-full h-1"></div>
        <CustomMobileLink
          href="/"
          title="Home"
          className=""
        />
        <CustomMobileLink
          href="/contact-us"
          title="Contact us"
          className="contact"
        />
        <CustomMobileLink
          href="/projects"
          title="Projects"
          className="projects"
        />

        <CustomMobileLink
          href="/templates"
          title="Templates"
          className="templates"
        />
        <CustomMobileLink
          href="/dev.to-blogs"
          title="DEV.TO"
          className="templates"
        />
        {session?.user ? (
          <CustomMobileLink
            href="/dashboard"
            title="Dashboard"
            className=""
          />
        ) : (
          <CustomMobileLink
            href="/login"
            title="Login"
            className=""
          />
        )}
      </div>
      {session?.user && (
        <form action={handelLogOut}>
          <button
            name="log-button"
            aria-label="login/logOut"
            className="text-medium mt-2 text-light dark:text-dark font-semibold "
          >
            Logout
          </button>
        </form>
      )}
      <div className="flex items-center justify-center flex-wrap mt-2">
        <Link
          href="https://www.linkedin.com/in/mohammed-dakir/"
          target={"_blank"}
          className="w-6 ml-4 sm:mx-1"
        >
          <LinkedInIcon />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UC1dm-Rczjp52egzJTL__s8A"
          target={"_blank"}
          className="w-6 mx-3 sm:mx-1"
        >
          <AiFillYoutube size={34} className="fill-red-600" />
        </Link>
        <Link
          href="https://www.instagram.com/med_dakir/"
          target={"_blank"}
          className="w-6 mx-3"
        >
          <BsInstagram size={24} className="fill-pink-700" />
        </Link>
        <Link
          href="https://github.com/med134"
          target={"_blank"}
          className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
        >
          <GithubIcon />
        </Link>
      </div>
    </div>
  );
};

export default SmallLinksNavBar;
