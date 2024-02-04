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
              className="p-2 px-3 border-red-500 mb-1 rounded font-medium hover:bg-transparent hover:border-red-600 border bg-red-400/25 dark:bg-purple text-red-800 dark:text-light"
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
