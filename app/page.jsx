"use client";
import React, { useState, useEffect } from "react";
import Card from "./components/Hero";
import Link from "next/link";
import Image from "next/image";
import CategoryList from "./components/HeaderCategory";
import Aside from "./components/Aside";
import { AiTwotoneSound } from "react-icons/ai";
import Search from "./components/Search";
import SideBar from "./components/SideBar";
import CardX from "./components/FirstView";
import Slider from "./components/TwoSlider";


export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://www.medcode.dev/api/articles")
      .then((res) => res.json())
      .then((data) => {
        const sortedPosts = data?.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setPosts(sortedPosts);
        setLoading(false);
      });
  }, []);

  return (
    <div className="dark:bg-dark bg-light">
      <Aside />
      <Search getSearchResult={(result) => setPosts(result)} />
      <div className="bg-light pt-10 dark:bg-dark">
        <CardX posts={posts} loading={loading} />
        <span className="text-2xl underline dark:text-light bg-light dark:bg-dark font-bold flex justify-start items-center text-gray-800 font-slab px-12 pt-2 py-2 xs:px-8">
          <AiTwotoneSound className="dark:text-light" />
          <p className="ml-2 sm:text-xl ">Categories</p>
        </span>{" "}
        <CategoryList />
      </div>
      <span className="text-2xl underline dark:text-light bg-light dark:bg-dark font-bold flex justify-start items-center text-gray-800 font-slab px-12 pt-8 py-2 xs:px-8">
        <AiTwotoneSound className="dark:text-light" />
        <p className="ml-2 sm:text-xl ">Recent Articles</p>
      </span>{" "}
      <div className="main-content bg-light dark:bg-dark gap-6 px-12 py-4 md:block xs:px-5 xs:gap-1">
        <div className="main">
          <Card posts={posts} loading={loading} />
        </div>
        <div className="side">
          <SideBar />
        </div>
      </div>
      <span className="text-2xl underline dark:text-light bg-light dark:bg-dark font-bold flex justify-start items-center text-gray-800 font-slab px-12 xs:px-8 pt-8 py-2 xs:pt-1">
        <AiTwotoneSound className="dark:text-light" />
        <p className="ml-2 sm:text-xl ">Recent Templates</p>
      </span>{" "}
      <div className="grid grid-cols-2 p-2 md:block bg-light mt-1 xs:mt-0 dark:bg-gradient-to-r dark:from-[#1b1b1b] dark:to-[#1b1b1b] xs:p-3">
        <div className="ltr:sm:text-left rtl:sm:text-right px-8 py-10 xs:py-0 xs:px-4 dark:text-light xs:mb-4">
          <h2 className="text-4xl lg:text-2xl font-bold py-4 xs:py-1 tracking-tight text-gray-900 sm:text-4xl dark:text-light">
            Software Mastery:Professional Free Tailwind Components & Templates
          </h2>
          <p className="mt-4 text-gray-700 dark:text-light">
            With MedCode blogs Templates Tailwind you can optimized the
            customization process to save your team time when building websites.
          </p>
          <Link
            href="/templates"
            className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-rose-600 px-5 py-3 text-rose-600 transition hover:bg-rose-600 hover:text-white md:mt-4"
          >
            <span className="font-medium"> see all templates </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 rtl:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
        <Slider />
      </div>
      <div className="main-content bg-light gap-6 px-12 py-4 md:block md:px-3 md:py-2 dark:bg-dark">
        {/* <div className="md:p-10">
          <span className="flex justify-start items-center text-2xl dark:text-light underline font-bold mb-4 text-gray-800 font-lexend rounded-lg sm:text-sm xl:text:sm">
            <YoutubeImage />
            <p className="ml-2 ">
              {" "}
              Youtube Shorts for Components with code source
            </p>
          </span>
          <Youtube />
        </div>
        <div className="mt-20 md:p-10 md:mt-4">
          <div className="block justify-start items-start md:block p-4 bg-white h-28 mb-6 dark:bg-dark rounded overflow-hidden shadow-lg border-2">
            <Link
              href="https://www.youtube.com/@VivaCode99"
              className="inline-flex items-center py-1 dark:text-light px-4 mb-3 bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-white rounded-md transition duration-300"
            >
              <svg className="w-8 h-8 fill-current mr-2" viewBox="0 0 24 24">
                <path d="M21.9 5.9c-.2-.7-.7-1.2-1.4-1.4C18.3 4 12 4 12 4s-6.3 0-8.5.5c-.7.2-1.2.7-1.4 1.4C2 8.1 2 12 2 12s0 3.9.5 5.1c.2.7.7 1.2 1.4 1.4 2.2.5 8.5.5 8.5.5s6.3 0 8.5-.5c.7-.2 1.2-.7 1.4-1.4.5-1.2.5-5.1.5-5.1s0-3.9-.5-5.1zM9.5 15.5V8.5l6.5 3z" />
              </svg>
              <span>Subscribe Now</span>
            </Link>
            <YouTubeSubscribe />
          </div>
          <Crypto />
        </div> */}
      </div>
    </div>
  );
}
