"use client";
import React, { useState } from "react";
import "highlight.js/styles/a11y-dark.min.css";
import { useSession } from "next-auth/react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import hljs from "highlight.js";

const AddNewArticle = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedJobs, setSelectedJobs] = useState("");
  const [selectStatus, setSelectStatus] = useState("draft");
  const session = useSession();

  /*  useEffect(() => {
    if (session?.data?.user?.name === "MOHAMMED DAKIR") {
      router.push("/dashboard/add-articles");
    } else {
      router.push("/dashboard");
    }
  }, [session]); */
  /*   
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
  }; */
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
  const handelStatus = (event) => {
    setSelectStatus(event.target.value);
  };
 

  const addUser = async () => {
    const name = session.data.user.name;
    const email = session.data.user.email;
    const imageUrl = session.data.user.image;
    try {
      await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          imageUrl,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const tags = e.target[1].value;
    const image = e.target[2].value;
    const description = e.target[3].value;
    const slug = e.target[4].value;
    const category = selectedOption;
    const job = selectedJobs;
    const status = selectStatus;
    const content = quill.root.innerHTML;
    console.log(status);

    try {
      await fetch("/api/articles", {
        method: "POST",
        body: JSON.stringify({
          title,
          tags,
          image,
          category,
          description,
          slug,
          content,
          status,
          username: session.data.user.name,
          email: session.data.user.email,
          job,
        }),
      });
      mutate();
      e.target.reset();
      addUser();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="inline-block max-h-full p-8 py-8 sm:p-2 sm:py-2 dark:bg-dark mt-24">
      <h1 className="text-gray-700 text-2xl lg:text-2xl dark:text-light font-bold">
        Start to Create Your Article
      </h1>
      <div className="sm:items-center py-3">
        <form className="p-4 text-left text-gray-700" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
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
              placeholder="Image link"
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
              placeholder="slug"
              className="h-12 w-full rounded-md border m-1 bg-white px-5 text-sm outline-none focus:ring"
            />
            <div className="">
              <select
                id="selectChoice"
                value={selectedOption}
                onChange={handleSelectChange}
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
                onChange={handleJobs}
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
              disabled={
                session?.data?.user?.name === "MOHAMMED DAKIR" ? false : true
              }
              onChange={handelStatus}
              className="h-12 w-full max-w-full rounded-md border m-1 bg-white px-5 text-sm outline-none focus:ring"
            >
              <option value="Software engineer">Draft</option>
              <option value="Software Developer">publish</option>
            </select>
          </div>

          <div ref={quillRef} style={{ height: 400, marginLeft: 4 }} />
          <button
            type="submit"
            className="rounded-md font-semibold py-2 w-full bg-mainColor text-light ml-4 mt-5 hover:bg-cyan-700"
          >
            Post Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewArticle;
