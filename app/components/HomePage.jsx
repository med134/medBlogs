"use client";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import SearchTwo from "./SearchTwo";
import FirstView from "./FirstView";
import CategoryList from "./HeaderCategory";
import { AiTwotoneSound } from "react-icons/ai";
import SideBar from "./SideBar";
import Crypto from "./Crytpo";

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
    <section className="">
      <SearchTwo getSearchResult={(result) => setPosts(result)} />
      <FirstView posts={posts} loading={loading} />
      <span className="text-2xl underline dark:text-light bg-light dark:bg-dark font-bold flex justify-start items-center text-gray-800 font-slab px-12 pt-2 py-2 xs:px-8">
          <AiTwotoneSound className="dark:text-light" />
          <p className="ml-2 sm:text-xl ">Categories</p>
        </span>{" "}
        <CategoryList />
      <span className="text-2xl underline dark:text-light bg-light dark:bg-dark font-bold flex justify-start items-center text-gray-800 font-slab px-12 xs:px-8 pt-8 py-2 xs:pt-1">
        <AiTwotoneSound className="dark:text-light" />
        <p className="ml-2 sm:text-xl">Recent Articles</p>
      </span>
      <div className="main-content bg-light dark:bg-dark gap-6 px-12 xl:px-8 py-4 lg:block xs:px-5 xs:gap-1">
        <div className="main">
          <Card posts={posts} loading={loading} />
        </div>
        <div className="side">
          <Crypto/>
        </div>
      </div>
    </section>
  );
}
