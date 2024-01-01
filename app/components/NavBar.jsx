"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from "./Icons";
import med from "@/public/images/logo3.png";
import logo from "@/public/images/logo.png";
import { AiFillYoutube } from "react-icons/ai";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import Image from "next/image";
import { signOut } from "next-auth/react";
import ProfileDown from "./ProfileDown";
import { Limelight } from "next/font/google";
import { BsInstagram } from "react-icons/bs";
import { useSession } from "next-auth/react";

const limelight = Limelight({
  subsets: ["latin"],
  variables: "-limelight",
  weight: "400",
  display: "swap",
});
const CustomLink = ({ href, title, className = "" }) => {
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
    h-[1px] inline-block  bg-dark
    absolute left-0 -bottom-0.5
    group-hover:w-full transition-[width] ease duration-300
    dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "" }) => {
  return (
    <Link
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
    >
      {title}
      <span
        className={`
          h-[1px] inline-block  bg-light
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300  
          dark:bg-dark`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const session = useSession();
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      className="w-full px-28 py-6 font-medium flex items-center justify-between sticky top-0 2xl:px-20
    dark:text-light bg-white dark:font-lexend dark:bg-dark shadow-sm z-10 lg:px-16 md:px-12 sm:px-8 xs:w-full
    "
    >
      <button
        className="flex-col justify-between items-center hidden ml-[100%] lg:flex"
        onClick={handleClick}
      >
        <div className="flex-col">
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            } `}
          ></span>
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            } `}
          ></span>
        </div>
      </button>

      <div className="w-full flex justify-between font-semibold lg:hidden">
        <Link
          href="/"
          className="flex items-center justify-between flex-wrap cursor-pointer"
        >
          <Image
            src={med}
            alt="logo"
            className="object-cover w-14 h-14"
            width={300}
            height={300}
          />
          <span
            className={`${limelight.className} text-3xl ml-2 text-dark dark:text-light`}
          >
            medCode
          </span>
        </Link>
        <nav className="flex items-center justify-between flex-wrap">
          <CustomLink
            href="/projects"
            title="projects"
            className="mx-4 uppercase"
            target="_blank"
          />
          <CustomLink
            href="/templates"
            title="Templates"
            className="mx-4 uppercase"
            target="_blank"
          />
        
          <CustomLink
            href="/about"
            title="Portfolio"
            className="mx-4 uppercase"
            target="_blank"
          />
          <CustomLink
            href="/dashboard"
            title="Dashboard"
            className="mx-4 uppercase"
            target="_blank"
          />
          {session.status === "authenticated" && <ProfileDown />}
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`w-8 h-8 ml-8 flex items-center justify-center rounded-full p-1 transition-all duration-75 ease-linear delay-75 
    ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
    `}
          >
            {mode === "light" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon
                className={
                  "fill-dark transition-all duration-75 ease-linear delay-75 animate-spin"
                }
              />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <div
          className="min-w-[60vw] sm:min-w-[70vw] sm:h-min flex flex-col justify-between z-30 items-center fixed top-[50%] sm:top-[42%] xs:top-[45%] left-2/4 -translate-x-1/2 -translate-y-1/2
    bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-8
    "
        >
          <nav className="flex items-center flex-col justify-center z-50">
            <div className="flex items-center justify-center xs:w-full mb-1">
              <Image
                src={logo}
                alt="logo_website"
                className="w-20 dark:bg-white dark:rounded-xl dark:p-1"
                priority
              />
              <div className="block mt-2">
                <p className="font-Yeseva text-3xl text-light dark:text-dark">
                  edCode
                </p>
                <h2 className="text-xs tracking-widest text-light dark:text-dark">
                  blog for programmers
                </h2>
              </div>
            </div>
            <div className="line bg-gray-600 w-full h-1"></div>
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="Portfolio"
              className="books"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className="projects"
              toggle={handleClick}
            />

            <CustomMobileLink
              href="/templates"
              title="Template"
              className="templates"
              toggle={handleClick}
            />
            

            <CustomMobileLink
              href="/dashboard"
              title="Dashboard"
              className=""
              toggle={handleClick}
            />
          </nav>
          {session.status === "authenticated" && (
            <button
              className="text-medium mt-2 text-light dark:text-dark font-semibold "
              onClick={signOut}
            >
              Logout
            </button>
          )}

          <nav className="flex items-center justify-center flex-wrap mt-2">
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

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`w-8 h-8 ml-3 flex items-center transition-all hover:scale-75 justify-center rounded-full p-1
    ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
    `}
            >
              {mode === "light" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default NavBar;
