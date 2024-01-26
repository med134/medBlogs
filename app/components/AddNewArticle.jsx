"use client";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import "highlight.js/styles/a11y-dark.min.css";
import useSWR from "swr";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useQuill } from "react-quilljs";
import "react-quill/dist/quill.snow.css";
import hljs from "highlight.js";
import SliderSkelton from "./SliderSkelton";

const AddNewArticle = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedJobs, setSelectedJobs] = useState("");
  const session = useSession();
 
  const handleDelete = async (id) => {
    const confirmed = confirm("Are you sure you want to delete...?");
    if (confirmed) {
      try {
        await fetch(`/api/articles/${id}`, {
          method: "DELETE",
        });
        mutate();
      } catch (err) {
        console.log(err);
      }
    }
  };
  const ex = undefined;
  const text = ex || "";
  hljs.configure({
    languages: [
      "javascript",
      "ruby",
      "python",
      "rust",
      "java",
      "html",
      "css",
      "C",
      "C#",
    ],
  });
  const theme = "snow";
  const placeholder = "write your content...";

  const modules = {
    toolbar: [
      ["blockquote", "code-block"],
      ["bold", "italic", "underline", "strike"],
      [{ header: 1 }, { header: 2 }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],
      [{ color: [] }, { background: [] }],
      ["link", "image", "video"],
      ["clean"],
      [{ font: [] }],
      [{ align: [] }],

      [{ size: ["small", false, "large", "huge"] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ],
    syntax: {
      highlight: (text) => hljs.highlightAuto(text).value,
    },
  };
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "align",
    "color",
    "background",
  ];
  const { quill, quillRef } = useQuill({
    theme,
    modules,
    formats,
    placeholder,
  });
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleJobs = (event) => {
    setSelectedJobs(event.target.value);
  };
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const {
    data: articles,
    error,
    isLoading,
    mutate,
  } = useSWR(`/api/articles?username=${session?.data?.user?.name}`, fetcher);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const tags = e.target[1].value;
    const image = e.target[2].value;
    const description = e.target[3].value;
    const category = selectedOption;
    const job = selectedJobs;
    const content = quill.root.innerHTML;

    try {
      await fetch("/api/articles", {
        method: "POST",
        body: JSON.stringify({
          title,
          tags,
          image,
          category,
          description,
          content,
          username: session.data.user.name,
          email: session.data.user.email,
          job,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="inline-block p-8 py-8 sm:p-2 sm:py-2 dark:bg-dark">
      <div className="w-full flex justify-start items-center px-10">
        <Link href="/dashboard" role="button" name="back" aria-current="page">
          <FaArrowLeft className="text-2xl text-gray-700 hover:text-slate-400 dark:text-light" />{" "}
        </Link>
        <h1 className="text-gray-700 text-3xl lg:text-2xl dark:text-light font-bold ml-[30%] xs:text-[16px] md:ml-[20%] xs:ml-4">
          Start to Create Your Article
        </h1>
      </div>
      <div className="p-8 grid grid-cols-3 gap-4 md:inline-block sm:items-center">
        <form
          className="p-4 text-left col-span-2 text-gray-700"
          onSubmit={handleSubmit}
        >
          <input
            required
            type="text"
            placeholder="Title"
            className="h-12 w-full max-w-full rounded-md border m-4 bg-white px-5 text-sm outline-none focus:ring sm:px-2"
          />
          <input
            type="text"
            placeholder="tags"
            className="h-12 w-full max-w-full rounded-md border m-4 bg-white px-5 text-sm outline-none focus:ring"
          />
          <input
            required
            type="text"
            placeholder="Image link"
            className="h-12 w-full max-w-full rounded-md border m-4 bg-white px-5 text-sm outline-none focus:ring"
          />
          <input
            type="text"
            placeholder="description"
            className="h-12 w-full max-w-full rounded-md border m-4 bg-white px-5 text-sm outline-none focus:ring"
          />
          <div className="">
            <select
              id="selectChoice"
              value={selectedOption}
              onChange={handleSelectChange}
              className="h-12 w-full max-w-full rounded-md border m-4 bg-white px-5 text-sm outline-none focus:ring"
            >
              <option value="">Select category</option>
              <option value="react">React.js</option>
              <option value="nextjs">Next.js</option>
              <option value="career">Career</option>
              <option value="solution">Solution</option>
              <option value="productivity">Productivity</option>
              <option value="tools">Tools</option>
            </select>
          </div>
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

          <div ref={quillRef} style={{ height: 400, marginLeft: 4 }} />
          <button
            type="submit"
            className="rounded-md font-semibold py-2 w-full bg-violet-600 text-light ml-4 mt-5 hover:bg-purple-400"
          >
            Post Now
          </button>
        </form>
        <div className="col-span-1">
          {isLoading ? (
            <SliderSkelton />
          ) : (
            articles?.map((post) => (
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
                    onClick={() => handleDelete(post._id)}
                    className="text-red-500 cursor-pointer hover:underline font-semibold"
                  >
                    Delete
                  </button>
                  <Link
                    href={`/dashboard/edit-articles/${post._id}`}
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

export default AddNewArticle;
