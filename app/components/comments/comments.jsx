"use client";
import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Loading from "@/app/Loading";

const Comments = ({ postSlug }) => {
  const session = useSession();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, isLoading } = useSWR(
    `/api/comments?blogId=${postSlug}`,
    fetcher
  );
  const [comment, setComment] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({
          blogId: postSlug,
          username: session?.data?.user?.name,
          imageUser: session?.data?.user?.image,
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
    <div className="w-full bg-white rounded-lg border p-2 dark:bg-dark">
      <span className="font-bold text-xl py-6 dark:text-light">Comments</span>
      {session.status === "authenticated" ? (
        <form
          className={`${styles.write} dark:bg-dark dark:text-light p-2`}
          onSubmit={handleSubmit}
        >
          <Image
            width={100}
            height={100}
            loading="lazy"
            priority={false}
            src={session?.data?.user.image}
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
          href="/dashboard/login"
          className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-mainColor hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Login to write a comment
        </Link>
      )}
      <div className={styles.comments}>
        {isLoading ? (
          <Loading />
        ) : (
          data?.map((item) => (
            <div
              className="border rounded-md p-3 ml-3 my-3 bg-gray-100 dark:bg-dark dark:text-light"
              key={item._id}
            >
              <div className={styles.user}>
                <div className="flex justify-center items-center">
                  <Image
                    src={item?.imageUser}
                    alt="useImage"
                    width={100}
                    height={100}
                    loading="lazy"
                    priority={false}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="block ml-2">
                    <span className="text-sm font-semibold block text-gray-700 dark:text-light">
                      {item?.username}
                    </span>
                    <span className="text-xs text-gray-700 dark:text-light">
                      {item.createdAt.slice(0, 10)}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-medium px-3 text-gray-800 rounded-lg dark:text-light font-poppins sm:text-sm">
                {item?.comment}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Comments;
