"use client";
import React, { useState } from "react";
import Image from "next/image";

const getData = async () => {
  
  const res = await fetch("https://www.medcode.dev/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};
const MakeFree = async () => {
  const data = await getData();
  

  return (
    <>
      {cat?.map((item, index) => {
        index < 5 ? (
          <div className="group relative ml-1 w-52 h-44 rounded-xl border border-light bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-1 p-2">
              <Image
                className="h-8 w-8"
                alt="category image"
                width={8}
                height={8}
                src={item?.image}
              />
              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                  {item?.label}
                </h5>
                <p className="text-gray-300">
                  Once we agree on what to build, We will start working on it
                  right away.
                </p>
              </div>
            </div>
          </div>
        ) : null;
      })}
    </>
  );
};

export default MakeFree;
