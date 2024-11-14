import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardSearch = ({ item }) => {
  return (
    <div className="shadow-lg dark:shadow-white rounded-md lg:block md:mb-6 lg:w-full sm:w-full dark:bg-dark dark:border-light">
      <div className="hover:no-underline focus:no-underline dark:bg-gray-900 text-left">
        <Image
          width={300}
          height={300}
          className="object-cover w-full rounded h-44 dark:bg-gray-500 md:object-cover"
          src={item.image ? item.image.trimEnd() : imageBlog}
          alt={item.title}
          loading="lazy"
        />
        <div className="p-6 flex flex-col space-y-2">
          <span className="text-mainColor font-bold tex-sm">
            #{item.category}
          </span>
          <Link
            href={`/blogs/${item.slug}`}
            className="bg-gradient-to-r lg:text-xl cursor-pointer text-2xl font-semibold from-red-200 to-red-400 bg-[length:0px_10px] bg-left-bottom
bg-no-repeat
transition-[background-size]
duration-500
hover:bg-[length:100%_3px]
group-hover:bg-[length:100%_10px]
dark:from-red-800 dark:to-purple-900 dark:text-light"
          >
            {item.title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardSearch;
