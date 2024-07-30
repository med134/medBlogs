import React from "react";
import { RiArticleLine } from "react-icons/ri";
import { IoStatsChart } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { getUsers } from "./FetchData";
import { getArticles } from "./FetchData";

const HomeDashboard = async () => {
  const users = await getUsers();
  const articles = await getArticles();
  const totalArticles = Object.keys(articles).length;
  const totalUsers = Object.keys(users).length;
  return (
    <div className="mt-12 w-full">
      <div className="mt-6 grid grid-cols-3 gap-4 ">
        <div className="flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <RiArticleLine className="fill-white w-10 h-10" />
          </div>
          <div className="p-4 text-right">
            <p className="block font-semibold antialiased font-sans text-sm leading-normal text-blue-gray-600">
              Total Blog
            </p>
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
              {totalArticles}
            </h4>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
            <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong className="text-green-500">+55%</strong>&nbsp;than last
              week
            </p>
          </div>
        </div>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-500 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <FaUsers className="fill-white w-10 h-10" />
          </div>
          <div className="p-4 text-right">
            <p className="block font-semibold antialiased font-sans text-sm leading-normal text-blue-gray-600">
              Total of Users
            </p>
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
              {totalUsers}
            </h4>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
            <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong className="text-green-500">+55%</strong>&nbsp;than last
              week
            </p>
          </div>
        </div>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <IoStatsChart className="fill-white w-10 h-10" />
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
              Today Money
            </p>
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
              $53k
            </h4>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
            <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong className="text-green-500">+55%</strong>&nbsp;than last
              week
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
