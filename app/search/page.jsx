import React from "react";
import { getAllCategories, getPosts, searchFunction } from "../utils/action";
import SearPage from "../components/SearchPage";

const page = async ({ searchParams }) => {
  const { query } = await searchParams;
  const allResult = await searchFunction((await searchParams).query);
  const articles = await getPosts();
  const cat = await getAllCategories();
  return (
    <div className="bg-light dark:bg-dark pt-36 text-center w-[100%]">
      <SearPage
        posts={articles}
        firstSearch={allResult}
        queryOne={query}
        cat={cat}
      />
    </div>
  );
};

export default page;
