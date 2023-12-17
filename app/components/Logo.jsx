/* eslint-disable @next/next/no-img-element */
import React from "react";

async function getData() {
  const res = await fetch(`http://localhost:3000/api/posts`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const Logo = async() => {
  const templates = await getData();
  console.log("templates", templates);
  return (
  <div></div>
  );
};

export default Logo;
