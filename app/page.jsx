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
    <div className='dark:bg-dark'>
      <Aside />
      <Search getSearchResult={(result) => setPosts(result)} />
      <div className="bg-light pt-8 dark:bg-dark">
        <CategoryList />
      </div>
      <span className="text-2xl underline dark:text-light bg-light dark:bg-dark font-bold flex justify-start items-center text-gray-800 font-slab px-12 pt-8 py-2">
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
      <div className="p-10 bg-gradient-to-r from-rose-50 to-slate-300 mt-16 dark:bg-gradient-to-r dark:from-[#1b1b1b] dark:to-[#1b1b1b] xs:p-3">
        <div className="container m-auto px-6 dark:bg-dark xs:px-2">
          <div className="flex justify-between items-center dark:bg-dark md:flex-col-reverse md:items-start">
            <div className="w-1/2 lg:p-0 p-7 dark:bg-dark md:w-full xs:p-2">
              <span className="text-2xl font-bold flex justify-start items-center text-gray-800 dark:text-light sm:text-xl">
                <p className="ml-2 ">Templates & Components</p>
              </span>{" "}
              <h1 className="text-4xl text-gray-900 font-bold leading-tight mb-5 sm:text-sm capitalize dark:text-light lg:text-xl">
                {" "}
                Software Mastery:Professional Free Tailwind Components &
                Templates
              </h1>
              <p className="text-xl dark:text-light lg:text-sm">
                {" "}
                With MedCode blogs Templates Tailwind you can optimized the
                customization process to save your team time when building
                websites.{" "}
              </p>
              <div className="py-5">
                <Link
                  href="/templates"
                  className="text-white rounded-full py-2 xs:text-sm px-5 text-lg font-semibold bg-purple-600 inline-block border border-purple-600 mr-3 hover:bg-light hover:text-dark"
                >
                  Start with free Templates
                </Link>
              </div>
            </div>
            <div className="order-2 md:order-1">
              <Image
                src="https://i.ibb.co/rHvLvvr/Untitled.png"
                width={400}
                height={400}
                priority
                alt="photo-templates"
                className="w-full rounded transform scale-100 perspective-[1040px] rotate-y-[-11deg] rotate-x-[2deg] rotate-[2deg] md:transform-none md:mb-3 md:w-full object-cover"
              />
            </div>
          </div>
        </div>
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
        </div>  */}

        {/*  <div className="mt-20 md:p-10 md:mt-4">
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
