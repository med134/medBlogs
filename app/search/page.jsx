"use client";
import React, { useEffect, useState } from "react";

const SearchTwo = () => {
  const [posts, setPosts] = useState([]);
  const [sug, setSug] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const res = await fetch(`/api/articles`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("No results found");
        }

        const fetchedPosts = await res.json();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error(error);
        // Handle the error here (e.g., show a message to the user)
      }
    };

    handleSearch();
  }, []);

  const onChangeHandle = (query) => {
    const filteredPosts = posts.filter((post) => {
      const regex = new RegExp(`${query}`, "gi");
      return post.title.match(regex);
    });

    setSug(filteredPosts);
    setQuery(query);
  };

  return (
    <>
      <div className="relative" data-te-input-wrapper-init id="basic">
        <input
          type="text"
          value={query}
          onChange={(e) => onChangeHandle(e.target.value)}
          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear placeholder:opacity-0 focus:placeholder:opacity-100 peer-focus:text-primary motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary"
          id="exampleFormControlInput1"
        />
        <div className="suggestions">
          {sug &&
            sug.map((item, index) => (
              <div key={index}>{item.title}</div>
            ))}
        </div>
      </div>
    </>
  );
};

export default SearchTwo;
