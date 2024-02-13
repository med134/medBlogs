import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiTwotoneSound } from "react-icons/ai";
import { DevIcon } from "./Icons";
const getData = async () => {
  const res = await fetch("https://dev.to/api/articles?username=med_code", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  const templates = await res.json();
  const sortedPosts = templates?.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  return sortedPosts;
};
const Dev = async () => {
  const dev = await getData();
  return (
    <section className="pt-16 md:pt-8 xs:pt-3 dark:bg-dark">
      <div className="text-2xl flex justify-start items-center w-full  dark:text-light bg-white dark:bg-dark font-bold text-gray-800 font-slab px-12 xs:px-8 pt-8 py-2 xs:pt-1">
        <AiTwotoneSound className="dark:text-light" />
        <div className="ml-2 sm:text-xl xs:text-sm flex justify-start items-center">
          <h5 className="underline">Dev Community Blogs & Articles</h5>
          <DevIcon />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 lg:grid-cols-3 lg:gap-4 px-16 py-8 lg:px-8 md:flex md:flex-wrap sm:px-2">
        {dev?.map((item, index) =>
          index < 6 ? (
            <div className="wow fadeInUp relative overflow-hidden rounded-md bg-light shadow-lg dark:bg-dark dark:border dark:border-light">
              <div href="/" className="relative block h-[160px] w-full">
                <span className="absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full bg-blue-500 py-2 px-4 text-sm font-semibold capitalize text-white">
                  {item.tag_list[0]}
                </span>
                <Image src={item.cover_image} alt={item.title} fill />
              </div>
              <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
                <h3>
                  <Link
                    href={item.url}
                    target="blank"
                    className="mb-1 block text-xl font-bold text-black hover:text-[#075985] dark:text-white dark:hover:text-primary sm:text-2xl"
                  >
                    {item.title}
                  </Link>
                </h3>
                <p className="mb-6 border-b border-body-color dark:text-light border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
                  {item.description}
                </p>
                <div className="flex items-center">
                  <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
                    <div className="mr-4">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full">
                        <Image
                          src={item.user.profile_image}
                          alt="author"
                          fill
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                        By {item.user[0]}
                      </h4>
                      <p className="text-xs text-body-color dark:text-light">
                        medcode
                      </p>
                    </div>
                  </div>
                  <div className="inline-block">
                    <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                      Date
                    </h4>
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
