import React from "react";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";

const getData = async () => {
  const res = await fetch("https://www.medcode.dev/api/posts", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  const templates = await res.json();
  return templates;
};

const Easy = async () => {
  const category = await getData();
  const FormatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };

  return (
    <section className="grid grid-cols-4 gap-4 p-10 sm:p-3 min-h-min lg:flex lg:flex-col">
      <div
        className="flex flex-col justify-center rounded-md mt-4 h-[590px] lg:h-[400px] sm:h-auto col-span-2 align-middle relative"
        style={{
          backgroundImage:
            'url("https://blog.logrocket.com/wp-content/uploads/2023/06/Preline-UI.png")',
          backgroundPosition: "center center",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>
        <div className="flex flex-col items-center p-8 py-12 text-center relative z-10">
          <h4 className="py-4 text-5xl font-bold text-white opacity-100 md:text-3xl sm:2xl">
            Software Mastery:Professional Free Tailwind Components & Templates
          </h4>
          <p className="text-white opacity-100 md:text-sm">
            With MedCode blogs Templates Tailwind you can optimized the
            customization process to save your team time when building websites.
          </p>
          <Link
            href="/templates"
            className="mt-4 font-bold underline text-light hover:scale-75"
            aria-current="page"
          >
            See More...
          </Link>
        </div>
      </div>

      <div className="flex flex-col p-6 divide-y dark:divide-gray-700 col-span-2 xs:p-3">
        {category
          ?.slice()
          .reverse()
          .map(
            (item, index) =>
              index < 3 && (
                <div className="pb-4 space-y-2">
                  <span className="flex justify-start items-center py-2 dark:text-light">
                    <FaRegCalendarAlt className="w-5 h-5 text-gray-800 dark:text-light" />
                    <span className="ml-2 font-semibold dark:text-light xs:text-sm">
                      {FormatDate(item?.createdAt)}
                    </span>
                  </span>
                  <Link href={`/templates/${item.slug}`}>
                    <h3 className="text-3xl font-bold text-dark dark:text-light hover:underline xs:text-xl">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="dark:text-light text-gray-700 xs:text-sm">
                    {item.description}
                  </p>
                  <Link
                    rel="noopener noreferrer"
                    href={`/templates/${item.slug}`}
                    className="inline-flex items-center dark:text-emerald-400 py-2 space-x-2 text-sm hover:text-emerald-400"
                  >
                    <span>View Template...</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              )
          )}
      </div>
    </section>
  );
};
export default Easy;
