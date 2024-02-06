import React from "react";
import Link from "next/link";
import Image from "next/image";
import Cat from "./Cat";
async function getArticles() {
  const res = await fetch(`https://www.medcode.dev/api/articles`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  const data = await res.json();
  const sortedPosts = data.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  return sortedPosts;
}
const SidBar = async ({ slug }) => {
  const dev = await getArticles();
  return (
    <div className="mt-3">
      <aside className="w-full rounded-lg border-2 py-2 border-red-600 mb-6 p-2 mt-4 max-w-sm mx-auto dark:border-light">
        <span className="text-lg font-bold py-3 dark:text-light">
          Categories
        </span>
        <Cat />
      </aside>
      <span className="text-xl text-gray-800 font-semibold mt-7 mb-3 sm:w-full sm:mb-4 sm:text-xl sm:mt-1 dark:text-light">
        More titles From{" "}
        <span className="text-2xl text-red-500 sm:text-xl">MedCode...</span>{" "}
      </span>
      {dev?.map((item, index) =>
        index < 14 && item.slug != slug ? (
          <div className=" bg-white rounded-xl shadow-md overflow-hidden mb-4">
            <div className="flex justify-start items-center xs:flex-col">
              <Image
                className="h-44 rounded-full w-44 object-contain sm:w-full sm:rounded-none"
                src={item.image}
                alt={item.title}
                width={200}
                height={200}
                loading="lazy"
              />

              <div className="p-2 ml-2">
                <Link
                  href={`/category/${item.category}`}
                  className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
                >
                  {item.category}
                </Link>
                <Link
                  href={`/blog/${item.slug}`}
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  {item.title}
                </Link>
                <p className="text-xs font-semibold mt-2 text-gray-700">
                  {item.tags}
                </p>
              </div>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default SidBar;
