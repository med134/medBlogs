"use client";
import React, { useState, useEffect } from "react";
import "highlight.js/styles/a11y-dark.min.css";
import { useSession } from "next-auth/react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import hljs from "highlight.js";
import { useRouter } from "next/navigation";

const AddNewArticle = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedJobs, setSelectedJobs] = useState("");
  const [selectStatus, setSelectStatus] = useState("draft");
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [userSlugOne, setUserSlugOne] = useState("");
  const [error, setError] = useState("");
  const session = useSession();
  const router = useRouter();
  /* reload page */
  const reloadPage = () => {
    window.location.reload();
  };
  useEffect(() => {
    if (session?.status != "authenticated") {
      router.push("/dashboard/login");
    } else if (session?.status === "authenticated") {
      const slug = session?.data?.user?.name.replace(/\s+/g, "-").toLowerCase();
      console.log(slug);
      setUserSlugOne(slug);
    }
    console.log(userSlugOne);
  }, [session]);

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
    const job = selectedJobs;
    const userSlug = userSlugOne;
    const phone = "Add number phone";
    const homeAddress = "Add your home Address";
    try {
      await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          imageUrl,
          job,
          userSlug,
          phone,
          homeAddress,
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
    const blogSlug = e.target[4].value;
    const blogS = blogSlug.replace(/\s+/g, "-").toLowerCase();
    const slug = blogS;
    const category = selectedOption;
    const job = selectedJobs;
    const status = selectStatus;
    const content = quill.root.innerHTML;
    try {
      const response = await fetch("/api/articles", {
        method: "POST",
        body: JSON.stringify({
          title,
          tags,
          image,
          description,
          slug,
          category,
          job,
          status,
          content,
          username: session.data.user.name,
          email: session.data.user.email,
        }),
      });
      if (response.ok) {
        addUser();
        setSuccessful(true);
        setLoading(false);
        e.target.reset();
        reloadPage();
      } else {
        throw new Error("Failed to publish your post");
      }
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="inline-block max-h-full p-8 py-8 sm:p-2 sm:py-2 dark:bg-dark mt-24">
      <h1 className="text-gray-700 text-2xl lg:text-2xl dark:text-light font-bold">
        Start to Create Your Article
      </h1>
      <div className="sm:items-center py-3">
        <form className="p-4 text-left text-gray-700" onSubmit={handleSubmit}>
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
              placeholder="Image link url"
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
              placeholder="example-title-slug"
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
              <option value="draft">Draft</option>
              <option value="publish">publish</option>
            </select>
          </div>

          <div ref={quillRef} style={{ height: 400, marginLeft: 4 }} />
          {error && <p className="text-red-500">{error}</p>}
          {successful && (
            <p className="text-light bg-green-500 mb-4 px-6 py-2 text-center rounded-md w-full mt-2">
              post is success created
            </p>
          )}
          <button
            disabled={loading}
            type="submit"
            className={`rounded-md font-semibold py-2 w-full bg-mainColor text-light ml-4 mt-5 hover:bg-cyan-700 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "posting..." : "Post"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewArticle;
