"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
const SuggestionBar = dynamic(() => import("./SuggestionBar"), {
  ssr: false,
});
const NotFoundModel = dynamic(() => import("./NotFoundModel"), {
  ssr: false,
});
const SearchLoading = dynamic(() => import("./SearchLoading"));

const SearchTwo = ({ className }) => {
  const [posts, setPosts] = useState([]);
  const [sug, setSug] = useState([]);
  const [query, setQuery] = useState("");
  const [modal, isModal] = useState(false);
  const [loading, setLoading] = useState(false);
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
    isModal(false);
    setQuery("");
  };
  // button click to search
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(`/api/articles/search?query=${query}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("No results found");
    }
    const searchResult = await res.json();
    if (searchResult.length === 0) {
      isModal(true);
      setLoading(false);
    } else {
      isModal(false);
      setSug([]);
      setQuery(null);
      const firstResultId = searchResult[0].slug;
      router.push(`/blogs/${firstResultId}`);
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSearch}
        className={`inline-flex w-full h-12 mt-4 right-44 xl:right-6 lg:relative lg:left-0`}
      >
        <input
          type="text"
          name="search-input"
          required
          aria-labelledby="search-input"
          value={query}
          onChange={(e) => onChangeHandle(e.target.value)}
          className={`h-10 w-full border dark:placeholder-light xs:placeholder-light  sm:placeholder-light dark:border-light border-b-mainColor sm:border sm:border-b-mainColor bg-transparent text-dark placeholder-dark dark:border-b-light border-transparent text-sm lg:border lg:border-transparent lg:bg-transparent lg:border-b-slate-50  dark:text-light py-4 pl-2 lg:text-medium  outline-none focus:rounded-md focus:border-2 focus:border-mainColor lg:text-light`}
          placeholder="Search for Articles..."
        />
        <button
          type="submit"
          name="search-button"
          title="search-button"
          aria-labelledby="search-button"
          className={`inline-flex dark:border-light h-10 items-center border border-transparent focus:border-b-2 border-b-mainColor lg:border-b-light dark:border-b-light gap-2 text-white text-lg font-semibold py-1 px-4 xs:px-2 xs:border xs:border-transparent xs:border-b-white lg:bg-transparent `}
        >
          <svg
            className={`${className} text-mainColor lg:text-dark dark:fill-light sm:fill-light dark:text-dark dark:xs:text-dark h-5 w-5 p-0 fill-current  hover:text-gray-800`}
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
      {loading && <SearchLoading />}
      {sug.length > 0 && (
        <SuggestionBar sug={sug} onSugHandler={onSugHandler} />
      )}
      {modal && <NotFoundModel onClose={closeNotFoundModal} />}
    </>
  );
};

export default SearchTwo;
