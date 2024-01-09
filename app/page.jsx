import React from "react";
import Link from "next/link";
import { AiTwotoneSound } from "react-icons/ai";
import Youtube from "./components/Youtube";
import HomePage from "./components/HomePage";
import Question from "./components/Question";
import Easy from "./components/EsayTemplates";

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
          <p className="underline">Follow me on</p>
          <span className="flex">
            <p className="text-2xl flex sm:text-sm justify-center text-red-600 ml-2 font-extrabold xs:text-xl">
              Youtube
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="32px"
              height="32px"
              className={`w-full h-auto ml-1 sm:w-10 sm:h-10`}
            >
              <path
                fill="#FF3D00"
                d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
              />
              <path fill="#FFF" d="M20 31L20 17 32 24z" />
            </svg>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 lg:grid-cols-3 lg:gap-4 px-10 py-8 lg:px-8 md:flex md:flex-wrap sm:px-2">
        <div className="col-span-2 rounded-lg lg:col-span-2">
          <Youtube />
        </div>
        <div className="col-span-1 h-full rounded-lg">
          
        </div>
      </div>
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
