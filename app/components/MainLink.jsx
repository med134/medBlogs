import Image from "next/image";
import React from "react";
import { CustomLink } from "./CustomLinks";
import med from "../../public/images/logo.png";
import ProfileDown from "./ProfileDown";
import { Limelight } from "next/font/google";
import Link from "next/link";

const limelight = Limelight({
  subsets: ["latin"],
  variables: "-limelight",
  weight: "400",
  display: "swap",
});

const MainLink = ({ user, session }) => {
  return (
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
          className="object-cover w-16 h-16 dark:bg-light dark:rounded-md dark:w-14 dark:h-14"
          width={100}
          height={100}
          loading="lazy"
        />
        <span
          className={`${limelight.className} text-3xl ml-2 text-dark dark:text-light lg:hidden`}
        >
          medcode
        </span>
      </Link>
      <div className="flex items-center justify-evenly xl:ml-6 bg-transparent z-50">
        <CustomLink
          key="projects"
          href="/projects"
          title="projects"
          className="mx-4 uppercase dark:text-light"
          target="_blank"
        />
        <CustomLink
          key="templates"
          href="/templates"
          title="Templates"
          className="mx-4 uppercase dark:text-light"
          target="_blank"
        />
        <CustomLink
          key="about"
          href="/about"
          title="About Us"
          className="mx-4 uppercase dark:text-light"
          target="_blank"
        />
        {user || session ? (
          <>
            <CustomLink
              key="dashboard"
              href="/dashboard"
              title="Dashboard"
              className="mx-4 uppercase dark:text-light"
              target="_blank"
            />
            <ProfileDown user={user} />
          </>
        ) : (
          <CustomLink
            key="login"
            href="/login"
            title="Create Post"
            className="mx-4 uppercase dark:text-light"
            target="_blank"
          />
        )}
      </div>
    </div>
  );
};

export default MainLink;
