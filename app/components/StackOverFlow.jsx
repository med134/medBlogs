"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const StackOverFlow = () => {
  const [ask, setAsk] = useState([]);
  useEffect(() => {
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
      setAsk(data.items);
    };
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
    <section className="grid grid-cols-3 p-12 gap-4 lg:flex flex-wrap lg:gap-8">
      {ask.map((question, index) =>
        index <= 5 ? (
          <article
            key={question.accepted_answer_id}
            className="rounded-xl border-1 border-orange-400 bg-white"
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
                <h3 className="font-medium sm:text-lg">
                  <Link
                    href={question?.link}
                    target="blank"
                    className="hover:underline"
                  >
                    {" "}
                    {question?.title}
                  </Link>
                </h3>
                {ask.tags?.map((tag) => {
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
                                <rect x={350} y={115} width={60} height={20} />{" "}
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

                      <p className="text-xs ml-1 text-gray-900 font-semibold">
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
  );
};

export default StackOverFlow;
