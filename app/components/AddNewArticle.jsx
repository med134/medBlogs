"use client";
import React, { useState, useRef, useMemo } from "react";
import IsUpdate from "./IsUpdate";
import SkeletonLoadingForm from "./SkeletonLoadingForm ";
import "jodit-react/examples/app.css";
import dynamic from "next/dynamic";
import imageCompression from "browser-image-compression";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const AddNewArticle = ({ session }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedJobs, setSelectedJobs] = useState("");
  const [selectStatus, setSelectStatus] = useState("draft");
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [dataUrl, setDataUrl] = useState("");
  const [error, setError] = useState("");
  const TITLE_MODAL = "Article is Created";
  const DESC_MODAL = "your article is created successfully ";

  const handelCloseModal = () => {
    setSuccessful(!successful);
  };
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleJobs = (event) => {
    setSelectedJobs(event.target.value);
  };
  const handelStatus = (event) => {
    setSelectStatus(event.target.value);
  };

  /* joditEditor */
  const editor = useRef(null);
  const myLocalContent = localStorage.getItem("content");
  const [myContent, setMyContent] = useState(myLocalContent);
  const config = useMemo(
    () => ({
      uploader: {
        insertImageAsBase64URI: true,
        imagesExtensions: ["jpg", "png", "jpeg", "gif", "svg", "webp"],
      },
      height: "500px",
      width: "100%",
    }),
    []
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const tags = e.target[1].value;
    const image = dataUrl;
    const description = e.target[3].value;
    const blogSlug = e.target[4].value;
    const blogS = blogSlug.replace(/\s+/g, "-").toLowerCase();
    const slug = blogS;
    const category = selectedOption;
    const job = selectedJobs;
    const status = selectStatus;
    const content = myContent;
    try {
      setLoading(true);
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
          username: session?.user?.name,
          userSlug: session?.user?.name.replace(/\s+/g, "-").toLowerCase(),
          email: session.user.email,
        }),
      });
      if (response.ok) {
        setLoading(false);
        e.target.reset();
        setSuccessful(true);
      } else {
        throw new Error("Failed to publish your post");
      }
    } catch (err) {
      setError(err.message);
    }
  };
  const readURL = async (event) => {
    const input = event.target;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      // Compression options
      const options = {
        maxSizeMB: 1, // Maximum file size in MB
        maxWidthOrHeight: 800, // Maximum width or height
        useWebWorker: true, // For better performance
      };
      try {
        // Compress the image file
        const compressedFile = await imageCompression(file, options);
        // Convert the compressed file to base64 URL
        const reader = new FileReader();
        reader.onload = () => {
          const src = reader.result;
          setDataUrl(src); // Set compressed image to state
        };
        reader.readAsDataURL(compressedFile);
      } catch (error) {
        console.log("Error while compressing the image", error);
      }
    }
  };
  const changeContent = (newContent) => {
    setMyContent(newContent);
    localStorage.setItem("content", myContent);
  };
  return (
    <div className="inline-block max-h-full p-8 py-8 sm:p-2 sm:py-2 w-full">
      <h1 className="text-gray-700 text-2xl lg:text-2xl font-bold">
        Start to Create Your Article
      </h1>
      {loading ? (
        <SkeletonLoadingForm />
      ) : (
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
              <div className="max-w-md mx-auto border border-gray-200 px-10 p-2 rounded-md">
                <label className="text-base text-gray-500 font-semibold mb-2 block">
                  Upload Image
                </label>
                <input
                  type="file"
                  onChange={readURL}
                  id="image"
                  accept="image/*"
                  className="w-full text-gray-400 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded"
                />
                <p className="text-xs text-gray-400 mt-2">
                  PNG, JPG SVG, WEBP, and GIF are Allowed.
                </p>
              </div>

              <textarea
                required
                type="text"
                placeholder="description"
                className="h-24 w-full p-3 rows-3 rounded-md border m-1 bg-white px-5 text-sm outline-none focus:ring"
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
                  <option value="Front-end Developer">
                    Front-end Developer
                  </option>
                  <option value="Content Creator">Content Creator</option>
                  <option value="student">student</option>
                </select>
              </div>
              <select
                id="selectStatus"
                value={selectStatus}
                disabled={session.user.name === "MOHAMMED DAKIR" ? false : true}
                onChange={handelStatus}
                className="h-12 w-full max-w-full rounded-md border m-1 bg-white px-5 text-sm outline-none focus:ring"
              >
                <option value="draft">Draft</option>
                <option value="publish">publish</option>
              </select>
            </div>
            <JoditEditor
              ref={editor}
              config={config}
              value={myContent}
              tabIndex={1} // tabIndex of textarea
              // Update content on blur
              onChange={changeContent}
            />
            {error && <p className="text-red-500">{error}</p>}
            {successful && (
              <IsUpdate
                onClose={handelCloseModal}
                title={TITLE_MODAL}
                desc={DESC_MODAL}
              />
            )}
            <button
              disabled={loading}
              type="submit"
              className={`rounded-md font-semibold py-2 w-full bg-mainColor text-light ml-4 sm:ml-0 mt-5 hover:bg-cyan-700 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Post
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddNewArticle;
