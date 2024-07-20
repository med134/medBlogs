import Link from "next/link";
import SideBar from "../ui/sidebar/page";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-full dark:bg-dark">
      <SideBar />
      <section className="flex-1 p-8 text-dark">{children}</section>
    </div>
  );
};

export default DashboardLayout;
