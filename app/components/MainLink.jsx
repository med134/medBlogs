import Image from "next/image";
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import { CustomLink } from "./CustomLinks";
import med from "@/public/images/logo-med-removebg-preview.webp";
import { limelight } from "./Fonts";
const DynamicProfile = dynamic(() => import("./ProfileDown"));

const MainLink = ({session}) => {
  return (
    <div
      className={`w-full px-24 flex justify-between items-center font-semibold xl:px-6`}
    >
      <Link
        href="/"
        className="flex items-center justify-between flex-wrap cursor-pointer"
      >
        <Image
          src={med}
          alt="website-logo"
          className="object-cover w-16 h-16 dark:bg-light dark:rounded-md dark:w-14 dark:h-14"
          width={100}
          height={100}
          loading="lazy"
        />
        <span
          className={`${limelight.className} text-3xl ml-2 text-dark dark:text-light lg:hidden`}
        >
          medCode
        </span>
      </Link>
      <div className="flex items-center justify-evenly xl:ml-6 bg-transparent z-50">
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
          title="About Us"
          className="mx-4 uppercase dark:text-light"
          target="_blank"
        />
        <CustomLink
          href="/dev.to-blogs"
          title="DEV.TO"
          className="mx-4 uppercase dark:text-light"
          target="_blank"
        />

        {session ? (
          <CustomLink
            href="/dashboard"
            title="Dashboard"
            className="mx-4 uppercase dark:text-light"
            target="_blank"
          />
        ) : (
          <CustomLink
            href="/login"
            title="Create Post"
            className="mx-4 uppercase dark:text-light"
            target="_blank"
          />
        )}
        <>{session?.user && <DynamicProfile session={session} />}</>
      </div>
    </div>
  );
};

export default MainLink;
