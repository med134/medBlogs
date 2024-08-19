import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import GoogleAnalytic from "./components/GoogleAnalytic";
import dynamic from "next/dynamic";
const CookiesBanner = dynamic(() => import("./components/Cookies"), {
  ssr: false,
});
import { inter } from "./components/Fonts";

export const metadata = {
  metadataBase: new URL("https://www.medcode.dev"),
  title: "Best Programming Blog & free components|medCode",
  description: `Welcome to medCode Blog! Explore Programming Made Easy for Beginners and Experts. Discover Free Components for React.js, Next.js, Vue.js, and More. Join Our Community Today!`,
  generator: "Next.js",
  applicationName: "MedCode Dev blog & Articles",
  referrer: "origin-when-cross-origin",
  keywords: [
    "programming",
    "freelance",
    "frontend developer",
    "online jobs",
    "portfolio",
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
  creator: "Med Dakir",
  formatDetection: {
    email: "med@vivacode.dev",
    address: "312 Lovely Street, NY",
    telephone: false,
  },
  openGraph: {
    title: "Best Programming Blog & components|medCode",
    description: `Welcome to MedCode Blog! Explore Programming Made Easy for Beginners and Experts. Discover Free Components for React.js, Next.js, Vue.js, and More. Join Our Community Today!`,
    url: "https://medcode.dev",
    images: [
      {
        url: "https://i.ibb.co/7C7bbTZ/Frame-1.png",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytic />
      <body
        className={`${inter.className} w-[100%]`}
        suppressHydrationWarning={true}
      >
        <NavBar/> 
        {children}
        {<CookiesBanner />}
        <Footer />
      </body>
    </html>
  );
}
