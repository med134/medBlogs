import React from "react";
import AddNewArticle from "@/app/components/AddNewArticle";
export const metadata = {
  title: "Dashboard Add Blogs | medCode",
  description: `Elevate Your Web Development with Free Blogs & Articles & code source Our meticulously designed frontend dashboard templates and components`,
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
    canonical: `/dashboard/add-articles`,
    languages: {
      "en-Us": `/en-us/dashboard/add-articles`,
    },
    types: {
      "application/rss+xml": "https://www.medcode.dev/rss",
    },
  },
};
const Page = () => {
  return (
    <div className="dark:bg-dark pt-[120px] md:pt-[80px] sm:pt-8">
      <AddNewArticle />
    </div>
  );
};

export default Page;
