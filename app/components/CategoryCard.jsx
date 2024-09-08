import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const CategoryCard = () => {
  return (
    <div className="w-full flex justify-start items-center mb-4 sm:mb-2">
      <a
        href="https://www.youtube.com/channel/UC1dm-Rczjp52egzJTL__s8A"
        target={"_blank"}
        rel="noopener noreferrer"
        aria-label="Visit our youtube channel"
        name="Our channel youtube"
        className="w-auto flex justify-start p-2 hover:translate-y-1 ease-out all bg-red-600 rounded-sm items-center sm:mx-1 focus:outline-none focus:ring focus:border-red-600"
      >
        <AiFillYoutube size={24} className="text-white" />
      </a>
      <a
        href="https://www.instagram.com/med_dakir/"
        target={"_blank"}
        rel="noopener noreferrer"
        aria-label="Visit our Instagram profile"
        name="Visit our Instagram profile"
        className="w-auto ml-5 p-2 flex bg-gradient-to-r hover:translate-y-1 from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-sm focus:outline-none focus:ring focus:border-pink-600"
      >
        <BsInstagram size={24} className="text-white" />
      </a>
      <a
        href="https://x.com/mohammedda1288?s=21"
        target={"_blank"}
        rel="noopener noreferrer"
        aria-label="Visit our X profile"
        name="Visit our X profile"
        className="w-auto ml-5 flex p-2 rounded-sm text-center hover:translate-y-1 bg-dark focus:outline-none focus:ring focus:border-pink-600"
      >
        <FaSquareXTwitter size={24} className="text-white" />
      </a>
      <a
        href="https://www.linkedin.com/in/med-dkr/"
        target={"_blank"}
        rel="noopener noreferrer"
        aria-label="Visit our LinkedIn profile"
        name="Visit our LinkedIn profile"
        className="w-auto ml-5 flex bg-[#0a66c2] p-2 rounded-sm hover:translate-y-1 focus:outline-none focus:ring focus:border-pink-600"
      >
        <FaLinkedin size={24} className="text-white" />
      </a>
      <a
        href="https://github.com/med134"
        target={"_blank"}
        rel="noopener noreferrer"
        aria-label="Visit our github profile"
        name="Visit our github profile"
        className="w-auto ml-5 flex p-2 rounded-sm text-center hover:translate-y-1 bg-dark text-pink-600 hover:text-pink-800 focus:outline-none focus:ring focus:border-pink-600"
      >
        <FaGithub size={24} className="text-white" />
      </a>
    </div>
  );
};

export default CategoryCard;
