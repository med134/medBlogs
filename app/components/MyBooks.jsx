"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Loading from "../loading";

const MyBooks = () => {
  const [loading, setLoading] = useState(false);
  const [book, setBooks] = useState();
  const fetchBooks = async () => {
    setLoading(true);
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=programming_algorithms`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    setBooks(data.items);
    setLoading(false);
    console.log(data.items);
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        book?.map((item) => (
          <article
            key={item.id}
            className="mx-auto my-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg dark:bg-light dark:border-light"
          >
            <Link href={item.volumeInfo.previewLink} target="_blank">
              <img
                src={item.volumeInfo.imageLinks.thumbnail}
                className="h-56 w-full object-contain overflow-hidden p-2 rounded-lg"
                alt="book_image"
              />
              <div className="flex-auto px-6 py-5">
                <span className="mb-2 flex items-center text-sm font-semibold">
                  {item.volumeInfo.authors}
                </span>
                <h1 className="mt-4 mb-3 text-xl font-semibold xl:text-xl lg:text-sm md:text-sm md:font-lexendj text-borderColor">
                  {item.volumeInfo.title}
                </h1>
                <p className="mb-4 font-light text-sm dark:text-dark">
                  {item.volumeInfo.subtitle}
                </p>
                <Link
                  href={item.volumeInfo.previewLink}
                  target="_blank"
                  className="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm"
                >
                  read now
                </Link>
              </div>
            </Link>
          </article>
        ))
      )}
    </div>
  );
};

export default MyBooks;
