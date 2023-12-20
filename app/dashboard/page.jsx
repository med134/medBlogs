import React from "react";
import NavigationBar from "../components/NavigationBar";
export const metadata = {
  title: "Dashboard | medCode ",
  description: `Welcome to My Web Developer Portfolio UX Designer Here, you'll find a showcase of my career and educational as a web developer also some of my skills`,
  keywords: ["resume", "Experience", "learning"],
  alternates: {
    canonical: `/about`,
    languages: {
      en: `/en/about`,
    },
  },
};
export default function DashBoard() {
  return (
    <div className="p-12 dark:bg-dark">
      <NavigationBar />
    </div>
  );
}
