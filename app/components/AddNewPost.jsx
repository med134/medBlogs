"use client";
import React, { useState } from "react";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import AlertBar from "./AlertBar";
import useSWR from "swr";
import Loading from "../Loading";
import Image from "next/image";

const AddNewPost = () => {
  const session = useSession();
  if (session.status === "unauthenticated") {
    redirect("/dashboard/login");
  }
  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const description = e.target[1].value;
    const image = e.target[2].value;
    const link = e.target[3].value;
    const category = e.target[4].value;
    const code = e.target[5].value;
    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          description,
          image,
          link,
          category,
          code,
          username: session.data.user.name,
        }),
      });
      <div>
        <AlertBar />
      </div>;
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading, mutate } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );
  return (
    <div className="inline-block p-8 py-4 sm:p-2 sm:py-2 md:p-2 md:py-2 lg:p-2 lg:py-2 dark:bg-dark">
      <div className="w-full flex justify-start items-center px-4">
        <Link href="/dashboard">
          <FaArrowLeft className="text-2xl text-gray-700 hover:text-slate-400 dark:text-light" />{" "}
        </Link>
        <h1 className="text-gray-700 text-3xl lg:text-2xl dark:text-light font-bold ml-[30%] xs:text-[16px] md:ml-[20%] xs:ml-4">
          Create a Templates & Component
        </h1>
      </div>
      <div className="p-8 flex justify-between md:inline-block sm:items-center sm:p-1 dark:bg-dark">
        <form className="p-4 text-left text-gray-700" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            className="h-12 w-full max-w-full rounded-md border m-4 bg-white px-5 text-sm outline-none focus:ring sm:px-2"
          />
          <input
            type="text"
            placeholder="Desc"
            className="h-12 w-full max-w-full rounded-md border m-4 bg-white px-5 text-sm outline-none focus:ring"
          />
          <input
            type="text"
            placeholder="Image"
            className="h-12 w-full max-w-full rounded-md border m-4 bg-white px-5 text-sm outline-none focus:ring"
          />
          <input
            type="text"
            placeholder="Link"
            className="h-12 w-full max-w-full rounded-md border m-4 bg-white px-5 text-sm outline-none focus:ring"
          />
          <input
            type="text"
            placeholder="category"
            className="h-12 w-full max-w-full rounded-md border m-4 bg-white px-5 text-sm outline-none focus:ring"
          />
          <textarea
            placeholder="put your code here"
            className="h-44 w-full max-w-full rounded-md border m-4 bg-white px-5 text-sm outline-none focus:ring"
          />
          <button className="rounded-md font-semibold py-2 w-full bg-violet-600 text-light ml-4 hover:bg-purple-400">
            Post Now
          </button>
        </form>
        <div className="w-full p-6 rounded-lg sm:p-2 items-start">
          {isLoading ? (
            <Loading />
          ) : (
            data?.map((post) => (
              <div key={post._id}>
                <div className="">
                  <Image
                    src={post.image}
                    alt="image post"
                    className="w-32 h-32 rounded-md"
                    width={300}
                    height={300}
                    priority
                  />
                </div>
                <div className="inline-flex justify-between items-center">
                  <h2 className="text-xl p-3 px-2 sm:text-sm font-lexend py-3">
                    {post.title}
                  </h2>
                  <span
                    onClick={() => handleDelete(post._id)}
                    className="p-1 bg-red-400 text-light text-center m-3 font-semibold rounded-md cursor-pointer hover:bg-red-500 bottom-1"
                  >
                    delete
                  </span>
                  <span
                    onClick={() => handleSubmitEdit(post._id)}
                    className="p-1 bg-red-400 text-light text-center m-3 font-semibold rounded-md cursor-pointer hover:bg-red-500 bottom-1"
                  >
                    edit
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AddNewPost;
