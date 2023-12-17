"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { motion } from "framer-motion";
import Loading from "../loading";
import { useInView } from "react-intersection-observer";

const Card = () => {
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const childVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };
  const parentVariants = {
    visible: {
      transition: {
        when: "beforeChildren", // Stagger children animation before parent
        staggerChildren: 0.5,
        delay: 0, // Delay between each child
      },
    },
  };

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading, mutate } = useSWR(
    `http://localhost:3000/api/articles`,

    fetcher
  );
  console.log(data);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        data?.map((item, index) =>
          index < 4 ? (
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={parentVariants}
              key={item._id}
            >
              <motion.div
                variants={childVariants}
                transition={{ delay: index * 1 }}
              >
                <section className="w-auto p-4 flex justify-between bg-white items-start border border-gray-500 rounded-xl">
                  <div className="text-start">
                    <span className="flex justify-start items-center py-2">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="ml-2 font-semibold">
                        September 12,2023
                      </span>
                    </span>
                    <Link href={`/blogs`}>
                      <span
                        className="bg-gradient-to-r text-2xl font-semibold from-red-300 to-red-600 bg-[length:0px_10px] bg-left-bottom
      bg-no-repeat
      transition-[background-size]
      duration-500
      hover:bg-[length:100%_3px]
      group-hover:bg-[length:100%_10px]
      dark:from-red-800 dark:to-purple-900"
                      >
                        {item.title}
                      </span>
                    </Link>
                    <p className="text-sm text-gray-700 py-3">
                      The conventional metaphor for career success is a ladder,
                      but there are a lot of problems with this narrative.
                    </p>
                    <div className="flex items-center justify-start py-3">
                      <Image
                        src="https://i.ibb.co/mSjZwpw/download.png"
                        alt="userImage"
                        className="w-8 h-8 rounded-full"
                        width={24}
                        height={24}
                      />
                      <p className="text-sm text-gray-500 ml-2">
                        MOHAMMED DAKIR
                      </p>
                    </div>
                    <div>
                      <Link
                        href="/"
                        className="flex justify-start items-center"
                      >
                        <span className="bg-light p-1 ml-2 px-1 text-gray-800 rounded-md font-semibold hover:bg-slate-800 hover:text-white transition-transform duration-75 ease-out">
                          #{item.tags}
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="">
                    <Image
                      src={
                        "https://i.ibb.co/P1rrNTR/portada-Junio17-Teje-comp.jpg"
                      }
                      alt="blog image"
                      width={400}
                      height={400}
                      className="object-cover rounded-xl w-96 h-52 border border-gray-500"
                    />
                  </div>
                </section>
              </motion.div>
            </motion.div>
          ) : null
        )
      )}
    </>
  );
};
export default Card;
