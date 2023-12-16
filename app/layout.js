import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Software Mastery-Insider Dev Guides-Blogs | medCode",
  description: `Learning programming is accessible for beginners through free software programming
  courses These courses introduce essential best programming languages`,
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className} suppressHydrationWarning={true}>
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
