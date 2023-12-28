"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import SliderSkelton from "./SliderSkelton";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://www.medcode.dev/api/posts")
      .then((res) => res.json())
      .then((data) => {
        const sortedPosts = data?.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setPosts(sortedPosts);
        setLoading(false);
      });
  }, []);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? posts.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === posts.length - 1 ? 0 : prevIndex + 1
    );
  };
  const FormatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center max-w-xl mx-auto">
        <button
          onClick={goToNextSlide}
          aria-label="Previous slide"
          id="keen-slider-previous-desktop"
          className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5 rtl:rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <div className="flex overflow-hidden">
          {loading ? (
            <SliderSkelton />
          ) : (
            posts.map((slide, index) => (
              <div
                key={slide._id}
                className={`w-full flex-shrink-0 ${
                  index === currentIndex ? "block" : "hidden"
                }`}
              >
                <div className="p-8 rounded-lg shadow-md xs:p-2">
                  <div className="overflow-hidden h-[450px] xs:h-auto bg-white rounded-lg shadow transition hover:shadow-lg">
                    <Image
                      alt="template"
                      width={300}
                      height={300}
                      src={slide.image}
                      loading="lazy"
                      className="h-56 w-full object-cover xs:object-contain xs:h-44"
                    />
                    <div className="bg-white p-4 sm:p-4">
                      <span className="flex justify-start items-center py-2 dark:text-light">
                        <FaRegCalendarAlt className="w-5 h-5 text-gray-800 dark:text-light" />
                        <span className="ml-2 font-semibold dark:text-light xs:text-sm">
                          {FormatDate(slide?.createdAt?.slice(0, 10))}
                        </span>
                      </span>
                      <Link href={`/templates`}>
                        <h3 className="mt-0.5 text-2xl text-dark font-extrabold xs:text-xl xs:font-bold">
                          {slide.title}
                        </h3>
                      </Link>
                      <p className="mt-2 line-clamp-3 text-sm text-gray-500 xs:text-xs">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <button
          aria-label="Next slide"
          onClick={goToPreviousSlide}
          id="keen-slider-next-desktop"
          className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
        >
          <svg
            className="h-5 w-5 rtl:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
