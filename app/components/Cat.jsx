"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Skeleton from "./Skeleton ";

const Cat = () => {
  const [cat, setCat] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCat(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        cat?.map((item) => (
          <ul key={item._id} className="inline-flex items-start ml-2">
            <li className="flex mx-1">
              <Link
                className="p-2 px-3 border-red-500 mb-1 rounded font-medium hover:bg-transparent hover:border-red-600 border bg-red-400/25 dark:bg-purple text-red-800 dark:text-light"
                href={`/category/${item.value}`}
              >
                {item?.label}
              </Link>
            </li>
          </ul>
        ))
      )}
    </>
  );
};

export default Cat;
