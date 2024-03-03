"use client";
import React, { useState, useEffect } from "react";
import BlogLoading from "./BlogLoading";
import Card from "./Card";
import { AiTwotoneSound } from "react-icons/ai";
import Youtube from "./Youtube";
import { Suspense } from "react";
export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("/api/articles")
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
    <section id="articles" className="bg-white dark:bg-dark">
      <span className="text-2xl underline dark:text-light font-bold flex justify-start items-center text-gray-800 font-slab px-12 xs:px-8 pt-8 py-2 xs:pt-1">
        <AiTwotoneSound className="dark:text-light" />
        <p className="ml-2 sm:text-xl">Recent Articles</p>
      </span>
      <div className="main-content gap-6 px-12 xl:px-8 py-4 lg:block xs:px-5 xs:gap-1">
        <div className="main">
          <Suspense fallback={<BlogLoading />}>
            <Card posts={posts} />
          </Suspense>
        </div>
        <div className="side">
          <Youtube />
        </div>
      </div>
    </section>
  );
}
