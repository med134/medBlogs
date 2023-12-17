"use client";
import React,{useState,useEffect} from "react";
import Link from "next/link";

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
  return (
    <section>
      {dev?.map((item, index) =>
        index < 6 ? (
          <div
            key={item.id}
            className="mt-3 bg-white dark:bg-dark shadow-md p-3 border border-b-gray-500 dark:border-b-light"
          >
            <p className="text-xl font-semibold text-gray-800 dark:text-light">
              {item.title}
            </p>
            <p className="mt-1 text-sm mb-2 text-gray-500 dark:text-light">
              {item.description}
            </p>

            <p className="mt-1 text-sm ml-2 mb-2 underline text-gray-900 font-semibold dark:text-light">
              #{item.tags}
            </p>

            <Link
              href={item.url}
              target="_blank"
              className="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 hover:underline active:text-rose-700"
            >
              Read more...
            </Link>
          </div>
        ) : null
      )}
    </section>
  );
};

export default SideBar;
