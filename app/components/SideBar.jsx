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
  const formatDate = (timestamp) => {
    const options = { month: 'long', day: 'numeric' };
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', options);
  };
  return (
    <section>
      {loading ? (
        <SideBarLoading />
      ) : (
        dev?.map((item, index) =>
          index < 6 ? (
            <article className="flex bg-white transition hover:shadow-xl mb-8">
              <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time
                  dateTime="2022-10-10"
                  className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                >
                  <span>2023</span>
                  <span className="w-px flex-1 bg-gray-900/10" />
                  <span>{formatDate(item?.published_timestamp)}</span>
                </time>
              </div>
              <div className="hidden sm:block sm:basis-56">
                <img
                  alt="Guitar"
                  src={item.cover_image}
                  className="aspect-square h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <a href="#">
                    <h3 className="font-bold uppercase text-gray-900">
                      {item.title}
                    </h3>
                  </a>
                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                    {item.description}
                  </p>
                </div>
                <div className="sm:flex sm:items-end sm:justify-end">
                  <a
                    href="#"
                    className="block bg-slate-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-slate-400"
                  >
                    Read Blog
                  </a>
                </div>
              </div>
            </article>
          ) : null
        )
      )}
    </section>
  );
};

export default SideBar;
