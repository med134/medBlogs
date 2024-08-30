import React from "react";
import ChartPage from "../components/ChartPage";
import HomeDash from "../components/HomeDash";

const page = async () => {
  return (
    <div className="p-12 w-[100%] bg-white dark:bg-dark sm:p-4 col-auto pt-20 px-1">
      <h1 className="text-2xl mt-4 flex text-dark font-semibold dark:text-light">
        Dashboard <span className="text-mainColor ml-2">Panel</span>
      </h1>
      <HomeDash/>
      <ChartPage />
    </div>
  );
};
export default page;
