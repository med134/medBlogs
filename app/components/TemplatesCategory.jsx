"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FilterTemplates from "./FilterTemplates";

const TemplatesCategory = ({ data }) => {
  const [newData, setNewData] = useState(data);
  const handleTagClick = (tag) => {
    const filtered = data.filter((item) => item.category === tag);
    setNewData(filtered);
    console.log(filtered);
  };
  const seAttCat = () => {
    setNewData(data);
  };
  return (
    <>
      <FilterTemplates handleTagClick={handleTagClick} seAttCat={seAttCat} />
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
