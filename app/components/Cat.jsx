import React from "react";
import Link from "next/link";
import { getAllCat } from "./FetchData";

const Cat = async () => {
  const cat = await getAllCat();

  return (
    <>
      {cat?.map((item) => (
        <ul key={item._id} className="inline-flex items-start ml-2">
          <li className="flex mx-1">
            <Link
              className="p-2 px-3 border-mainColor mb-1 rounded hover:bg-white font-medium dark:hover:text-mainColor hover:border-mainColo dark:hover:border-light border bg-light dark:bg-purple text-gray-800 dark:text-light dark:bg-dark"
              href={`/category/${item.value}`}
            >
              {item?.label}
            </Link>
          </li>
        </ul>
      ))}
    </>
  );
};

export default Cat;
