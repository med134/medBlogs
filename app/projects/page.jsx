import React from "react";
import project1 from "@/public/images/projects/project1.png";
import project2 from "@/public/images/projects/startapImage.png";
import project3 from "@/public/images/projects/project3.png";
import project4 from "@/public/images/projects/project4.png";
import project5 from "@/public/images/projects/project5.png";
import project6 from "@/public/images/projects/project6.png";
import project7 from "@/public/images/projects/project7.jpg";
import project8 from "@/public/images/projects/screenshotapp.png";
import Layout from "../components/Layout";
import { FeaturedProject } from "../components/FeaturedProject";
import { Project } from "../components/ProjectArtcle";
import AnimatedText from "../components/AnimatedText";
import TransitionEffect from "../components/TransitionEffect";
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

const page = async () => {
  return (
    <>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center bg-light pt-[100px] dark:text-light">
        <Layout className="pt-16 xs:pt-8 xs:p-8">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 xs:inline-block">
            <div className="col-span-12 xs:mb-4">
              <FeaturedProject
                type="Website App"
                title="Free Tailwind CSS + Next.js Starter Template"
                summary="Tailwind CSS + Next.js Starter Template is designed and crafted for startup and SaaS business websites. This open-source starter template is free to use for personal and commercial project"
                img={project2}
                link="https://startup-jade.vercel.app/"
                github="https://github.com/med134/startup"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 xs:mb-4">
              <Project
                type="Website App"
                title="Next.js Blogging Website with Sanity"
                img={project3}
                link="https://stote-ecommerce-nextjs-gezn.vercel.app/"
                github="https://github.com/med134/blog-with-nextjs-sanity"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 xs:mb-4">
              <Project
                type="Website"
                title="Example portfolio of designer"
                img={project4}
                link="https://my-portfolio-topaz-gamma.vercel.app/"
                github=""
              />
            </div>

            <div className="col-span-12 xs:mb-4">
              <FeaturedProject
                type="store web app"
                title="Modern Ecommerce website"
                summary="an innovative and user-friendly e-commerce store that offers a wide range of trendy and fashionable clothing for men and women. Our store aims to provide customers with a seamless online shopping experience
                using typeScript with Next.js and tailwind css"
                img={project1}
                link="https://med-stores.vercel.app/"
                github="https://github.com/med134/stote-ecommerce-nextjs"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 xs:mb-4">
              <Project
                type="Featured Project"
                title="Authentication with Next.js"
                img={project7}
                link="https://auth-weith-nextjs.vercel.app/"
                github="https://github.com/med134/auth-weith-nextjs"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 xs:mb-4">
              <Project
                type="Shopping website"
                img={project6}
                title="Store Ecommerce website"
                link="https://devdreaming.com"
                github="https://github.com/med134/medStores/tree/main"
              />
            </div>
            <div className="col-span-12 xs:mb-4">
              <FeaturedProject
                type="Web App"
                img={project5}
                title="Modern Real Estate App"
                link="https://estate-app-web.vercel.app/"
                github="https://github.com/codebucks27/wibe-studio"
                summary="Discover a Modern Real Estate App programming with React js and tailwind css with modern Design frontend"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="SaaS project"
                img={project8}
                title="Screenshot App responsive"
                link="https://screen-woad.vercel.app/"
                github="https://github.com/med134/screeshotApp"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default page;
