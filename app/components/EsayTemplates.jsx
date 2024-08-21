import React from "react";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiTwotoneSound } from "react-icons/ai";
import { FormatDate, getTemplates } from "../utils/action";

const Easy = async () => {
  const templates = await getTemplates();

  return (
    <section id="templates" className="bg-light dark:bg-dark">
      <span className="text-2xl underline dark:text-light xs:pt-6 font-bold flex justify-start items-center text-gray-800 font-slab px-12 xs:px-4 xs:text-xl pt-16 py-2">
        <AiTwotoneSound className="dark:text-light" />
        <p className="ml-2 sm:text-xl ">Recent Templates & components</p>
      </span>
      <div className="grid grid-cols-4 gap-4 p-10 sm:p-3 min-h-min lg:flex lg:flex-col">
        <div
          className="flex flex-col justify-center rounded-md mt-4 h-[590px] lg:h-[400px] sm:h-auto col-span-2 align-middle relative"
          style={{
            backgroundImage:
              'url("https://blog.logrocket.com/wp-content/uploads/2023/06/Preline-UI.png")',
            backgroundPosition: "center center",
            backgroundSize: "cover",
            position: "relative",
            width: "auto",
            height: "auto",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>
          <div className="flex flex-col items-center p-8 py-12 text-center relative z-10">
            <h3 className="py-4 text-5xl font-bold text-white opacity-100 md:text-3xl sm:2xl">
              Software Mastery:Professional Free Tailwind Components & Templates
            </h3>
            <p className="text-white opacity-100 md:text-sm">
              With MedCode blogs Templates Tailwind you can optimized the
              customization process to save your team time when building
              websites.
            </p>
            <Link
              href="/templates"
              className="mt-4 font-bold text-light hover:underline"
              aria-current="page"
            >
              See More...
            </Link>
          </div>
        </div>

        <div className="flex flex-col p-6 divide-y dark:divide-gray-700 col-span-2 xs:p-3">
          {templates?.map(
            (item, index) =>
              index < 3 && (
                <div key={item._id} className="pb-4 space-y-2">
                  <span className="flex justify-start items-center py-2 dark:text-light">
                    <FaRegCalendarAlt className="w-5 h-5 text-gray-800 dark:text-light" />
                    <span className="ml-2 font-semibold dark:text-light xs:text-sm">
                      {FormatDate(item?.createdAt)}
                    </span>
                  </span>
                  <Link href={`/templates/${item.slug}`}>
                    <h4 className="text-3xl font-bold text-dark dark:text-light hover:underline hover:text-[#075985] xs:text-xl">
                      {item.title}
                    </h4>
                  </Link>
                  <p className="dark:text-light text-gray-700 xs:text-sm">
                    {item.description}
                  </p>
                  <Link
                    rel="noopener noreferrer"
                    href={`/templates/${item.slug}`}
                    className="inline-flex items-center dark:text-light py-2 space-x-2 text-sm hover:text-[#075985]"
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
      </div>
    </section>
  );
};
export default Easy;
