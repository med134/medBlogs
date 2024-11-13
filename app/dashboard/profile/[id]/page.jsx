import React from "react";
import ProfileDashboard from "@/app/components/ProfileDashboard";
import { getUserById } from "@/app/utils/action";

export const metadata = {
  title: `medCode | Profile`,
  description: `your profile dashboard you can add more information about your works or contact page`,
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
    canonical: `/dashboard/profile`,
    languages: {
      "en-Us": `/en-us//dashboard/profile`,
    },
    types: {
      "application/rss+xml": "https://www.medcode.dev/rss",
    },
  },
  openGraph: {
    title: "medCode|Profile",
    description: `your profile dashboard you can add more information about your works or contact page`,
    images: [
      {
        url: "/app/images/projects/project7.jpg",
        width: "400",
        height: "300",
      },
    ],
  },
};

const page = async ({ params }) => {
  const { id } = await params;
  const user = await getUserById(id);
  return (
    <main className="w-full">
      <ProfileDashboard user={user} />
    </main>
  );
};

export default page;
