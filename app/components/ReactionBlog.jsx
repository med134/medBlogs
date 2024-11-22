"use client";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import ShareButtons from "./ShareButtons";
import { useReducer } from "react";
import { reducer } from "../utils/action";

const ReactionBlog = ({ slug }) => {
  const [state, dispatch] = useReducer(reducer, { likes: 42 });
  return (
    <div className="flex flex-col justify-start items-center">
      <div className="flex">
        <button
          onClick={() => {
            dispatch({ type: "incremented_likes" });
          }}
          className="py-1.5 px-3 hover:text-mainColor hover:scale-105 hover:shadow text-center border border-gray-300 rounded-md border-gray-400 h-8 text-sm flex items-center gap-1 lg:gap-2"
        >
          <AiOutlineLike />
          <span>{state.likes}</span>
        </button>
        <button className="py-1.5 ml-2 px-3 hover:text-mainColor hover:scale-105 hover:shadow text-center border border-gray-300 rounded-md border-gray-400 h-8 text-sm flex items-center gap-1 lg:gap-2">
          <BiDislike />
          <span>34</span>
        </button>
      </div>
      <ShareButtons url={`https://www.medcode.dev/blogs/${slug}`} />
    </div>
  );
};

export default ReactionBlog;
