"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
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
    const options = { month: "long", day: "numeric" };
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", options);
  };
  return (
    <section className="xs:mt-3">
      {loading ? (
        <SideBarLoading />
      ) : (
        dev?.map((item, index) =>
          index < 8 ? (
            <section key={item.id} className="flex bg-white transition dark:border dark:bg-dark hover:shadow-xl mb-8">
              <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900">
                  <span className="dark:text-light">2023</span>
                  <span className="w-px flex-1 bg-gray-900/10 dark:bg-light" />
                  <span className="dark:text-light">{formatDate(item?.published_timestamp)}</span>
                </div>
              </div>
              <div className="hidden">
                <Image
                  alt="dev blog"
                  width={100}
                  height={100}
                  loading="lazy"
                  src={item.cover_image}
                  className="aspect-square h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <Link href={item.url} target="blank">
                    <h3 className="font-bold uppercase text-gray-900 dark:text-light">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 dark:text-light">
                    {item.description}
                  </p>
                </div>
                <div className="sm:flex sm:items-end sm:justify-end">
                  <Link
                    href={item.url}
                    target="blank"
                    className="block bg-slate-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-slate-400"
                  >
                    Read Blog
                  </Link>
                </div>
              </div>
            </section>
          ) : null
        )
      )}
    </section>
  );
};

export default SideBar;