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
    <div className="sectionT grid grid-cols-6 gap-6 xl:gap-2 lg:block">
      <div className="right-sideT col-span-4 w-full px-10 mb-6">
        <span className="text-2xl underline dark:text-light mb-4 font-bold flex justify-start items-center text-gray-800 font-slab px-5">
          <AiTwotoneSound className="dark:text-light" />
          <p className="sm:text-xl">Recent Articles</p>
        </span>
        <div className="div01 section" id="chapter1">
          <Card />
        </div>
      </div>
      <div className="left-sideT col-span-1 xl:w-72 lg:w-full lg:px-10">
        <div className="">
          <h3 className="py-4 text-xl sm:py-0 font-semibold dark:text-light">
            Follow Us
          </h3>
          <CategoryCard />
          <div className="h-[1px] mb-4 bg-slate-400 w-auto"></div>
          <SearchBar />
          <Cat />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
