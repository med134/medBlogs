import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageNotFound from "@/app/not-found";

// Define your SVG background inline or use an SVG file
const SVGBackground = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 250"
    className="absolute bottom-0 w-full"
  >
    <path
      fill="#FFFFFF"
      fillOpacity="1"
      d="M0,128L80,138.7C160,149,320,171,480,160C640,149,800,107,960,101.3C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
    ></path>
  </svg>
);

const getData = async () => {
  const res = await fetch("https://www.medcode.dev/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    return <PageNotFound />;
  }

  return res.json();
};

const CategoryList = async () => {
  const category = await getData();

  return (
    <section
      id="category"
      className="relative bg-gradient-to-r from-blue-50 to-slate-100 dark:from-gray-800 dark:bg-dark text-white py-14 sm:py-6"
    >
      <SVGBackground />
      <span className="text-4xl font-bold flex justify-center pt-8 sm:pt-4 dark:text-light items-center text-gray-800 text-center">
        Categories
      </span>
      <div className="flex justify-center items-center px-16 mt-8 gap-2 pt-10 pb-36 lg:flex-wrap sm:px-4 sm:pt-6 sm:pb-10">
        {category?.map((item, index) =>
          index > 0 ? (
            <div
              key={item._id}
              className="relative z-1 flex justify-center items-center hover:translate-y-4 content-center overflow-hidden h-56 w-48 md:w-24 md:h-24 xs:h-16 xs:w-28 bg-gradient-to-r from-slate-300 to-slate-400 cursor-pointer rounded-xl group hover:shadow-2xl hover:shadow-gray-600/10 xs:hover:bg-white xs:hover:text-dark"
            >
              <Image
                src={item?.image}
                loading="lazy"
                width={200}
                height={200}
                className="w-24 h-24 rounded-full object-cover transition-transform group-hover:scale-105 md:w-10 md:h-10 xs:hidden"
                alt={item.value}
              />

              <Link
                href={`/category/${item?.value}`}
                className="absolute xs:relative xs:block inset-0 opacity-0 xs:opacity-100 group-hover:opacity-100 flex-wrap items-center justify-center transition-opacity duration-300 ease-in-out bg-black bg-opacity-75 xs:bg-transparent text-light"
              >
                <h2 className="text-xl font-semibold text-center mt-10 xs:mt-0 md:text-sm">
                  {item?.label}
                </h2>
              </Link>
            </div>
          ) : null
        )}
      </div>
    </section>
  );
};

export default CategoryList;
