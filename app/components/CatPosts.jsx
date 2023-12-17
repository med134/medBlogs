"use client";
import React, { useEffect, useState } from "react";

const CatPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchSeoData = async () => {
      const res = await fetch(
        `https://hn.algolia.com/api/v1/search?query=software_developments`,
        {
          cache: "no-store",
        }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setPosts(data.hits);
      console.log("data", data.hits);
    };
    fetchSeoData();
  });
  return (
    <>
      <div>
        {posts.map((item) => {
          <h1 key={item.objectID}>{item.title}</h1>
        })}
      </div>
    </>
  );
};

export default CatPosts;
