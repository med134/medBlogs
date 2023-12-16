"use client";
import React, { useState, useEffect } from "react";
const Hero = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPost = () => {
      fetch(`https://dev.to/api/articles?username=med_code`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setPosts(data);
        });
      console.log("object", posts);
    };
    getPost();
  }, []);
  return (
    <div>
      {posts?.map((item) => {
        <h1 key={item.id}>{item.title}</h1>;
      })}
    </div>
  );
};
export default Hero;
