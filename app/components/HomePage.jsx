import React from "react";
import { AiTwotoneSound } from "react-icons/ai";
import "../globals.css";
import CategoryCard from "./CategoryCard";
import dynamic from "next/dynamic";
const SearchBar = dynamic(() => import("./SearchTwo"), { ssr: false });
import Card from "../ServerCard";
import Cat from "../MainSide";
const HomePage = () => {
  return (
    <div className="grid grid-cols-6 gap-6 xl:gap-2 lg:block dark:bg-dark sm:p-2">
      <div className="right-sideT col-span-4 w-full px-10 xs:px-2 mb-6">
        <div className="text-2xl underline dark:text-light mb-4 pt-2 font-bold flex justify-start items-center text-gray-800 font-slab px-5 xs:px-2">
          <AiTwotoneSound className="dark:text-light" />
          <span className="sm:text-xl">Recent Articles</span>
        </div>
        <div className="div01 section" id="chapter1">
          <Card /> 
        </div>
      </div>
      <div className="left-sideT col-span-1 xl:w-72 lg:px-10 xs:w-full">
        <div className="">
          <h3 className="py-4 text-xl sm:mb-2 font-semibold dark:text-light">
            Follow Us
          </h3>
          <CategoryCard />
          <div className="h-[1px] mb-4 bg-slate-400 w-auto"></div>
          <SearchBar className="xs:fill-dark"/>
          <Cat />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
