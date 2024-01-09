import React from "react";
import { AiTwotoneSound } from "react-icons/ai";
import HomePage from "./components/HomePage";
import Question from "./components/Question";
import Easy from "./components/EsayTemplates";
import Image from "next/image";
import Dev from "./components/Dev";

export default function Home() {
  return (
    <section className="dark:bg-dark bg-light">
      <HomePage />
      <span className="text-2xl underline dark:text-light bg-light dark:bg-dark font-bold flex justify-start items-center text-gray-800 font-slab px-12 xs:px-8 pt-8 py-2 xs:pt-1">
        <AiTwotoneSound className="dark:text-light" />
        <p className="ml-2 sm:text-xl ">Recent Templates & components</p>
      </span>
      <Easy />
      <div className="text-2xl flex justify-start items-center w-full  dark:text-light bg-light dark:bg-dark font-bold text-gray-800 font-slab px-12 xs:px-8 pt-8 py-2 xs:pt-1">
        <AiTwotoneSound className="dark:text-light" />
        <div className="ml-2 sm:text-xl xs:text-sm flex justify-start items-center">
          <p className="underline">Dev Community Blogs & Articles</p>
          <Image
            src="https://i.ibb.co/GPVWBCN/dev-community-icon.png"
            width={100}
            height={100}
            alt="dev community blog & articles"
            loading="lazy"
            className="w-8 h-8 rounded-lg ml-2"
          />
        </div>
      </div>
      <Dev />
      <span className="text-2xl  dark:text-light bg-light dark:bg-dark font-bold flex justify-start items-center text-gray-800 font-slab px-12 xs:px-8 pt-8 py-2 xs:pt-1">
        <AiTwotoneSound className="dark:text-light" />
        <p className="ml-2 sm:text-xl underline xs:text-sm">
          Latest Answers on{" "}
          <span className="text-2xl text-orange-400 font-semibold xs:text-xl">
            StackOverFlow
          </span>
        </p>
      </span>
      <Question />
    </section>
  );
}
