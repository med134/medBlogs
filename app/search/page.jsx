import React from "react";
import { getPosts, searchFunction } from "../utils/action";
import SearchBar from "../components/SearchPage";

const page = async ({ searchParams }) => {
  const { query } = await searchParams;
  const allResult = await searchFunction((await searchParams).query);
  const firstSearch = JSON.parse(JSON.stringify(allResult));
  const articles = await getPosts();
  const posts = JSON.parse(JSON.stringify(articles));
  return (
    <div className="bg-light dark:bg-dark w-full pt-36 text-center">
      <SearchBar posts={posts} firstSearch={firstSearch} queryOne={query} />
    </div>
  );
};

export default page;
