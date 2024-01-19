"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";
import { AiFillYoutube } from "react-icons/ai";
import { GithubIcon, LinkedInIcon } from "./Icons";
import { BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="p-12 bg-white first:font-lexend xs:p-8 dark:bg-dark dark:text-light">
      <div className="ourFooter gap-6 md:flex md:flex-wrap pb-6">
        <div className="brand sm:col-span-2">
          <div
            aria-labelledby="medCode Blog"
            className="inline-flex items-center"
            role="presentation"
          >
            <Image
              src={logo}
              alt="medCode blogs & articles"
              className="w-20 dark:bg-white dark:rounded-xl dark:p-1"
            />
            <div className="block mt-2">
              <h2 className="font-Yeseva text-3xl text-gray-800 dark:text-white">
                edCode
              </h2>
              <p className="text-xs tracking-widest">blog for programmers</p>
            </div>
          </div>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800 dark:text-light">
              Explore the latest insights, tutorials,Projects, free code, and
              expert advice on programming and software development{" "}
            </p>
          </div>
        </div>
        <div className="contact space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900 dark:text-gray-400">
            Contacts
          </p>
          <div className="flex dark:text-gray-400">
            <p className="mr-1 text-gray-800 dark:text-gray-400">Phone:</p>
            <a
              href="tel:+212600462196"
              aria-labelledby="Our phone"
              rel="noopener noreferrer"
              name="Our phone"
              className="transition-colors hover:text-purple-800 hover:font-semibold duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              +212600462196
            </a>
          </div>
          <div className="flex">
            <label className="mr-1 text-gray-800 dark:text-gray-400">
              Email:
            </label>
            <a
              href="mailto:info@lorem.mail"
              aria-labelledby="Our email"
              rel="noopener noreferrer"
              name="Our email"
              className="transition-colors hover:text-purple-800 hover:font-semibold duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              med@vivacode.dev
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800 dark:text-gray-400">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              name="Our address"
              aria-labelledby="Our address"
              className="transition-colors hover:text-purple-800 hover:font-semibold duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              312 Lovely Street, NY
            </a>
          </div>
        </div>
        <div className="social">
          <span className="text-base font-bold tracking-wide text-gray-900 dark:text-gray-400">
            Social Media
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="https://www.youtube.com/channel/UC1dm-Rczjp52egzJTL__s8A"
              target={"_blank"}
              rel="noopener noreferrer"
              onBlur={() => console.log("Visit our youtube channel")}
              aria-label=""
              name="Our channel youtube"
              className="w-6 mx-3 sm:mx-1 focus:outline-none focus:ring focus:border-red-600"
            >
              <AiFillYoutube
                size={34}
                className="fill-red-600 hover:scale-y-150"
              />
            </a>
            <a
              href="https://www.instagram.com/med_dakir/"
              target={"_blank"}
              rel="noopener noreferrer"
              aria-label=""
              onBlur={() => console.log("Visit our Instagram profile")}
              name="Visit our Instagram profile"
              className="w-6 mx-3 text-pink-600 hover:text-pink-800 focus:outline-none focus:ring focus:border-pink-600"
            >
              <BsInstagram size={24} className="hover:scale-y-150" />
            </a>
            <a
              href="https://github.com/med134"
              target={"_blank"}
              rel="noopener noreferrer"
              onBlur={() => console.log("Visit our github profile")}
              name="Our github account"
              aria-label=""
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1 focus:outline-none focus:ring focus:border-light focus:bg-light"
            >
              <GithubIcon fontSize={26} className="hover:scale-y-150" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-dakir/"
              target={"_blank"}
              rel="noopener noreferrer"
              onBlur={() => console.log("Visit our LinkedIn profile")}
              name="Our Linkedin"
              aria-label=""
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1 focus:outline-none focus:ring focus:border-light focus:bg-light"
            >
              <LinkedInIcon fontSize={26} className="hover:scale-y-150" />
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Follow me on My Social media accounts for new projects and news
          </p>
        </div>
      </div>
      <div className="pt-5 text-center pb-10 border-t border-gray-600 py-4 lg:flex-row ">
        <div className="text-sm text-gray-600">
          © Copyright 2024{" "}
          <Link
            href="https://www.medcode.dev/about"
            target="_blank"
            className="font-bold text-borderColor"
          >
            MED DAKIR
          </Link>
          . All rights reserved./
          <Link
            href="https://www.medcode.dev/cookies"
            target="_blank"
            className="text-sm font-bold underline hover:text-purple-800 hover:font-semibold"
          >
            privacy policy
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
