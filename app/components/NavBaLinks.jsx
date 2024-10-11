"use client";
import React, { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { MoonIcon, SunIcon } from "./Icons";
import dynamic from "next/dynamic";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MainLink from "./MainLink";
const SmallLinksNavBar = dynamic(() => import("./SmallLinksNavBar"), {
  ssr: false,
});
const ProfileDown = dynamic(() => import("./ProfileDown"), { ssr: false });

const NavBaLinks = ({ session }) => {
  const [mode, setMode] = useThemeSwitcher("dark");
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const handelMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const path = usePathname();
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
      className={`${
        path.startsWith("/dashboard") ? "hidden" : "flex"
      } header py-6 z-40 w-[100%] items-center bg-transparent xl:px-6 ${
        sticky
          ? "!fixed !z-[80] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
          : "absolute"
      }`}
    >
      <div className="hidden lg:inline-flex  text-sm text-gray-500 rounded-lg  dark:text-gray-400 ">
        <button
          data-collapse-toggle="navbar-search"
          aria-labelledby="menu-button"
          type="button"
          className="hover:bg-gray-100 ml-2 p-2 left-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="menu-search"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <FiX className="w-6 h-6" onClick={handleClick} />
          ) : (
            <svg
              onClick={handleClick}
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
        <div className="fixed right-4">
          {session ? (
            <ProfileDown session={session} className="" />
          ) : (
            <Link
              href="/login"
              className="text-white bg-gray-700 px-4 py-2 rounded-full text-sm tracking-wide font-bold cursor-pointer flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 fill-current mr-2"
                viewBox="0 0 24 24"
              >
                <g fillRule="evenodd" clip-rule="evenodd">
                  <path
                    d="M7 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6a1 1 0 1 1 2 0v6a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h6a1 1 0 1 1 0 2z"
                    data-original="#000000"
                  />
                  <path
                    d="M19.197 4a.803.803 0 0 0-.567.235l-7.877 7.877-.379 1.514 1.514-.379 7.877-7.877A.803.803 0 0 0 19.197 4zm-1.981-1.18a2.802 2.802 0 1 1 3.963 3.964l-8.073 8.073a1 1 0 0 1-.464.263l-3.4.85a1 1 0 0 1-1.212-1.213l.85-3.399a1 1 0 0 1 .263-.464z"
                    data-original="#000000"
                  />
                  <path
                    d="M15.293 5.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414z"
                    data-original="#000000"
                  />
                </g>
              </svg>
              Create Post
            </Link>
          )}
        </div>
      </div>
      <MainLink session={session} />
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
      {isOpen && (
        <div>
          {" "}
          <SmallLinksNavBar
            session={session}
            handelMode={handelMode}
            mode={mode}
          />
        </div>
      )}
    </header>
  );
};

export default NavBaLinks;
