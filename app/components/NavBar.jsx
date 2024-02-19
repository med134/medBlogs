"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
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
import { FiX } from "react-icons/fi";
import SearchTwo from "./SearchTwo";

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
    h-[1px] inline-block
    absolute left-0 -bottom-0.5 bg-[#075985]
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
  const [mode, setMode] = useThemeSwitcher("light");
  const [isOpen, setIsOpen] = useState(false);
  const session = useSession();
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });
  return (
    <header
      className={`header py-6 z-40 flex w-full items-center bg-transparent xl:px-10 ${
        sticky
          ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
          : "absolute"
      }`}
    >
      <div className="items-center hidden lg:inline-flex ml-[94%] xs:ml-[85%] p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  dark:text-gray-400 ">
        <button
          type="button"
          id="bt-search"
          aria-label="search-button-label"
          data-collapse-toggle="navbar-search"
          onClick={handleClick}
          className="hover:bg-gray-100 dark:text-light rounded-lg focus:outline-none p-2 focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span id="search-button-label" className="sr-only">
            Search Button
          </span>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </button>
        <button
          data-collapse-toggle="navbar-search"
          aria-labelledby="menu-button"
          onClick={handleClick}
          type="button"
          className="hover:bg-gray-100 ml-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="menu-search"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>
      </div>

      <div className="w-full px-16 flex justify-stretch items-center font-semibold xl:px-8 lg:hidden">
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
            className={`${limelight.className} text-3xl ml-2 text-dark dark:text-light xl:hidden`}
          >
            medCode
          </span>
        </Link>
        <nav className="flex items-center justify-stretch ml-24 xl:ml-16 ">
          <CustomLink
            href="/projects"
            title="projects"
            className="mx-4 uppercase dark:text-light"
            target="_blank"
          />
          <CustomLink
            href="/templates"
            title="Templates"
            className="mx-4 uppercase dark:text-light"
            target="_blank"
          />

          <CustomLink
            href="/about"
            title="Portfolio"
            className="mx-4 uppercase dark:text-light"
            target="_blank"
          />
          {session.status === "authenticated" ? (
            <CustomLink
              href="/dashboard"
              title="Dashboard"
              className="mx-4 uppercase dark:text-light"
              target="_blank"
            />
          ) : (
            <CustomLink
              href="/dashboard/login"
              title="Create Post"
              className="mx-4 uppercase dark:text-light"
              target="_blank"
            />
          )}
        </nav>
        {session.status === "authenticated" && <ProfileDown />}
        <SearchTwo />
      </div>
      <button
        name="theme-button"
        aria-label="change-theme"
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        className={`w-8 h-8 flex items-center lg:hidden mr-10 xl:mr-0 justify-center rounded-full p-1 transition-all duration-75 ease-linear delay-75 
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
      {isOpen ? (
        <div
          className="min-w-[60vw] sm:min-w-[70vw] sm:h-min flex flex-col justify-between z-30 items-center fixed top-[50%] sm:top-[42%] xs:top-[45%] left-2/4 -translate-x-1/2 -translate-y-1/2
    bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-8
    "
        >
          <nav className="flex items-center flex-col justify-center z-40">
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
            <SearchTwo />
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
              title="Templates"
              className="templates"
              toggle={handleClick}
            />
            {session.status === "authenticated" ? (
              <CustomMobileLink
                href="/dashboard"
                title="Dashboard"
                className=""
                toggle={handleClick}
              />
            ) : (
              <CustomMobileLink
                href="/dashboard/login"
                title="Login"
                className=""
                toggle={handleClick}
              />
            )}
          </nav>
          {session.status === "authenticated" && (
            <button
              name="log-button"
              aria-label="login/logOut"
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
              name="theme-button"
              aria-label="theme"
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
