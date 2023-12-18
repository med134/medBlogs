"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import SideBarLoading from "./SideBarLoading";

const SideBar = () => {
  const [dev, setDev] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://dev.to/api/articles?username=med_code")
      .then((res) => res.json())
      .then((data) => {
        setDev(data);
        setLoading(false);
      });
  }, []);
  const FormatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };
  return (
    <section>
      {loading ? (
        <SideBarLoading />
      ) : (
        dev?.map((item, index) =>
          index < 6 ? (
            <div
              key={item.id}
              className="border border-gray-200 border-b-red-600 rounded-lg shadow-lg mb-3"
            >
              <div className="flex item-start p-3">
                <Image
                  className="w-28 h-28 rounded-lg object-cover"
                  src={item.cover_image}
                  alt="image-articles"
                  priority
                  width={300}
                  height={300}
                />
                <div className="ml-3 overflow-hidden">
                  <Link href={item.url} target="blank">
                    <span
                      className="bg-gradient-to-r text-gray-800 text-xl font-semibold from-red-300 to-red-600 bg-[length:0px_10px] bg-left-bottom
      bg-no-repeat
      transition-[background-size]
      duration-500
      hover:bg-[length:100%_3px]
      group-hover:bg-[length:100%_10px]
      dark:from-red-800 dark:to-purple-900 dark:text-light xs:text-sm "
                    >
                      {item.title}
                    </span>
                  </Link>
                  <span className="flex justify-start items-center dark:text-light">
                    <FaRegCalendarAlt className="w-5 h-5 text-gray-800 dark:text-light mt-1" />
                    <p className="max-w-xs text-sm text-gray-500 mt-3 ml-2 dark:text-light">
                      {FormatDate(item?.published_timestamp.slice(0, 10))}
                    </p>
                  </span>
                </div>
              </div>
            </div>
          ) : null
        )
      )}
    </section>
  );
};

export default SideBar;
