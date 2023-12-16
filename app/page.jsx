import React from "react";
import Image from "next/image";
import Link from 'next/link';
async function getData() {
  const res = await fetch(`https://www.medcode.dev/api/posts`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>hello world</h1>
      <article className="grid grid-cols-3 gap-6 p-16 xl:gap-4 xl:p-8 lg:grid-cols-2 lg:gap-6 lg:p-10 sm:flex flex-wrap dark:bg-dark">
        {data?.slice()
        .reverse().map((item) => (
          <div
            key={item._id}
            className="max-w-sm rounded overflow-hidden shadow-lg"
          >
            <Image
              className="w-full h-44"
              src={item.image}
              alt="templates image"
              priority
              width={500}
              height={300}
            />
            <div className="px-6 py-2">
              <Link
                href={`/templates/${item._id}`}
                className="font-bold text-xl mb-2 mt-2 text-purple-600 hover:underline"
              >
                {item.title}
              </Link>
              <p className={`text-gray-700 text-sm mt-2 dark:text-light`}>
                {item.description}
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
    </main>
  );
}
