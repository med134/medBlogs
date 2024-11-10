import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FormatDate, searchFunction } from "../utils/action";
import Form from "next/form";
import SearchButton from "../components/SearchButton";

const page = async ({ searchParams }) => {
  const { query } = await searchParams;
  const allResult = await searchFunction(query);

  return (
    <div className="bg-light dark:bg-dark w-full py-16">
      <div className="px-16 flex justify-between items-center mt-20 md:flex md:flex-col lg:px-6">
        <h1 className="px-2 text-mainColor mt-1 md:mb-4 dark:text-light xs:text-sm text-3xl lg:text-2xl font-outFit font-bold uppercase">
          Result for search:
          <span className="text-gray-800 text-3xl ml-3 sm:text-xl dark:text-light">
            {searchParams.query}
          </span>
        </h1>
        <Form className="relative max-w-sm mx-auto w-full" action={"/search"}>
          <input
            className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2"
            type="search"
            name="query"
            required
            placeholder="Search by one keyword"
          />
          <SearchButton />
        </Form>
      </div>
      <div className="grid grid-cols-3 gap-6 p-16 lg:px-4 lg:grid-cols-2 md:block md:p-20">
        {allResult.length > 0 ? (
          allResult?.map((item) => (
            <div
              key={item._id}
              className=" shadow-lg dark:shadow-white rounded-md lg:block md:mb-6 lg:w-full sm:w-full dark:bg-dark dark:border-light"
            >
              <div className="hover:no-underline focus:no-underline dark:bg-gray-900">
                <Image
                  width={300}
                  height={300}
                  className="object-cover w-full rounded h-44 dark:bg-gray-500 md:object-fill"
                  src={item.image ? item.image.trimEnd() : imageBlog}
                  alt={item.title}
                  loading="lazy"
                />
                <div className="p-6 flex flex-col space-y-2">
                  <span className="text-mainColor font-bold tex-sm">
                    #{item.category}
                  </span>
                  <Link
                    href={`/blogs/${item.slug}`}
                    className="bg-gradient-to-r cursor-pointer text-2xl font-semibold from-red-200 to-red-400 bg-[length:0px_10px] bg-left-bottom
  bg-no-repeat
  transition-[background-size]
  duration-500
  hover:bg-[length:100%_3px]
  group-hover:bg-[length:100%_10px]
  dark:from-red-800 dark:to-purple-900 dark:text-light"
                  >
                    {item.title}
                  </Link>
                  <div className="flex justify-between items-center">
                    <Link
                      href={`/dashboard/profile/${item?.userSlug}`}
                      className="flex items-center justify-center py-3"
                    >
                      <Image
                        src={
                          item?.userImage ||
                          "https://i.ibb.co/mSjZwpw/download.png"
                        }
                        alt="userImage"
                        className="w-8 h-8 rounded-full"
                        width={24}
                        height={24}
                        loading="lazy"
                        quality={30}
                      />
                      <span className="text-xs font-semibold text-gray-800 ml-2 dark:text-light">
                        {item?.username}
                      </span>
                    </Link>
                    <div className="flex justify-start items-center py-2 dark:text-light">
                      <FaRegCalendarAlt className="w-3 h-3 text-gray-800 dark:text-light" />
                      <span className="ml-2 text-xs font-semibold dark:text-light">
                        {FormatDate(item?.createdAt)}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">
                    {item.description.slice(0, 100)}...
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-8 text-2xl text-red-600">
            <h3>
              Your keywords search not found. Please try again with another
              keyword !!
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
