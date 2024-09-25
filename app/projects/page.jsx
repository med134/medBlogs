import React from "react";
import Layout from "../components/Layout";
import { Project, FeaturedProject } from "../components/ProjectArtcle";
import TransitionEffect from "../components/TransitionEffect";
import { miniProject, ProjectFull } from "../components/ProjectArrays";
export const metadata = {
  title: "medCode-Web Development Projects |medCode",
  description: `Discover the latest web app projects created by MedCode, free and premium code source projects for beginners, React.js Next.js,javascript,HTML CSS`,
  keywords: [
    "Web Development",
    "projects beginners",
    "projects ideas",
    "projects github",
    "free projects",
    "projects for resume",
    " Programming Languages",
    "Software Engineering",
    "Front-end",
    "UI/UX Design",
    "Frameworks",
    "Best Practices",
    "Web Design",
    "Mobile Development",
    "Learning Resources",
    "IDEs (Integrated Development Environments)",
    "Problem Solving",
    "Code Snippets",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `/projects`,
    languages: {
      "en-Us": `/en-us/projects`,
    },
    types: {
      "application/rss+xml": "https://www.medcode.dev/rss",
    },
  },
  openGraph: {
    title: "medCode|Projects",
    description: `Discover the latest web app projects created by MedCode, free and premium code source projects for beginners, React.js Next.js,javascript,HTML CSS`,
    images: [
      {
        url: "/app/images/projects/project7.jpg",
        width: "400",
        height: "300",
      },
    ],
  },
};

const page = () => {
  return (
    <>
      <TransitionEffect />
      <main className="w-full sm:mb-6 flex flex-col items-center justify-center bg-light py-24 md:py-10  dark:text-light dark:bg-dark">
        <Layout className="pt-16 md:pt-10 sm:pt-6 xs:pt-8 xs:p-8">
          <h1 className="text-7xl text-dark font-sans md:text-5xl font-extrabold text-center py-10">
            Imagination Trumps Knowledge!
          </h1>
          <div className="flex flex-col justify-center items-center">
            <div className="mb-6">
              {ProjectFull.map((item, index) => {
                if (index === 0)
                  return (
                    <FeaturedProject
                      key={item.id}
                      type={item.type}
                      title={item.title}
                      summary={item.summary}
                      img={item.image}
                      link={item.link}
                      github={item?.gitHub}
                    />
                  );
              })}
            </div>
            <div className="flex justify-between items-center md:flex md:flex-col p-2 mb-6">
              {miniProject.map((item, index) => {
                if (index < 2)
                  return (
                    <Project
                      className="px-6"
                      key={item.id}
                      type={item.type}
                      title={item.title}
                      img={item.image}
                      link={item.link}
                      github={item?.gitHub}
                    />
                  );
              })}
            </div>
            <div className="mb-6">
              {ProjectFull.map((item, index) => {
                if (index === 1)
                  return (
                    <FeaturedProject
                      key={item.id}
                      type={item.type}
                      title={item.title}
                      summary={item.summary}
                      img={item.image}
                      link={item.link}
                      github={item?.gitHub}
                    />
                  );
              })}
            </div>
            <div className="flex justify-between items-center md:flex md:flex-col p-2 mb-6">
              {miniProject.map((item, index) => {
                if (index > 1 && index < 4)
                  return (
                    <Project
                      className="px-6"
                      key={item.id}
                      type={item.type}
                      title={item.title}
                      img={item.image}
                      link={item.link}
                      github={item?.gitHub}
                    />
                  );
              })}
            </div>
            <div className="mb-6">
              {ProjectFull.map((item, index) => {
                if (index === 2)
                  return (
                    <FeaturedProject
                      key={item.id}
                      type={item.type}
                      title={item.title}
                      summary={item.summary}
                      img={item.image}
                      link={item.link}
                      github={item?.gitHub}
                    />
                  );
              })}
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default page;
