"use client";
import React, { useState, useEffect } from "react";
import { searchFunction } from "../utils/action";
import CardSearch from "./CardSearch";

const SearchBar = ({ posts, firstSearch, queryOne }) => {
  const [articles, setArticles] = useState(posts);
  const [suggestions, setSuggestions] = useState(firstSearch);
  const [query, setQuery] = useState(queryOne);

  const onChangeHandle = (query) => {
    const filteredPosts = articles.filter((post) => {
      const regex = new RegExp(`${query}`, "gi");
      return post.title.match(regex) || post.description.match(regex);
    });
    setSuggestions(filteredPosts);
    setQuery(query);
  };
  useEffect(() => {}, [query]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const articles = await searchFunction(query);
    const searchResult = JSON.parse(JSON.stringify(articles));
    setSuggestions(searchResult);
  };
  return (
    <div className="sm:px-4">
      <form
        onSubmit={handleSearch}
        className="rounded-full sticky max-w-2xl py-2 px-6 bg-gray-50 border inline-flex w-full justify-center focus-within:border-gray-300 xs:px-2 xs:py-1 dark:bg-dark dark:border-light dark:shadow-light"
      >
        <input
          type="text"
          placeholder="Search for components & templates..."
          value={query}
          onChange={(e) => onChangeHandle(e.target.value)}
          className="bg-transparent w-full dark:text-light focus:outline-none font-semibold border-0 focus:ring-0 px-0 py-0"
          name="topic"
        />
         <button
          type="submit"
          name="search-button"
          title="search-button"
          aria-labelledby="search-button"
          className="flex flex-row cursor-not-allowed disabled items-cente justify-center px-4 rounded-full border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-mainColor text-white font-medium tracking-wide border-transparent py-1 h-[38px]"
        >
          <svg
            className="text-gray-200 h-5 w-5 p-0 fill-current hover:text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            style={{ enableBackground: "new 0 0 56.966 56.966" }}
            xmlSpace="preserve"
          >
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </form>
      {suggestions.length > 0 && (
        <div className="grid justify-center p-10 grid-cols-3 lg:grid-cols-2 gap-6 mt-8 md:block bg-light px-16 sm:px-6 dark:bg-dark">
          {suggestions.map((item) => (
            <CardSearch key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
