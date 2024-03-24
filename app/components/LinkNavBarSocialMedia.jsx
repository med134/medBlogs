import React from "react";
import { GithubIcon, LinkedInIcon } from "./Icons";
import { AiFillYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";

const LinkNavBarSocialMedia = () => {
  return (
    <>
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
    </>
  );
};

export default LinkNavBarSocialMedia;
