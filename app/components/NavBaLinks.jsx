"use client";
import React, { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { MoonIcon, SunIcon } from "./Icons";
import { Limelight } from "next/font/google";
import dynamic from "next/dynamic";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import med from "@/public/images/logo-med-removebg-preview.webp";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMenu5Fill } from "react-icons/ri";
import MainLink from "./MainLink";
import Image from "next/image";
const limelight = Limelight({
  subsets: ["latin"],
  variables: "-limelight",
  weight: "400",
  display: "swap",
});
const SmallLinksNavBar = dynamic(() => import("./SmallLinksNavBar"), {
  ssr: false,
});

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
          <Link
            href="/"
            className="cursor-pointer"
          >
            <Image
              src={med}
              alt="website-logo"
              className="object-cover w-11 h-11 dark:bg-light dark:rounded-md"
              width={100}
              height={100}
              loading="lazy"
            />
          </Link>
        </div>
        <div className="absolute right-2 flex justify-center items-center">
          <button
            data-collapse-toggle="navbar-search"
            aria-labelledby="menu-button"
            type="button"
            className="hover:bg-gray-100 p-2 left-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
            className={`w-8 h-8 flex items-center justify-center mr-2 rounded-full p-1 transition-all duration-75 ease-linear delay-75 
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
