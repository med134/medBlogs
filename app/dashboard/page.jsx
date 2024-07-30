import React from "react";
import HomeDashboard from "../components/HomeDashboard";
import ChartPage from "../components/ChartPage";

export default function DashBoard() {
  return (
    <div className="p-12 w-[100%] bg-white dark:bg-dark sm:p-4 col-auto pt-20 px-1">
      <h1 className="text-2xl mt-4 flex text-dark font-semibold">
        Dashboard <span className="text-mainColor ml-2">Panel</span>
      </h1>
      <HomeDashboard />
      <ChartPage />
    </div>
  );
}
