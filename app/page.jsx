import React from "react";
import { AiTwotoneSound } from "react-icons/ai";
import HomePage from "./components/HomePage";
import Question from "./components/Question";
import Easy from "./components/EsayTemplates";
import Dev from "./components/Dev";
import CategoryList from "./components/HeaderCategory";
import FirstView from "./components/FirstView";
import TransitionEffect from "./components/TransitionEffect";
import CategoryTaskBar from "./components/CategoryTaskBar";
import ScrollUp from "./components/ScrollUp";
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
    googleSiteVerification:
      "google-site-verification=-cFXi6ELWEfl4UY9OE5i_S5QFU3LbUvdxGgW6RQgHWw",
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
      <TransitionEffect />
      <ScrollUp />
      <FirstView />
      <CategoryList />
      <HomePage />
      <Easy />
      <Dev />
      {/* <Question /> */}
    </>
  );
}
