import React from "react";
import { getAllCat } from "./FetchData";
import Image from "next/image";

const TopicsDashboard = async () => {
  const category = await getAllCat();
  console.log("cat",category)
  return (
    <div className="w-96 first-line:relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
     
    </div>
  );
};

export default TopicsDashboard;
