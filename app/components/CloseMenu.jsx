import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import SearchTwo from "./SearchTwo";

const CloseMenu = ({ handleClick, session }) => {
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
  return (
    <nav className="flex items-center flex-col justify-center z-40">
      <div className="flex items-center justify-center xs:w-full mb-1">
        <Image
          src={logo}
          alt="logo_website"
          className="w-20 dark:bg-white dark:rounded-xl dark:p-1"
          priority={false}
          width={100}
          height={100}
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
      <SearchTwo className={"text-light"} />
      <div className="line bg-gray-600 w-full h-1"></div>
      <CustomMobileLink
        href="/"
        title="Home"
        className=""
        toggle={handleClick}
      />
      <CustomMobileLink
        href="/category/all"
        title="Categories"
        className="categories"
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
  );
};

export default CloseMenu;
