"use client";
import React, { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { MoonIcon, SunIcon } from "./Icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { usePathname } from "next/navigation";
import MainLink from "./MainLink";
import SmallLinksNavBar from "./SmallLinksNavBar";

const NavBaLinks = ({ session }) => {
  const [mode, setMode] = useThemeSwitcher("dark");
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

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
          ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
          : "absolute"
      }`}
    >
      <div className="items-center hidden lg:inline-flex ml-[94%] xs:ml-[85%] p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  dark:text-gray-400 ">
        <button
          data-collapse-toggle="navbar-search"
          aria-labelledby="menu-button"
          type="button"
          className="hover:bg-gray-100 ml-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
          <SmallLinksNavBar session={session} />
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
        </div>
      )}
    </header>
  );
};

export default NavBaLinks;
