import "./globals.css";
import React, { Suspense } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { inter } from "./components/Fonts";
import NextTopLoader from "nextjs-toploader";
import CookieBanner from "./components/Cookies";
import GoogleAnalytics from "./components/GoogleAnalytics";
export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "light" },
    { media: "(prefers-color-scheme: dark)", color: "dark" },
  ],
};

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
  applicationName: "medcode",
  site_name: "medcode",
  referrer: "origin-when-cross-origin",
  category: "technology",
  openGraph: {
    title: "Best Programming Blog & components|medCode",
    description: `Welcome to MedCode Blog! Explore Programming Made Easy for Beginners and Experts. Discover Free Components for React.js, Next.js, Vue.js, and More. Join Our Community Today!`,
    url: "https://medcode.dev",
    site_name: "MedCode Dev blog & Articles",
    images: [
      {
        url: "https://res.cloudinary.com/djcnq7nmj/image/upload/v1729700169/ogImage_nelsbz.png",
        width: "1200",
        height: "630",
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
      <Suspense fallback={null}>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-J4KQVRLWEN" />
      </Suspense>
      <body className={`${inter.className}`} suppressHydrationWarning={true}>
        <NavBar />
        {children}
        <NextTopLoader zIndex={99} showSpinner={false} />
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
