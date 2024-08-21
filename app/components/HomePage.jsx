"use client";
import React, { useState, useEffect } from "react";
import { AiTwotoneSound } from "react-icons/ai";
import "../globals.css";
import CategoryCard from "./CategoryCard";
import dynamic from "next/dynamic";
const SearchBar = dynamic(() => import("./SearchTwo"), { ssr: false });

const HomePage = ({ child, side }) => {
  const [sidebarWidth, setSidebarWidth] = useState("");
  const [sidebarTop, setSidebarTop] = useState("");

  useEffect(() => {
    const sidebarEl = document
      .querySelector(".sidebar")
      .getBoundingClientRect();
    setSidebarWidth(sidebarEl.width);
    setSidebarTop(sidebarEl.top);
  }, []);

  useEffect(() => {
    if (!sidebarTop) return;
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const sidebarEl = document.querySelector(".sidebar");
    const scrollTop = window.scrollY;
    sidebarEl.classList.toggle("sticky", scrollTop > sidebarTop);
    if (scrollTop >= sidebarTop - 10 && scrollTop <= 2200) {
      sidebarEl.classList.add("is-sticky");
    } else {
      sidebarEl.classList.remove("is-sticky");
    }
  };

  return (
    <div className="p-10 xl:p-6 sm:p-2 xs:p-2 dark:bg-dark">
      <span className="text-2xl underline dark:text-light font-bold flex justify-start items-center text-gray-800 font-slab px-12 xs:px-8 pt-8 py-2 xs:pt-1">
        <AiTwotoneSound className="dark:text-light" />
        <p className="ml-2 sm:text-xl">Recent Articles</p>
      </span>
      <div className="grid grid-cols-6 p-4 xl:grid-cols-5 gap-6 lg:block">
        <div className="block col-span-4 xl:col-span-3">{child}</div>
        <div className="col-span-2 xl:col-span-2 lg:grow-1">
          <div
            className="sidebar lg:relative lg:top-6"
            style={{ width: sidebarWidth }}
          >
            <h3 className="py-4 text-xl font-semibold dark:text-light">
              Follow Us
            </h3>
            <CategoryCard />
            <div className="h-[1px] mb-4 bg-slate-400 w-auto"></div>
            <SearchBar
              className={
                "border border-t-mainColor lg:w-auto border-l-mainColor border-r-mainColor rounded-md lg:border-l-mainColor lg:border-r-mainColor lg:border-b-mainColor xs:hidden sm:hidden"
              }
            />
            {side}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
