"use client";
import React, { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { MoonIcon, SunIcon } from "./Icons";
import dynamic from "next/dynamic";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMenu5Fill } from "react-icons/ri";
import MainLink from "./MainLink";
import { IoCreateOutline } from "react-icons/io5";

const SmallLinksNavBar = dynamic(() => import("./SmallLinksNavBar"), {
  ssr: false,
});
const ProfileDown = dynamic(() => import("./ProfileDown"), { ssr: false });

const NavBaLinks = ({ user }) => {
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
      <div className="hidden lg:flex lg:justify-stretch  text-sm text-gray-500 rounded-lg  dark:text-gray-400 ">
        <div className="left-2">
          {user ? (
            <ProfileDown user={user} />
          ) : (
            <Link
              href="/login"
              className="text-white bg-gray-700 px-4 py-2 rounded-full text-sm tracking-wide font-bold cursor-pointer flex items-center"
            >
              <IoCreateOutline className="w-7" />
              Create Post
            </Link>
          )}
        </div>
        <div className="absolute right-2 flex justify-center items-center">
          <button
            data-collapse-toggle="navbar-search"
            aria-labelledby="menu-button"
            type="button"
            className="hover:bg-gray-100 mr-2 p-2 left-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="menu-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <FiX className="w-6 h-6" onClick={handleClick} />
            ) : (
              <RiMenu5Fill className="w-7 h-7" onClick={handleClick} />
            )}
          </button>
          <button
            name="theme-button"
            aria-label="change-theme"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`w-8 h-8 flex items-center justify-center rounded-full p-1 transition-all duration-75 ease-linear delay-75 
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
        </div>
      </div>
      <MainLink user={user} />
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
          <SmallLinksNavBar user={user} handelMode={handelMode} mode={mode} />
        </div>
      )}
    </header>
  );
};

export default NavBaLinks;
