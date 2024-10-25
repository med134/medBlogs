"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import useSWR from "swr";
import Loading from "@/app/Loading";
import dynamic from "next/dynamic";
const UserComments = dynamic(() => import("../UserComments"), { ssr: false });

const Comments = ({ postId, userData }) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, isLoading } = useSWR(
    `/api/comments?blogId=${postId._id}`,
    fetcher
  );
  const [comment, setComment] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({
          blogId: postId._id,
          username: userData.user.name,
          imageUser: userData.user.image,
          comment,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      className={`w-full bg-white  p-2 dark:bg-dark ${
        userData ? "border rounded-lg " : "border-none"
      }`}
    >
      <span className="font-bold text-xl py-6 mb-6 dark:text-light">
        Comments
      </span>
      <div>
        {userData ? (
          <form
            className={`${styles.write} dark:bg-dark dark:text-light p-2`}
            onSubmit={handleSubmit}
          >
            <Image
              width={40}
              height={40}
              loading="lazy"
              quality={40}
              src={userData.user.image}
              alt="photo_profile"
              className="w-10 h-10 rounded-[50%] cursor-pointer"
            />
            <input
              placeholder="write a comment..."
              required
              className="bg-gray-100 rounded border border-gray-400  leading-normal resize-none w-full h-20 sm:h-12 py-2 px-4 sm:px-1 font-medium placeholder-gray-700 focus:outline-none focus:bg-white dark:bg-dark dark:text-light dark:placeholder-light"
              onChange={(e) => setComment(e.target.value)}
            />
            <button className="text-xl sm:text-sm bg-mainColor text-light px-4 py-4 rounded-lg font-semibold p-4">
              Post
            </button>
          </form>
        ) : (
          <Link
            href="/login"
            className="w-full flex justify-center py-2 text-center pt-1 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-mainColor hover:bg-cyan-700"
          >
            Login to write a comment
          </Link>
        )}
      </div>
      <div className={styles.comments}>
        {isLoading ? <Loading /> : <UserComments data={data} />}
      </div>
    </div>
  );
};

export default Comments;
