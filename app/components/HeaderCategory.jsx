"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch("https://www.medcode.dev/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="grid bg-light dark:bg-dark grid-cols-6 mt-8 gap-2 px-16 lg:flex lg:justify-evenly lg:flex-wrap lg:px-8 xs:flex">
      {category?.map((item, index) =>
        index > 0 ? (
          <div
            key={item._id}
            className="relative z-1 flex justify-center items-center content-center overflow-hidden h-24 w-24 md:w-24 md:h-24 xs:h-8 bg-gradient-to-r from-slate-300 to-slate-400 cursor-pointer rounded-xl group hover:shadow-2xl hover:shadow-gray-600/10 xs:hover:bg-white xs:hover:text-dark"
          >
            <Image
              src={item?.image}
              loading="lazy"
              width={200}
              height={200}
              className="w-16 h-16 rounded-full object-cover transition-transform group-hover:scale-105 md:w-10 md:h-10 xs:hidden"
              alt="category"
            />

            <Link
              href={`/category/${item?.value}`}
              className="absolute xs:relative xs:block inset-0 opacity-0 xs:opacity-100 group-hover:opacity-100 flex-wrap items-center justify-center transition-opacity duration-300 ease-in-out bg-black bg-opacity-75 xs:bg-transparent text-light"
            >
              <h5 className="text-sm font-semibold text-center mt-10 xs:mt-0 md:text-sm">
                {item?.label}
              </h5>
            </Link>
          </div>
        ) : null
      )}
    </div>
  );
};

export default CategoryList;
