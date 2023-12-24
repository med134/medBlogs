"use client";
import React, {useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import HeroLoading from "./HeroLoading";

const SlideBar = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/api/posts")
      .then((res) => res.json())
      .then((data) => {
        const sortedPosts = data?.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setPosts(sortedPosts);
        setLoading(false);
      });
  }, []);

  return (
    <section className="p-10">
      {loading ? (
        <HeroLoading />
      ) : (
        posts?.map((item, index) =>
          index < 6 ? (
            <article
              key={item._id}
              className="overflow-hidden h-[450px] bg-white rounded-lg shadow transition hover:shadow-lg"
            >
              <Image
                alt="template"
                width={300}
                height={300}
                src={item.image}
                className="h-56 w-full object-contain"
              />
              <div className="bg-white p-4 sm:p-6">
                <time
                  dateTime="2022-10-10"
                  className="block text-xs text-gray-500"
                >
                  {" "}
                  10th Oct 2022{" "}
                </time>
                <Link href={`/templates/${item._id}`}>
                  <h3 className="mt-0.5 text-2xl text-dark font-extrabold">
                    {item.title}
                  </h3>
                </Link>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  {item.description}
                </p>
              </div>
            </article>
          ) : null
        )
      )}
    </section>
  );
};

export default SlideBar;
