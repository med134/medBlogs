import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiTwotoneSound } from "react-icons/ai";
import { DevIcon } from "./Icons";
import { getDevTo } from "../utils/action";


const Dev = async () => {
  const dev = await getDevTo();
  return (
    <section className="pt-16 md:pt-8 xs:pt-3 dark:bg-dark">
      <div className="text-2xl flex justify-start items-center w-full  dark:text-light bg-white dark:bg-dark font-bold text-gray-800 font-slab px-12 xs:px-4 pt-8 py-2 xs:pt-4">
        <AiTwotoneSound className="dark:text-light" />
        <div className="ml-2 sm:text-xl xs:text-xl flex justify-start items-center">
          <span className="underline">Dev Community Articles</span>
          <DevIcon />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 lg:grid-cols-3 lg:gap-4 px-16 py-8 lg:px-8 md:flex md:flex-wrap sm:px-2">
        {dev?.map((item, index) =>
          index < 6 ? (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-md bg-light md:block shadow-lg dark:bg-dark dark:border dark:border-light"
            >
              <div className="relative block h-[160px] md:h-auto w-full">
                <Image
                  src={item.cover_image}
                  alt={item.title}
                  width={400}
                  height={300}
                  quality={50}
                  loading="lazy"
                  className="md:w-full"
                />
              </div>
              <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:py-8 xl:px-5 2xl:p-8 xs:px-4">
                <h4>
                  <Link
                    href={item.url}
                    target="blank"
                    className="mb-1 block text-xl font-bold text-black hover:text-[#075985] dark:text-white dark:hover:text-primary sm:text-2xl"
                  >
                    {item.title}
                  </Link>
                </h4>
                <p className="mb-6 border-b border-body-color dark:text-light border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
                  {item.description}
                </p>
                <div className="flex items-center">
                  <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
                    <div className="mr-4">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full">
                        <Image
                          src={item.user.profile_image}
                          alt={"user image"}
                          width={30}
                          height={30}
                          loading="lazy"
                          quality={40}
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <span className="mb-1 text-sm font-medium text-dark dark:text-white">
                        By {item.user[0]}
                      </span>
                      <p className="text-xs text-body-color dark:text-light">
                        medcode
                      </p>
                    </div>
                  </div>
                  <div className="inline-block">
                    <span className="mb-1 text-sm font-medium text-dark dark:text-white">
                      Date
                    </span>
                    <p className="text-xs text-body-color dark:text-light">
                      {item.readable_publish_date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </section>
  );
};

export default Dev;
