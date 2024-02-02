import React from "react";
import { AiTwotoneSound } from "react-icons/ai";
import HomePage from "./components/HomePage";
import Question from "./components/Question";
import Easy from "./components/EsayTemplates";
import Dev from "./components/Dev";
import CategoryList from "./components/HeaderCategory";
import { DevIcon } from "./components/Icons";
import FirstView from "./components/FirstView";
import TransitionEffect from "./components/TransitionEffect";
export const metadata = {
  metadataBase: new URL("https://www.medcode.dev"),
  title: "Best Programming Blogs & templates for Programmers|medCode",
  description: `Discover the coding universe through our blog, where programming becomes accessible to beginners and expertise developers,
  Explore free components & templates with advanced frameworks such as React.js, Next.js, Vue.js`,
  generator: "Next.js",
  applicationName: "MedCode Dev blog & Articles",
  referrer: "origin-when-cross-origin",
  keywords: [
    "programming",
    "freelance",
    "frontend developer",
    "online jobs",
    "work online",
    "make money online",
    "Beginner programming",
    "programming courses",
    "programming advices",
    "Programming languages list",
    "STEM education",
    "programming vs coding",
    "software",
    "programming for beginners",
    "tutorial course programming for beginners",
    "freelance",
    "Algorithm tutorials",
    "programming code source",
    "free code source",
    "free",
    "software developments",
  ],
  authors: [
    { name: "med dakir" },
    { name: "medCode", url: "https://www.medcode.dev/" },
  ],
  category: "technology",
  colorScheme: "#f5f5f5",
  creator: "Med Dakir",
  formatDetection: {
    email: "med@vivacode.dev",
    address: "312 Lovely Street, NY",
    telephone: false,
  },
  openGraph: {
    title: "medCode web developer & freelance",
    description: `Learning programming is accessible for beginners through free software programming
    courses These courses introduce essential best programming languages`,
    url: "https://medcode.dev",
    images: [
      {
        url: "https://i.ibb.co/CsLw60W/blog-tutorials.png",
        width: "400",
        height: "300",
      },
    ],
    type: "website",
  },
  verification: {
    google: "cFXi6ELWEfl4UY9OE5i_S5QFU3LbUvdxGgW6RQgHWw",
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "en-US/",
    },
    types: {
      "application/rss+xml": "https://medcode.dev/rss",
    },
  },
};
export default function Home() {
  return (
    <> 
    <TransitionEffect/>
    <section className="dark:bg-dark bg-light">
      <FirstView />
      <span className="text-2xl underline dark:text-light bg-light dark:bg-dark font-bold flex justify-start items-center text-gray-800 font-slab px-12 pt-2 py-2 xs:px-8">
        <AiTwotoneSound className="dark:text-light" />
        <p className="ml-2 sm:text-xl ">Categories</p>
      </span>{" "}
      <CategoryList />
      <HomePage />
      <span className="text-2xl underline dark:text-light bg-light dark:bg-dark font-bold flex justify-start items-center text-gray-800 font-slab px-12 xs:px-8 pt-8 py-2 xs:pt-1">
        <AiTwotoneSound className="dark:text-light" />
        <p className="ml-2 sm:text-xl ">Recent Templates & components</p>
      </span>
      <Easy />
      <div className="text-2xl flex justify-start items-center w-full  dark:text-light bg-light dark:bg-dark font-bold text-gray-800 font-slab px-12 xs:px-8 pt-8 py-2 xs:pt-1">
        <AiTwotoneSound className="dark:text-light" />
        <div className="ml-2 sm:text-xl xs:text-sm flex justify-start items-center">
          <h5 className="underline">Dev Community Blogs & Articles</h5>
          <DevIcon />
        </div>
      </div>
      <Dev />
      <span className="text-2xl underline dark:text-light bg-light dark:bg-dark font-bold flex justify-start items-center text-gray-800 font-slab px-12 xs:px-8 pt-8 py-2 xs:pt-1">
        <AiTwotoneSound className="dark:text-light" />
        <p className="ml-2 sm:text-xl ">Recent Answers on StackOverFlow</p>
      </span>
      <Question />
    </section>
    </>
  );
}
