"use client";
import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "./Icons";
import med from "@/public/images/logo3.png";
import Link from "next/link";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import Image from "next/image";
import dynamic from "next/dynamic";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { FiX } from "react-icons/fi";
import { limelight } from "./Fonts";
const DynamicMega = dynamic(() => import("./MegaMenu"), {
  ssr: false,
});
const DynamicProfile = dynamic(() => import("./ProfileDown"), {
  ssr: false,
});
const CloseMenu = dynamic(() => import("./CloseMenu"), {
  ssr: false,
});
const SocialLinks = dynamic(() => import("./LinkNavBarSocialMedia"), {
  ssr: false,
});

const CustomLink = ({ href, title, className = "" }) => {
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
    h-[1px] inline-block
    absolute left-0 -bottom-0.5 bg-mainColor
    group-hover:w-full transition-[width] ease duration-300
    dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher("dark");
  const [isOpen, setIsOpen] = useState(false);
  const session = useSession();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const [sticky, setSticky] = useState(false);
  const [dropdown, setDropDown] = useState(false);
  const handelMenuDown = () => {
    if (dropdown) {
      setDropDown(false);
    } else {
      setDropDown(true);
    }
  };

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
      className={`header py-6 z-40 flex w-full items-center bg-transparent xl:px-6 ${
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

      <div
        className={`w-full px-24 flex justify-between items-center font-semibold xl:px-6 lg:hidden`}
      >
        <Link
          href="/"
          className="flex items-center justify-between flex-wrap cursor-pointer"
        >
          <Image
            src={med}
            alt="website-logo"
            className="object-cover w-14 h-14"
            width={100}
            height={100}
            priority={false}
          />
          <span
            className={`${limelight.className} text-3xl ml-2 text-dark dark:text-light`}
          >
            medCode
          </span>
        </Link>
        <nav className="flex items-center justify-evenly xl:ml-6">
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

          <button
            onMouseEnter={handelMenuDown}
            onMouseOver={() => setDropDown(true)}
            onMouseOverCapture={() => setDropDown(true)}
            className="mx-4 uppercase flex items-center justify-between text-gray-900 hover:border-b border-black md:w-auto md:p-0 dark:text-white"
          >
            Categories
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {dropdown && (
            <div
              onMouseEnter={() => setDropDown(true)}
              onMouseLeave={() => setDropDown(false)}
              className={`opacity-0 ${
                dropdown ? "opacity-100" : ""
              } transition-opacity duration-300 ease-in-out absolute top-24 left-0 w-full h-60 shadow-sm`}
            >
              <DynamicMega />
            </div>
          )}
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
        {session.status === "authenticated" && <DynamicProfile />}
      </div>
      <button
        name="theme-button"
        aria-label="change-theme"
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        className={`w-8 h-8 flex items-center lg:hidden mr-16 xl:mr-0 justify-center rounded-full p-1 transition-all duration-75 ease-linear delay-75 
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
          {/* close menu */}
          <CloseMenu handleClick={handleClick} session={session} />
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
            <SocialLinks />
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
