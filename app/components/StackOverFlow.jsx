"use client";
import React, { useState,useEffect } from "react";
import Link from "next/link";
const StackOverFlow = async () => {
  const [ask, setAsk] = useState([]);
  useEffect(() => {
    const fetchSeoData = async () => {
      const res = await fetch(
        `https://api.stackexchange.com/2.3/questions?site=stackoverflow&sort=votes&order=desc`,
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
  return (
    <div className="max-w-md rounded-xl border mb-5 border-orange-300 bg-white p-6 pb-10 xs:p-10 text-blue-900 dark:bg-dark">
      <p className="text-lg font-semibold text-orange-500">
        StackOverFlow{" "}
        <span className="text-blue-900 font-medium dark:text-light">
          daily questions
        </span>
      </p>
      {ask.map((question, index) =>
        index <= 3 ? (
          <div
            key={question.question_id}
            className="mt-4 flex items-center rounded-lg bg-gray-100 py-1 px-2 text-gray-600 dark:bg-gray-200v"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6 shrink-0 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <Link
              href={`${question.link}`}
              target="_blank"
              className="text-sm font-lexend hover:underline cursor-pointer"
            >
              {question.title}
            </Link>
          </div>
        ) : null
      )}
    </div>
  );
};

export default StackOverFlow;
