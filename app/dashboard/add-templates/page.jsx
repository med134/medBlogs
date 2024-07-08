import React from "react";
import Link from "next/link";

import AddNewPost from "@/app/components/AddNewPost";
export const metadata = {
  title: "Dashboard Add templates & components | medCode",
  description: `Elevate Your Web Development with Free Tailwind CSS Templates & Components & code source Our meticulously designed frontend dashboard`,
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
  alternates: {
    canonical: `/dashboard/add-templates`,
    languages: {
      "en-Us": `/en-us/dashboard/add-templates`,
    },
    types: {
      "application/rss+xml": "https://www.medcode.dev/rss",
    },
  },
};

export default function Page() {
  return (
    <div className="w-full h-auto p-8 py-8 md:py-2 sm:p-2 sm:py-2 pt-[120px] md:pt-[80px] sm:pt-8 dark:bg-dark">
      {/* <AddNewPost /> */}
      <section className="flex items-center p-16 bg-gray-50 dark:bg-gray-700">
        <div className="container flex flex-col items-center ">
          <div className="flex flex-col gap-6 max-w-md text-center">
            <h2 className="font-extrabold text-9xl text-gray-600 dark:text-gray-100">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl md:text-3xl dark:text-gray-300">
              Sorry, we {"couldn't"} find this page.
            </p>
            <Link
              href="/"
              className="px-8 py-4 text-xl font-semibold rounded bg-purple-600 text-gray-50 hover:text-gray-200"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
