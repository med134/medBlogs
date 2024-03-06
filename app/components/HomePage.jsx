"use client";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import { AiTwotoneSound } from "react-icons/ai";
import "../globals.css";
import CategoryCard from "./CategoryCard";
import MainSide from "./MainSide";

const HomePage = () => {
  const [sidebarWidth, setSidebarWidth] = useState("");
  const [sidebarTop, setSidebarTop] = useState("");
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
  useEffect(() => {
    const sidebarEl = document
      .querySelector(".sidebar")
      .getBoundingClientRect();
    setSidebarWidth(sidebarEl.width);
    setSidebarTop(sidebarEl.top);
  }, []);

  useEffect(() => {
    if (!sidebarTop) return;
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, [sidebarTop]);

  const isSticky = (e) => {
    const sidebarEl = document.querySelector(".sidebar");
    const scrollTop = window.scrollY;
    if (scrollTop >= sidebarTop - 10 && scrollTop <= 2600) {
      sidebarEl.classList.add("is-sticky");
    } else {
      sidebarEl.classList.remove("is-sticky");
    }
  };

  return (
    <div className="p-10 xl:p-6 sm:p-2 xs:p-2">
      <span className="text-2xl underline dark:text-light font-bold flex justify-start items-center text-gray-800 font-slab px-12 xs:px-8 pt-8 py-2 xs:pt-1">
        <AiTwotoneSound className="dark:text-light" />
        <p className="ml-2 sm:text-xl">Recent Articles</p>
      </span>
      <div className="grid grid-cols-6 p-4 xl:grid-cols-5 gap-6 lg:block">
        <div className="col-span-4 xl:col-span-3">
          <Card posts={posts} loading={loading} />
        </div>
        <div className="col-span-2 xl:col-span-2 lg:grow-1">
          <div className="sidebar lg:relative lg:top-6" style={{ width: sidebarWidth }}>
            <h3 className="py-4 text-xl font-semibold">Follow Us</h3>
            <CategoryCard />
            <div className="h-[1px] mb-4 bg-slate-400 w-auto"></div>
            <span className="font-bold text-xl">Categories</span>
            <MainSide posts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
