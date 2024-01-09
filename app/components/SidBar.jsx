import React from "react";
import Link from "next/link";
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
const SidBar = async () => {
  const dev = await getArticles();
  return (
    <div className="mt-3">
      <aside className="w-full rounded-lg border-2 py-2 border-red-600 mb-6 p-2 mt-4 max-w-sm mx-auto dark:border-light">
        <span className="text-lg font-bold py-3 dark:text-light">
          Categories
        </span>
        <Cat />
      </aside>
      <span className="text-xl text-gray-800 font-semibold mt-7 sm:w-full sm:mb-4 sm:text-xl sm:mt-1 dark:text-light">
        More titles From{" "}
        <span className="text-2xl text-red-500 sm:text-xl">MedCode...</span>{" "}
      </span>
      {dev?.map((item, index) =>
        index < 10 ? (
          <div
            key={item._id}
            className="mt-6 bg-white shadow-md p-5 px-6 sm:mt-1 sm:px-3 sm:mb-3 sm:p-4 border border-b-red-500 dark:bg-dark "
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-light">
              {item.title}
            </h3>
            <p className="mt-1 text-sm mb-2 text-gray-500">
              <p className="mt-1 text-sm underline text-gray-900 font-semibold dark:text-light">
                {item.tags}
              </p>
            </p>
            <Link
              href={`/blogs/${item._id}`}
              className="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 hover:underline active:text-rose-700"
            >
              Read more...
            </Link>
          </div>
        ) : null
      )}
    </div>
  );
};

export default SidBar;
