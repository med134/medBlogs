"use client";
import React, { useState, useEffect } from "react";
import Card from "./components/Hero";
import Link from "next/link";
import CategoryList from "./components/HeaderCategory";
import Aside from "./components/Aside";
import { AiTwotoneSound } from "react-icons/ai";
import Search from "./components/Search";
import SideBar from "./components/SideBar";
import CardX from "./components/FirstView";
import Slider from "./components/TwoSlider";
import Image from "next/image";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [questions, setQuestion] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchSeoData = async () => {
    const res = await fetch(
      `https://api.stackexchange.com/2.3/questions?todate=1703894400&site=stackoverflow&sort=votes&order=desc`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    setQuestion(data.items);
  };
  useEffect(() => {
    setLoading(true);
    fetch("/api/articles")
      .then((res) => res.json())
      .then((data) => {
        const sortedPosts = data?.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setPosts(sortedPosts);
        setLoading(false);
      });
    fetchSeoData();
  }, []);
  const convertDate = (timestamp) => {
    const date = new Date(timestamp * 1000);

    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = weekdays[date.getDay()];

    const year = date.getFullYear();
    const dayOfMonth = date.getDate();

    const formattedDate = `${day}, ${dayOfMonth} ${year}`;
    return formattedDate;
  };

  return (
    <section className="dark:bg-dark bg-light">
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
          <h1 className="text-4xl lg:text-2xl font-bold py-4 xs:py-1 tracking-tight text-gray-900 sm:text-4xl dark:text-light">
            Software Mastery:Professional Free Tailwind Components & Templates
          </h1>
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
      <span className="text-2xl  dark:text-light bg-light dark:bg-dark font-bold flex justify-start items-center text-gray-800 font-slab px-12 xs:px-8 pt-8 py-2 xs:pt-1">
        <AiTwotoneSound className="dark:text-light" />
        <p className="ml-2 sm:text-xl underline xs:text-sm">
          Latest Answers on{" "}
          <span className="text-2xl text-orange-400 font-semibold xs:text-xl">
            StackOverFlow
          </span>
        </p>
      </span>{" "}
      <section className="grid grid-cols-3 p-12 gap-4 lg:flex flex-wrap lg:gap-8">
        {questions.map((question, index) =>
          index <= 8 ? (
            <article
              key={question.accepted_answer_id}
              className="rounded-xl border-1 border-orange-400 bg-white dark:bg-dark dark:border"
            >
              <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8 xs:p-2">
                <Image
                  width={32}
                  height={32}
                  loading="lazy"
                  alt="stackOverflow"
                  src={question?.owner?.profile_image}
                  className="h-14 w-14 rounded-lg object-cover"
                />

                <div>
                  <h3 className="font-medium sm:text-lg dark:text-light">
                    <Link
                      href={question?.link}
                      target="blank"
                      className="hover:underline"
                    >
                      {" "}
                      {question?.title}
                    </Link>
                  </h3>
                  {questions.tags?.map((tag) => {
                    <p className="line-clamp-2 text-sm text-gray-700">{tag}</p>;
                  })}
                  <div className="mt-2">
                    <div className="flex items-center justify-between gap-1 text-gray-500">
                      <p className="text-xs">
                        {convertDate(question.last_edit_date)}
                      </p>
                      <div className="flex justify-start items-center">
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Layer_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 490.001 490.001"
                          xmlSpace="preserve"
                          width="16px"
                          height="16px"
                          className="dark:fill-light"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth={10} />
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g>
                              {" "}
                              <g>
                                {" "}
                                <g>
                                  {" "}
                                  <path d="M450,0h-410c-22.056,0-40,17.944-40,40v280c0,22.056,17.944,40,40,40h235v120c0,4.118,2.524,7.814,6.358,9.314 c1.184,0.463,2.417,0.687,3.639,0.687c2.738,0,5.42-1.126,7.35-3.218L409.38,360H450c22.056,0,40-17.944,40-40V40 C490,17.944,472.057,0,450,0z M470,320c0,11.028-8.972,20-20,20h-45c-2.791,0-5.455,1.167-7.348,3.217L295,454.423V350 c0-5.523-4.477-10-10-10h-245c-11.028,0-20-8.972-20-20V40c0-11.028,8.972-20,20-20h410c11.028,0,20,8.972,20,20V320z" />{" "}
                                  <path d="M144.881,80.001c-3.957,0.047-7.513,2.423-9.072,6.06l-75,175l18.383,7.878L106.594,205h79.982l29.329,64.158 l18.189-8.315l-80-175C152.45,82.244,148.863,79.974,144.881,80.001z M115.167,185l30.129-70.302L177.433,185H115.167z" />{" "}
                                  <rect
                                    x="255.001"
                                    y={115}
                                    width={80}
                                    height={20}
                                  />{" "}
                                  <rect
                                    x={350}
                                    y={115}
                                    width={60}
                                    height={20}
                                  />{" "}
                                  <rect
                                    x="255.001"
                                    y={165}
                                    width={180}
                                    height={20}
                                  />{" "}
                                  <rect
                                    x="255.001"
                                    y={215}
                                    width={75}
                                    height={20}
                                  />{" "}
                                </g>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>
                        </svg>

                        <p className="text-xs ml-1 text-gray-900 font-semibold dark:text-light">
                          {question.answer_count}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                {question.is_answered ? (
                  <strong className="inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-[#f48024] px-3 py-1.5 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                    <span className="text-xs font-medium">Solved!</span>
                  </strong>
                ) : (
                  <p>no answer</p>
                )}
              </div>
            </article>
          ) : null
        )}
      </section>
    </section>
  );
}
