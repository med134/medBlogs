"use client";
import React, { useEffect, useState } from "react";

const CatPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchSeoData = async () => {
      const res = await fetch(
        `https://www.medcode.dev/api/categories`,
        {
          cache: "no-store",
        }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setPosts(data);
    };
    fetchSeoData();
  });
  return (
    <>
      <div>
        {posts.map((item) => {
          <h1 key={item._id}>{item.label}</h1>
        })}
      </div>
    </>
  );
};

export default CatPosts;
