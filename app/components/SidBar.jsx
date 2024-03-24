import React from "react";
import Link from "next/link";
import Image from "next/image";
import Cat from "./Cat";
import { getArticles } from "./FetchData";

const SidBar = async ({ slug, category }) => {
  const dev = await getArticles();
  return (
    <div className="mt-3">
      <aside className="w-full rounded-lg border-2 py-2 border-mainColor mb-6 p-2 mt-4 dark:border-light">
        <span className="text-lg font-bold py-3 dark:text-light">
          Categories
        </span>
        <Cat />
      </aside>
      <span className="text-xl text-gray-800 font-semibold mt-7 pb-4 mb-3 sm:w-full sm:mb-4 sm:text-xl sm:mt-1 dark:text-light">
        More Related Posts About
        <span className="text-2xl xl:text-xl ml-2 uppercase text-mainColor dark:text-light sm:text-xl">
          {category}
        </span>
      </span>
      <div className="pt-4">
        {dev?.map((item) =>
          item.category === category && item.slug != slug ? (
            <div key={item._id} className=" bg-white rounded-xl shadow-md overflow-hidden mb-4 dark:bg-dark dark:border dark:border-light">
              <div className="flex justify-start items-center xl:flex-col lg:flex lg:justify-start lg:items-start">
                <Image
                  className="h-44 rounded-full w-44 object-contain xl:w-full xl:rounded-none"
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={300}
                  priority={false}
                  loading="lazy"
                />

                <div className="p-2 ml-2">
                  <Link
                    href={`/category/${item.category}`}
                    className="uppercase tracking-wide text-sm text-mainColor dark:text-light font-semibold"
                  >
                    {item.category}
                  </Link>
                  <Link
                    href={`/blogs/${item.slug}`}
                    className="block mt-1 text-lg leading-tight font-medium text-black dark:text-light hover:underline"
                  >
                    {item.title}
                  </Link>
                  <p className="text-xs font-semibold mt-2 text-gray-700 dark:text-light">
                    {item.tags}
                  </p>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default SidBar;
