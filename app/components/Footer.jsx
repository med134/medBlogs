"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../images/logo.png";
import { AiFillYoutube } from "react-icons/ai";
import { motion } from "framer-motion";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
} from "./Icons";
import {BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="p-12 bg-white first:font-lexend xs:p-8 dark:bg-dark dark:text-light">
      <div className="ourFooter gap-6 md:flex md:flex-wrap pb-6">
        <div className="brand sm:col-span-2">
          <div
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <Image
              src={logo}
              alt="logo_website"
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
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              +212600462196
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800 dark:text-gray-400">Email:</p>
            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
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
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
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
            <motion.a
              href="https://www.youtube.com/@VivaCode99"
              target={"_blank"}
              className="w-6 mx-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <AiFillYoutube size={34} className="fill-red-600" />
            </motion.a>
            <motion.a
              href="https://twitter.com/SimoDakir5"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 ml-4 sm:mx-1"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/med_dakir/"
              target={"_blank"}
              className="w-6 mx-3"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <BsInstagram size={24} className="fill-pink-600" />
            </motion.a>
            <motion.a
              href="https://github.com/med134"
              target={"_blank"}
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon fontSize={26} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mohammed-dakir/"
              target={"_blank"}
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon fontSize={26}/>
            </motion.a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Follow me on My Social media accounts for new projects and news
          </p>
        </div>
      </div>
      <div className="pt-5 text-center pb-10 border-t border-gray-600 py-4 lg:flex-row ">
        <p className="text-sm text-gray-600">
          © Copyright 2023{" "}
          <Link
            href="https://www.medcode.dev/about"
            target="_blank"
            className="font-bold text-borderColor"
          >
            MED DAKIR
          </Link>
          . All rights reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;
