import {
  FaGithubAlt,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { FaYoutube, FaDev } from "react-icons/fa";

export const ProjectFull = [
  {
    id: 1,
    title: "Free Tailwind CSS + Next.js Starter Template",
    link: "https://startup-jade.vercel.app/",
    image:
      "https://res.cloudinary.com/djcnq7nmj/image/upload/v1726591108/startapImage_eeoima.png",
    type: "Website App",
    summary:
      "Tailwind CSS + Next.js Starter Template is designed and crafted for startup and SaaS business websites. This open-source starter template is free to use for personal and commercial project",
    gitHub: "https://github.com/med134/startup",
  },
  {
    id: 2,
    title: "Modern Ecommerce website",
    link: "https://med-stores.vercel.app/",
    image:
      "https://res.cloudinary.com/djcnq7nmj/image/upload/v1726591107/project1_dtuuhw.png",
    type: "store web app",
    summary:
      "an innovative and user-friendly e-commerce store that offers a wide range of trendy and fashionable clothing for men and women. Our store aims to provide customers with a seamless online shopping experience using typeScript with Next.js and tailwind css",

    gitHub: "https://github.com/med134/stote-ecommerce-nextjs",
  },
  {
    id: 3,
    title: "Modern Real Estate App",
    link: "https://estate-app-web.vercel.app/",
    image:
      "https://res.cloudinary.com/djcnq7nmj/image/upload/v1726591105/project5_siw7tl.png",
    type: "Web App",
    summary:
      "Discover a Modern Real Estate App programming with React js and tailwind css with modern Design frontend",

    gitHub: "https://github.com/codebucks27/wibe-studio",
  },
];

export const miniProject = [
  {
    id: 1,
    title: "Next.js Blogging Website with Sanity",
    link: "https://stote-ecommerce-nextjs-gezn.vercel.app/",
    image:
      "https://res.cloudinary.com/djcnq7nmj/image/upload/v1726591108/project3_rgvbve.png",
    type: "Website App",
    gitHub: "https://github.com/med134/blog-with-nextjs-sanity",
  },
  {
    id: 2,
    title: "Example portfolio of designer",
    link: "https://my-portfolio-topaz-gamma.vercel.app/",
    image:
      "https://res.cloudinary.com/djcnq7nmj/image/upload/v1726591102/project4_tvl4yh.png",
    type: "Website",
    gitHub: "",
  },
  {
    id: 3,
    title: "Authentication with Next.js",
    link: "https://auth-weith-nextjs.vercel.app/",
    image:
      "https://res.cloudinary.com/djcnq7nmj/image/upload/v1726591112/project7_ngdhg5.jpg",
    type: "Featured Project",
    gitHub: "https://github.com/med134/auth-weith-nextjs",
  },
  {
    id: 4,
    title: "Store Ecommerce website",
    link: "https://devdreaming.com",
    image:
      "https://res.cloudinary.com/djcnq7nmj/image/upload/v1726591110/project6_koerwd.png",
    type: "Shopping website",
    gitHub: "https://github.com/med134/medStores/tree/main",
  },
  {
    id: 5,
    title: "Screenshot App responsive",
    link: "https://screen-woad.vercel.app/",
    image:
      "https://res.cloudinary.com/djcnq7nmj/image/upload/v1726591109/screenshotapp_krjdtr.png",
    type: "Sass Project",
    gitHub: "https://github.com/med134/screeshotApp",
  },
];
export const ContactMenu = [
  {
    name: "Whatsapp",
    link: "whatsapp://send?text=Hello!&phone=+212600462196",
    icon: FaWhatsapp,
  },
  {
    name: "DEV.to",
    link: "https://dev.to/med_code",
    icon: FaDev,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/med_dakir/",
    icon: FaInstagram,
    ariaLabel: "Visit our Instagram profile",
    className:
      "w-auto p-2 flex bg-gradient-to-r hover:translate-y-1 from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-sm focus:outline-none focus:ring focus:border-pink-600",
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/mohammed-dakir/",
    icon: FaLinkedin,
    ariaLabel: "Visit our LinkedIn profile",
    className:
      "w-auto flex bg-[#0a66c2] p-2 rounded-sm hover:translate-y-1 focus:outline-none focus:ring focus:border-pink-600",
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com/channel/UC1dm-Rczjp52egzJTL__s8A",
    icon: FaYoutube,
    ariaLabel: "Visit our youtube channel",
    className:
      "w-auto flex justify-start p-2 hover:translate-y-1 ease-out all bg-red-600 rounded-sm items-center sm:mx-1 focus:outline-none focus:ring focus:border-red-600",
  },
  {
    name: "X",
    link: "https://x.com/mohammedda1288?s=21",
    icon: FaSquareXTwitter,
    ariaLabel: "Visit our X profile",
    className:
      "w-auto flex p-2 rounded-sm text-center dark:border dark:border-light hover:translate-y-1 bg-dark focus:outline-none focus:ring focus:border-pink-600",
  },
  {
    name: "Github",
    link: "https://github.com/med134",
    ariaLabel: "Visit our github profile",
    icon: FaGithubAlt,
    className:
      "w-auto flex p-2 rounded-sm text-center dark:border dark:border-light hover:translate-y-1 bg-dark text-pink-600 hover:text-pink-800 focus:outline-none focus:ring focus:border-pink-600",
  },
];

export const FilterTemplate = [
  {
    name: "Landing",
    className:
      "bg-green-200 hover:bg-green-300 py-1.5 px-3 rounded-lg text-sm dark:bg-dark dark:border",
  },
  {
    name: "Ecommerce",
    className:
      "bg-green-200 hover:bg-green-300 py-1.5 px-3 rounded-lg text-sm dark:bg-dark dark:border",
  },
  {
    name: "Card",
    className:
      "bg-indigo-200 hover:bg-indigo-300 py-1.5 px-3 rounded-lg text-sm dark:bg-dark dark:border",
  },
  {
    name: "Marketing",
    className:
      "bg-purple-200 hover:bg-purple-300 py-1.5 px-3 rounded-lg text-sm dark:bg-dark dark:border",
  },
  {
    name: "Dashboard",
    className:
      "bg-pink-200 hover:bg-pink-300 py-1.5 px-3 rounded-lg text-sm dark:bg-dark dark:border",
  },
  {
    name: "Business",
    className:
      "bg-green-200 hover:bg-green-300 py-1.5 px-3 rounded-lg text-sm dark:bg-dark dark:border",
  },
  {
    name: "Elearning",
    className:
      "bg-yellow-200 hover:bg-yellow-300 py-1.5 px-3 rounded-lg text-sm dark:bg-dark dark:border",
  },
];

export const myWorkLinks = [
  {
    title: "GITHUB LINK",
    url: "",
    image:
      "https://res.cloudinary.com/djcnq7nmj/image/upload/v1728326402/github_c2lbts.png",
  },
  {
    title: "WEBSITE LINK",
    url: "",
    image:
      "https://res.cloudinary.com/djcnq7nmj/image/upload/v1728326402/web-link_qu5zhs.png",
  },
  {
    title: "LINKEDIN LINK",
    url: "",
    image:
      "https://res.cloudinary.com/djcnq7nmj/image/upload/v1728326402/linkedin_wc9g2d.png",
  },
];
