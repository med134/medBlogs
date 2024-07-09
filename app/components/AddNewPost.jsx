"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import useSWR from "swr";
import SliderSkelton from "./SliderSkelton";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AddNewPost = () => {
  const session = useSession();
  const [selectedJobs, setSelectedJobs] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (session?.data?.user?.name === "MOHAMMED DAKIR") {
      router.push("/dashboard/add-templates");
    } else {
      router.push("/dashboard");
    }
  }, [session]);
  const handleDelete = async (slug) => {
    const confirmed = confirm("Are you sure you want to delete...?");
    if (confirmed) {
      try {
        await fetch(`/api/posts/${slug}`, {
          method: "DELETE",
        });
        mutate();
      } catch (err) {
        console.log(err);
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const description = e.target[1].value;
    const slug = e.target[2].value;
    const image = e.target[3].value;
    const link = e.target[4].value;
    const category = e.target[5].value;
    const code = e.target[6].value;
    const job = selectedJobs;
    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          description,
          slug,
          image,
          link,
          category,
          job,
          code,
          username: session.data.user.name,
          email: session.data.user.email,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const {
    data: posts,
    error,
    isLoading,
    mutate,
  } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher);
  const handleJobs = (event) => {
    setSelectedJobs(event.target.value);
  };
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
      <div className="p-4 grid grid-cols-3 gap-4 md:inline-block pt-16 sm:items-center sm:p-1 dark:bg-dark">
        <form
          className="p-4 text-left text-gray-700 col-span-2"
          onSubmit={handleSubmit}
        >
          <input
            required
            type="text"
            placeholder="Title"
            className="h-12 w-full max-w-full rounded-md border m-4 bg-white px-5 text-sm outline-none focus:ring sm:px-2"
          />
          <input
            required
            type="text"
            placeholder="Description"
            className="h-12 w-full max-w-full rounded-md border m-4 bg-white px-5 text-sm outline-none focus:ring"
          />
          <input
            required
            type="text"
            placeholder="slug"
            className="h-12 w-full max-w-full rounded-md border m-4 bg-white px-5 text-sm outline-none focus:ring"
          />
          <input
            required
            type="text"
            placeholder="Image"
            className="h-12 w-full max-w-full rounded-md border m-4 bg-white px-5 text-sm outline-none focus:ring"
          />
          <input
            required
            type="text"
            placeholder="Link"
            className="h-12 w-full max-w-full rounded-md border m-4 bg-white px-5 text-sm outline-none focus:ring"
          />
          <input
            required
            type="text"
            placeholder="category"
            className="h-12 w-full max-w-full rounded-md border m-4 bg-white px-5 text-sm outline-none focus:ring"
          />
          <div className="">
            <select
              id="selectChoice"
              value={selectedJobs}
              onChange={handleJobs}
              className="h-12 w-full max-w-full rounded-md border m-4 bg-white px-5 text-sm outline-none focus:ring"
            >
              <option value="">Select Your jobs</option>
              <option value="Software engineer">Software engineer</option>
              <option value="Software Developer">Software Developer</option>
              <option value="Designer">Designer</option>
              <option value="Front-end Developer">Front-end Developer</option>
              <option value="Content Creator">Content Creator</option>
              <option value="student">student</option>
            </select>
          </div>
          <textarea
            placeholder="<put your code here/>"
            className="h-44 w-full max-w-full p-3 placeholder-white bg-gray-700 text-white rounded-md border m-4 px-5 text-sm outline-none focus:ring"
          />
          <button className="rounded-md font-semibold py-2 w-full bg-mainColor text-light ml-4 hover:bg-cyan-700">
            Post Now
          </button>
        </form>
        <div className="">
          <span className="mb-4 underline text-center px-4 font-semibold text-xl text-dark dark:text-light">
            your recent posts
          </span>
          {isLoading ? (
            <SliderSkelton />
          ) : (
            posts?.map((post) => (
              <div
                key={post._id}
                className="mb-4 max-w-sm rounded overflow-hidden shadow-lg mt-4"
              >
                <Image
                  width={300}
                  height={300}
                  loading="lazy"
                  src={post.image}
                  alt={post.title}
                  className="w-full h-32 object-cover"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{post.title}</div>
                </div>
                <div className="flex justify-between items-center px-6 py-2">
                  <button
                    onClick={() => handleDelete(post.slug)}
                    className="text-red-500 cursor-pointer hover:underline font-semibold"
                  >
                    Delete
                  </button>
                  <Link
                    href={`/dashboard/edit-post/${post.slug}`}
                    className="text-blue-500 cursor-pointer hover:underline font-semibold"
                  >
                    Edit
                  </Link>
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
