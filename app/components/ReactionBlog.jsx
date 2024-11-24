"use client";
import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import ShareButtons from "./ShareButtons";
import { incrementLike } from "../utils/action";

const ReactionBlog = ({ slug, totalLikes, BlogId }) => {
  const numberOfLikes = totalLikes?.numberOfLikes;
  const [likes, setLikes] = useState(numberOfLikes ? numberOfLikes : 1);
  const [isClicked, setIsClicked] = useState(false);
  const [disLike, setDisLike] = useState(0);

  const handelDisLike = () => {
    if (disLike < 1) setDisLike(disLike + 1);
  };
  return (
    <>
      <div className="flex flex-col justify-start items-center p-2 border mb-1 rounded-md">
        <div className="flex">
          <button
            onClick={async () => {
              if (!isClicked) {
                const updatedLikes = await incrementLike(BlogId);
                setLikes(updatedLikes);
                setIsClicked(true);
              }
            }}
            className={`${
              isClicked ? "bg-mainColor" : "bg-transparent"
            }py-2 px-10 hover:text-mainColor hover:scale-105 hover:shadow text-center border border-gray-300 rounded-md  h-8 text-sm flex items-center gap-1 lg:gap-2`}
          >
            <AiOutlineLike
              className={`w-5 h-5 ${isClicked ? "fill-mainColor" : ""}`}
            />
            <span>{likes}</span>
          </button>
          <button
            onClick={() => handelDisLike()}
            className="py-2 ml-2 px-10 hover:text-mainColor hover:scale-105 hover:shadow text-center border border-gray-300 rounded-md h-8 text-sm flex items-center gap-1 lg:gap-2"
          >
            <BiDislike className="w-5 h-5" />
            <span>{disLike}</span>
          </button>
        </div>
        <ShareButtons url={`https://www.medcode.dev/blogs/${slug}`} />
      </div>
    </>
  );
};

export default ReactionBlog;
