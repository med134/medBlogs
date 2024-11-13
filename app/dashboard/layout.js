import DashboardNav from "../components/DashboardNav";
import MainSideBarDashboard from "../ui/sidebar/MainSideBarDashboard";
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
const DashboardLayout = async ({ children }) => {
  return (
    <div className="flex">
      <MainSideBarDashboard />
      <div className="flex-1">
        <DashboardNav />
        <div className="ml-[20%] xl:px-6 lg:ml-2 p-4 xs:p-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
