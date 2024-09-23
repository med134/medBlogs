import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { inter } from "./components/Fonts";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://www.medcode.dev"),
  title: "Best Programming Blog & free components|medCode",
  description: `Welcome to medCode Blog! Explore Programming Made Easy for Beginners and Experts. Discover Free Components for React.js, Next.js, Vue.js, and More. Join Our Community Today!`,
  keywords: [
    "programming",
    "freelance",
    "frontend developer",
    "portfolio",
    "make money online",
  ],
  applicationName: "MedCode Dev blog & Articles",
  referrer: "origin-when-cross-origin",
  category: "technology",
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
      <body className={`${inter.className}`}>
        <NavBar />
        <Script
          strategy="lazyOnload"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-J4KQVRLWEN"
        ></Script>
        {children}
        <Footer />
        <Analytics mode={"production"} />
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId="G-J4KQVRLWEN" />
    </html>
  );
}
