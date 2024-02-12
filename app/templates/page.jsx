import React from "react";
import Link from "next/link";
import TransitionEffect from "../components/TransitionEffect";
import { BgTemplates } from "../components/Icons";
import Image from "next/image";
import PageNotFound from "@/app/PageNotFound";

async function getData() {
  const res = await fetch(`https://www.medcode.dev/api/posts`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return <PageNotFound />;
  }
  return res.json();
}

export const metadata = {
  title: `10+ Free Templates & Components Resources Examples`,
  description: `Browse through MedCode collection of free frontend templates and components  with advanced frameworks such as React.js, Next.js, Vue.js with full free code source and developments kits`,
  keywords: [
    "Web Development",
    "tailwind css free components",
    "tailwind css free components",
    "frontend templates",
    "how to learn programming",
    "free components sketchup ",
    "python programming",
    "django frontend templates",
    "Artificial Intelligence",
    "best programming languages",
    "rust programming language",
    " Programming Languages",
    "Software Engineering",
    "tailwind css",
    "free templates",
    "free components",
    "bootstrap",
    "free code",
    "Front-end",
    "UI/UX Design",
    "Frameworks",
    "Best Practices",
    "Web Design",
    "Learning Resources",
    "Code Snippets",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `/templates`,
    languages: {
      "en-Us": `/en-us/templates`,
    },
    types: {
      "application/rss+xml": "https://www.medcode.dev/rss",
    },
  },
  openGraph: {
    title: "medCode free templates & components",
    description: `Browse through MedCode collection of free frontend templates and components  with advanced frameworks such as React.js, Next.js, Vue.js with full free code source and developments kits`,
    images: [
      {
        url: "https://i.ibb.co/rHvLvvr/Untitled.png",
        width: "400",
        height: "300",
      },
    ],
  },
};
const page = async () => {
  const data = await getData();
  return (
    <>
      <TransitionEffect />
      <div className="bg-white dark:bg-dark dark:text-light pt-[100px]">
        <div className="p-16 my-auto w-full py-20 bg-indigo-600 px-6 leading-4 xs:p-8 xs:py-6 shadow-lg xl:w-screen dark:bg-dark dark:text-light ">
          <div className="w-full">
            <h1 className="mb-3 font-lexend text-3xl px-10 text-white xs:text-xl xs:px-4">
              Free Templates & components with free code Sources
            </h1>
            <p className="text-light text-xl px-10 xs:px-4 sm:text-sm">
              Open source UI & UX components and templates to bootstrap your new
              apps, projects or landing sites, Crafting Unique Web Experiences:
              Explore My Portfolio and Free Templates & Components
            </p>

            <div className="flex mt-8 px-10 sm:text-xs sm:px-4">
              <div className="inline-flex bg-purple-900 py-4 text-light font-lexend rounded-xl px-10 sm:px-4">
                <Link
                  target="_blank"
                  href="https://www.medcode.dev/category/react"
                  className="font-bold cursor-pointer hover:underline"
                >
                  React js
                </Link>
                <Link
                  target="_blank"
                  href="https://www.medcode.dev/category/nextjs"
                  className="ml-4 xs:ml-2 font-bold  cursor-pointer hover:underline"
                >
                  Next js
                </Link>
                <Link
                  target="_blank"
                  href="https://www.medcode.dev/category/tools"
                  className="ml-4 font-bold xs:ml-2 cursor-pointer hover:underline"
                >
                  Tailwind css
                </Link>
                <a
                  target="_blank"
                  href="https://getbootstrap.com/"
                  aria-label="Visit Site Bootstrap official"
                  rel="noopener noreferrer"
                  name="Bootstrap"
                  className="ml-4 font-bold cursor-pointer hover:underline xs:ml-2"
                >
                  Bootstrap
                </a>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute right-0 bottom-0 w-4/5 text-white opacity-50">
            <BgTemplates />
          </div>
        </div>
        <div className="p-6 px-16 dark:text-light xs:px-8 xs:p-2">
          <h2 className="text-3xl font-lexend mt-4 sm:text-2xl">
            Latest components & projects & templates
          </h2>
          <h3 className="sm:text-sm mt-2">
            The newest featured & responsive templates and full project with
            different frameworks.
          </h3>
        </div>
      </div>
      <article className="grid grid-cols-3 gap-6 p-16 xl:gap-4 xl:p-8 lg:grid-cols-2 lg:gap-6 lg:p-10 sm:flex flex-wrap dark:bg-dark">
        {data
          ?.slice()
          .reverse()
          .map((item) => (
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
                  href={`/templates/${item.slug}`}
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
    </>
  );
};
export default page;
