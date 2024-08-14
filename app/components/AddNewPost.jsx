"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { useRouter } from "next/navigation";

const AddNewPost = () => {
  const session = useSession();
  const [selectedJobs, setSelectedJobs] = useState("");
  const [selectStatus, setSelectStatus] = useState("draft");
  console.log(selectedJobs);
  const router = useRouter();
  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/dashboard/add-templates");
    } else {
      router.push("/dashboard/login");
    }
  }, [session]);
  const handelStatus = (event) => {
    setSelectStatus(event.target.value);
  };
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
    const blogSlug = e.target[2].value;
    const slug = blogSlug.replace(/\s+/g, "-").toLowerCase();
    const image = e.target[3].value;
    const link = e.target[4].value;
    const category = e.target[5].value;
    const code = e.target[6].value;
    const job = selectedJobs;
    const status = selectStatus;
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
          status,
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
    <div className="p-8 py-4 sm:p-2 sm:py-2 md:p-2 md:py-2 lg:p-2 lg:py-2 dark:bg-dark">
      <h1 className="text-gray-700 text-left py-6 text-2xl lg:text-2xl dark:text-light">
        Create a Templates & Component
      </h1>
      <form className="text-left text-gray-700 p-6" onSubmit={handleSubmit}>
        <div className="w-full grid grid-cols-2 gap-6">
          <input
            required
            type="text"
            placeholder="Title"
            className="h-12 w-full rounded-md border m-3 bg-white px-10 text-sm outline-none focus:ring sm:px-2"
          />
          <input
            required
            type="text"
            placeholder="Description"
            className="h-12 w-full rounded-md border m-3 bg-white px-5 text-sm outline-none focus:ring"
          />
          <input
            required
            type="text"
            placeholder="slug-example-title"
            className="h-12 w-full rounded-md border m-3 bg-white px-5 text-sm outline-none focus:ring"
          />
          <input
            required
            type="text"
            placeholder="Image url"
            className="h-12 w-full rounded-md border m-3 bg-white px-5 text-sm outline-none focus:ring"
          />
          <input
            required
            type="text"
            placeholder="Link preview"
            className="h-12 w-full rounded-md border m-3 bg-white px-5 text-sm outline-none focus:ring"
          />
          <input
            required
            type="text"
            placeholder="Landing ,Card, Marketing, Dashboard ,Business"
            className="h-12 w-full rounded-md border m-3 bg-white px-5 text-sm outline-none focus:ring"
          />

          <select
            id="selectChoice"
            value={selectedJobs}
            onChange={handleJobs}
            className="h-12 w-full rounded-md border m-3 bg-white px-5 text-sm outline-none focus:ring"
          >
            <option value="">Select Your jobs</option>
            <option value="Software engineer">Software engineer</option>
            <option value="Software Developer">Software Developer</option>
            <option value="Designer">Designer</option>
            <option value="Front-end Developer">Front-end Developer</option>
            <option value="Content Creator">Content Creator</option>
            <option value="student">student</option>
          </select>
          <select
            id="selectStatus"
            value={selectStatus}
            disabled={
              session?.data?.user?.name === "MOHAMMED DAKIR" ? false : true
            }
            onChange={handelStatus}
            className="h-12 w-full rounded-md border m-3  bg-white px-5 text-sm outline-none focus:ring"
          >
            <option value="draft">Draft</option>
            <option value="publish">publish</option>
          </select>
        </div>
        <textarea
          placeholder="<put your code here/>"
          required
          className="h-44 w-full max-w-full p-3 placeholder-white bg-gray-700 text-white rounded-md border m-4 px-5 text-sm outline-none focus:ring"
        />
        <button className="rounded-md font-semibold py-2 w-full bg-mainColor text-light ml-4 hover:bg-cyan-700">
          Post Now
        </button>
      </form>
      {/*  <div className="">
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
        </div> */}
    </div>
  );
};

export default AddNewPost;
