import SideBar from "../ui/sidebar/page";
export const metadata = {
  title: "Dashboard | medCode ",
  description: `Empower your online presence with a dashboard for effortless blog management. Seamlessly create, edit, and publish captivating content that engages your audience`,
  keywords: [
    "resume",
    "Experience",
    "learning",
    "articles",
    "blogs",
    "templates",
    "programming",
    "front-end",
  ],
  alternates: {
    canonical: `/dashboard`,
    languages: {
      en: `/en/dashboard`,
    },
  },
};
const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-full w-full dark:bg-dark">
      <SideBar />
      <section className="flex-1 p-8 text-dark w-full">{children}</section>
    </div>
  );
};

export default DashboardLayout;
