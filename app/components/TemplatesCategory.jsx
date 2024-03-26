"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const TemplatesCategory = ({ data }) => {
  const [newData, setNewData] = useState(data);

  const handleTagClick = (tag) => {
    const filtered = data.filter((item) => item.category === tag);
    setNewData(filtered);
    console.log(filtered);
  };
  return (
    <>
      <div className="filter templates">
        <div className="container mx-auto px-10">
          <div className="p-6">
            <span className="text-lg font-semibold mb-4">Categories Cloud</span>

            <div className="flex flex-wrap gap-2 pt-4">
              <button
                onClick={() => setNewData(data)}
                className="bg-green-200 hover:bg-green-300 py-1.5 px-3 rounded-lg text-sm dark:bg-dark dark:border"
              >
                All Templates
              </button>
              <button
                onClick={() => handleTagClick("Landing")}
                className="bg-blue-200 hover:bg-blue-300 py-1.5 px-3 rounded-lg text-sm dark:bg-dark dark:border"
              >
                Landing
              </button>
              <button
                onClick={() => handleTagClick("Ecommerce")}
                className="bg-green-200 hover:bg-green-300 py-1.5 px-3 rounded-lg text-sm dark:bg-dark dark:border"
              >
                Ecommerce
              </button>

              <button
                onClick={() => handleTagClick("Card")}
                className="bg-indigo-200 hover:bg-indigo-300 py-1.5 px-3 rounded-lg text-sm dark:bg-dark dark:border"
              >
                Card
              </button>
              <button
                onClick={() => handleTagClick("Marketing")}
                className="bg-purple-200 hover:bg-purple-300 py-1.5 px-3 rounded-lg text-sm dark:bg-dark dark:border"
              >
                Marketing
              </button>
              <button
                onClick={() => handleTagClick("Dashboard")}
                className="bg-pink-200 hover:bg-pink-300 py-1.5 px-3 rounded-lg text-sm dark:bg-dark dark:border"
              >
                Dashboard
              </button>
              <button
                onClick={() => handleTagClick("Business")}
                className="bg-green-200 hover:bg-green-300 py-1.5 px-3 rounded-lg text-sm dark:bg-dark dark:border"
              >
                Business
              </button>
              <button
                onClick={() => handleTagClick("Elearning")}
                className="bg-yellow-200 hover:bg-yellow-300 py-1.5 px-3 rounded-lg text-sm dark:bg-dark dark:border"
              >
                Elearning
              </button>
            </div>
          </div>
        </div>
      </div>
      <article className="grid grid-cols-3 gap-6 p-16 pt-4 xl:gap-4 xl:p-8 lg:grid-cols-2 lg:gap-6 lg:p-10 sm:flex flex-wrap dark:bg-dark">
        {newData
          ?.slice()
          .reverse()
          .map((item) => (
            <div
              key={item._id}
              className="max-w-sm rounded overflow-hidden shadow-lg dark:shadow-light"
            >
              <Image
                className="w-full h-44"
                src={item.image}
                alt={item.title}
                priority={true}
                width={300}
                height={300}
              />
              <div className="px-6 py-2">
                <Link
                  href={`/templates/${item.slug}`}
                  className="font-bold text-xl mb-2 mt-2 text-tailwindColor dark:text-light hover:underline"
                >
                  {item.title}
                </Link>
                <p className={`text-gray-700 text-sm mt-2 dark:text-light`}>
                  {item.description.slice(0, 70)}...
                </p>
              </div>
              <div className="pt-1 pb-3 flex justify-between px-4 p-6">
                <span className="bg-gray-200 rounded-full text-sm p-1 py-1 px-2 font-semibold text-gray-700 ">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
      </article>
    </>
  );
};

export default TemplatesCategory;
