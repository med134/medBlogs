import React from "react";
import Link from "next/link";
import TransitionEffect from "../components/TransitionEffect";
import Image from "next/image";
import PageNotFound from "@/app/PageNotFound";
import SearchBar from "../components/SearchBar";

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
  title: `Free Templates & Components Resources Examples`,
  description: `Browse through MedCode collection of Free Templates & Components  with advanced frameworks such as React.js, Next.js, Vue.js with full free code source and developments kits`,
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
    description: `Browse through MedCode collection of Free Templates & Components  with advanced frameworks such as React.js, Next.js, Vue.js with full free code source and developments kits`,
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
      <div className="bg-white dark:bg-dark dark:text-light pt-[80px] xl:pt-[60px] lg:pt-[40px]">
        <div className="grid grid-cols-2 p-16 mx-auto overflow-x-hidden xs:text-left xs:p-4 lg:block lg:text-center xl:mt-5 sm:p-8">
          <div className="lg:w-full pr-2 py-14 md:py-0 xs:p-2 lg:block lg:justify-center lg:items-center xs:justify-start xs:items-start">
            <h1 className="text-4xl font-bold text-mainColor xl:text-2xl lg:text-4xl xs:text-2xl xs:text-left dark:text-cyan-600">
              <span className="block w-full">Free Templates & components </span>
              with free code Sources
            </h1>
            <p className="py-2 text-lg text-gray-500 md:py-6 xs:py-2 2xl:pr-5 xs:text-sm xs:pr-2 dark:text-light xs:text-left">
              Open source UI & UX components and templates to bootstrap your new
              apps, projects or landing sites, Crafting Unique Web Experiences:
              Explore My Portfolio and Free Templates & Components
            </p>
            <div className="mt-2">
              <SearchBar />
            </div>
          </div>
          <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0 lg:hidden">
            <Image
              id="heroImg1"
              priority
              className="transition-all ml-10 duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
              src="https://i.ibb.co/GPXxP06/hero-img.png"
              alt="Free Templates & components"
              width="500"
              height="488"
            />
          </div>
        </div>
        <div className="px-16 dark:text-light xs:px-8 xs:p-2">
          <h2 className="text-3xl font-semibold mt-0 sm:text-2xl">
            Latest Templates & Components
          </h2>
          <h3 className="sm:text-sm mt-2">
            The newest featured & responsive Templates & Components and full
            project with different frameworks.
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
              className="max-w-sm rounded overflow-hidden shadow-lg dark:shadow-light"
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
                  className="font-bold text-xl mb-2 mt-2 text-tailwindColor hover:underline"
                >
                  {item.title}
                </Link>
                <p className={`text-gray-700 text-sm mt-2 dark:text-light`}>
                  {item.description.slice(0, 70)}...
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
