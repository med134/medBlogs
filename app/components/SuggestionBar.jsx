import React from "react";
import Image from "next/image";
import Link from "next/link";

const SuggestionBar = ({sug,onSugHandler}) => {
  return (
    <ul className="mt-2 bg-white dark:bg-dark w-96 shadow-lg rounded-md overflow-y-auto right-6 scroll-m-0 h-64 absolute z-40 lg:top-36 lg:right-32 lg:w-[270px] lg:max-h-64 lg:bg-gray-800 xs:right-0">
      {sug.map((item, index) => (
        <div
          key={item._id}
          className="flex justify-start items-center mb-2 border hover:bg-slate-500 dark:hover:bg-slate-500"
        >
          <Image
            src={item.image}
            alt={item.title}
            className="w-16 h-16 rounded-md object-contain"
            loading="lazy"
            width={300}
            height={300}
          />
          <li
            onClick={() => onSugHandler(item.title)}
            key={index}
            className="px-2 py-1 text-sm cursor-pointer text-dark dark:text-light lg:text-light"
          >
            {item.title}
          </li>
        </div>
      ))}
    </ul>
  );
};

export default SuggestionBar;
