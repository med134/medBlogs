"use client";
import React, { useEffect, useState } from "react";
import NotFoundModel from "./NotFoundModel";
import { useRouter } from "next/navigation";

const SearchTwo = () => {
  const [posts, setPosts] = useState([]);
  const [sug, setSug] = useState([]);
  const [query, setQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

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
  const onSugHandler = (query) => {
    setQuery(query);
    setSug([]);
  };
  const closeNotFoundModal = () => {
    setIsModalOpen(false);
  };
  // button click to search
  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/articles/search?query=${query}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      return alert("No results found");
    }
    const searchResult = await res.json();

    if (searchResult.length === 0) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
      setSug([]);
      setQuery("");
      const firstResultId = searchResult[0].slug;
      router.push(`/blogs/${firstResultId}`);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSearch}
        className="inline-flex w-44 h-12 mt-1 absolute right-44 xl:right-36 "
      >
        <input
          type="text"
          name="search-input"
          aria-labelledby="search-input"
          value={query}
          onChange={(e) => onChangeHandle(e.target.value)}
          className="h-10 w-44 rounded-md border border-gray-100 bg-white dark:border-light dark:bg-dark dark:text-light py-4 pl-2 shadow-sm outline-none focus:border-blue-950"
          placeholder="Search for Articles"
        />
        <button
          type="submit"
          name="search-button"
          title="search-button"
          aria-labelledby="search-button"
          className="inset-y-0 right-0 w-12 h-10 hover:text-dark bg-dark flex items-center px-4 text-gray-700 border border-gray-100 rounded-r-md hover:bg-gray-200 focus:outline-none"
        >
          <svg
            className="h-6 w-6 text-light hover:text-dark"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z"
            />
          </svg>
        </button>
      </form>

      {sug.length > 0 && (
        <ul className="mt-2 bg-white dark:bg-dark shadow-lg rounded-md max-h-96 overflow-y-auto right-44 w-44 xs:w-60 xs:right-24 top-16 scroll-m-0 absolute ">
          {sug.map((item, index) => (
            <li
              onClick={() => onSugHandler(item.title)}
              key={index}
              className="px-2 py-1 cursor-pointer text-dark border mb-2 dark:text-light hover:bg-slate-500 dark:hover:bg-slate-500"
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}
      {isModalOpen && <NotFoundModel onClose={closeNotFoundModal} />}
    </>
  );
};

export default SearchTwo;
