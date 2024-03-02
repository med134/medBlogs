import React from "react";
import Link from "next/link";

export async function getAllCat() {
  const res = await fetch("https://www.medcode.dev/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
}
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
