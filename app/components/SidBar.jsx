import React from "react";
import Link from "next/link";
import Image from "next/image";
import Cat from "./Cat";
import { getArticles } from "./FetchData";
import MainSide from "@/app/MainSide";
import SearchTwo from "./SearchTwo";

const SidBar = async ({ slug, category }) => {
  const dev = await getArticles();
  return (
    <div className="mt-3">
      <aside className="w-full rounded-lg border-2 py-2 border-mainColor mb-6 p-2 mt-4 dark:border-light">
        <span className="text-lg font-bold py-3 text-gray-800 dark:text-light">
          Search...
        </span>
        <SearchTwo className={"dark:placeholder-light lg:border lg:border-b-mainColor"} />
        <Cat />
      </aside>
      <span className="text-[18px] text-gray-800 font-semibold mt-7 pb-4 mb-3 sm:w-full sm:mb-4 sm:text-xl sm:mt-1 dark:text-light">
        More Related Posts About
        <span className="text-xl xl:text-xl ml-2 uppercase text-mainColor dark:text-light sm:text-xl">
          {category}
        </span>
      </span>
      <div className="pt-4">
        {dev
          ?.slice()
          .reverse()
          .map((item) =>
            item.category === category ? (
              <div
                key={item._id}
                className="flex justify-start items-center"
              >
                <Image
                  className="object-contain w-36 h-36"
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
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
                    className="block mt-1 leading-tight font-medium text-black dark:text-light hover:underline"
                  >
                    {item.title}
                  </Link>
                </div>
              </div>
            ) : null
          )}
      </div>
    </div>
  );
};

export default SidBar;
