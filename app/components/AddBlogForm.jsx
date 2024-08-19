"use client";
import React, { useState } from "react";
import { addNewPost } from "../utils/action";
import { useFormState } from "react-dom";
import "highlight.js/styles/a11y-dark.min.css";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import hljs from "highlight.js";

function AddBlogForm({ session }) {
  const [state, formAction] = useFormState(addNewPost, undefined);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedJobs, setSelectedJobs] = useState("");
  const [selectStatus, setSelectStatus] = useState("draft");
  console.log(session.user.name);
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
  return (
    <form className="p-4 py-32 text-left text-gray-700" action={formAction}>
      <div className="grid grid-cols-2 gap-4 md:block">
        <input
          required
          type="text"
          placeholder="Title"
          className="h-12 w-full rounded-md border m-1 bg-white px-2 text-sm outline-none focus:ring sm:px-2"
        />
        <input
          required
          type="text"
          placeholder="tags"
          className="h-12 w-full rounded-md border m-1 bg-white px-5 text-sm outline-none focus:ring"
        />
        <input
          required
          type="text"
          placeholder="description"
          className="h-24 w-full rounded-md border m-1 bg-white px-5 text-sm outline-none focus:ring"
        />
        <input
          required
          type="text"
          placeholder="Image link url"
          className="h-12 w-full rounded-md border m-1 bg-white px-5 text-sm outline-none focus:ring"
        />
        <input
          required
          type="text"
          placeholder="example-title-slug"
          className="h-12 w-full rounded-md border m-1 bg-white px-5 text-sm outline-none focus:ring"
        />
        <div className="">
          <select
            id="selectChoice"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="h-12 w-full rounded-md border m-1 bg-white px-5 text-sm outline-none focus:ring"
          >
            <option value="">Select category</option>
            <option value="react">React.js</option>
            <option value="next.js">Next.js</option>
            <option value="career">Career</option>
            <option value="solution">Solution</option>
            <option value="productivity">Productivity</option>
            <option value="tools">Tools</option>
          </select>
        </div>
        <div className="mb-4">
          <select
            id="selectChoice"
            value={selectedJobs}
            onChange={(e) => setSelectedJobs(e.target.value)}
            className="h-12 w-full max-w-full rounded-md border m-1 bg-white px-5 text-sm outline-none focus:ring"
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
        <select
          id="selectStatus"
          value={selectStatus}
          onChange={(e) => setSelectStatus(e.target.value)}
          className="h-12 w-full max-w-full rounded-md border m-1 bg-white px-5 text-sm outline-none focus:ring"
        >
          <option value="draft">Draft</option>
          <option value="publish">publish</option>
        </select>
      </div>

      <div ref={quillRef} style={{ height: 400, marginLeft: 4 }} />
      <input
        value={session.user.name}
        type="text"
        className="h-12 hidden w-full rounded-md border m-1 bg-white px-5 text-sm outline-none focus:ring"
      />
      <button
        type="submit"
        className={`rounded-md font-semibold py-2 w-full bg-mainColor text-light ml-4 mt-5 hover:bg-cyan-700
          `}
      >
        Add Post
      </button>
      {state?.error}
    </form>
  );
}

export default AddBlogForm;
