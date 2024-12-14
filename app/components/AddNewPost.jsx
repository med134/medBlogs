"use client";
import React, { useState } from "react";
import IsUpdate from "./IsUpdate";
import AceEditor from "react-ace-builds";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-jsx";

const AddNewPost = ({ session, user }) => {
  const [selectedJobs, setSelectedJobs] = useState("");
  const [selectStatus, setSelectStatus] = useState("draft");
  const [code, setCode] = useState("");
  const [successful, setSuccessful] = useState(false);
  const TITLE_MODAL = "Template is Created";
  const DESC_MODAL = "your template is created successfully ";

  const handleJobs = (event) => {
    setSelectedJobs(event.target.value);
  };
  const handelStatus = (event) => {
    setSelectStatus(event.target.value);
  };
  const handelCloseModal = () => {
    setSuccessful(!successful);
  };
  const handleCodeChange = (newCode) => {
    setCode(newCode); // Update the state with the new content
    console.log("Current code:", newCode); // Log the value
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
    const code = code;
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
          username: session?.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {user && (
        <div className="p-2 py-4 sm:p-2 sm:py-2 md:p-2 md:py-2 lg:p-2 lg:py-2">
          <h1 className="text-gray-700 text-left sm:text-xl py-6 text-2xl lg:text-2xl">
            Create a Templates & Component
          </h1>
          <form className="text-gray-700 p-6 xs:p-0" onSubmit={handleSubmit}>
            <div className="w-full grid grid-cols-2 gap-3 md:grid-cols-1 xs:gap-0">
              <input
                required
                type="text"
                placeholder="Title"
                className="h-12 w-full rounded-md border m-3 sm:m-0 sm:mb-2 bg-white px-10 text-sm outline-none focus:ring sm:px-2"
              />
              <input
                required
                type="text"
                placeholder="Description"
                className="h-12 w-full rounded-md border m-3 sm:m-0 sm:mb-2 bg-white px-5 text-sm outline-none focus:ring"
              />
              <input
                required
                type="text"
                placeholder="slug-example-title"
                className="h-12 w-full rounded-md border m-3 sm:m-0 sm:mb-2 bg-white px-5 text-sm outline-none focus:ring"
              />
              <input
                required
                type="text"
                placeholder="Image url"
                className="h-12 w-full rounded-md border m-3 sm:m-0 sm:mb-2 bg-white px-5 text-sm outline-none focus:ring"
              />
              <input
                required
                type="text"
                placeholder="Link preview"
                className="h-12 w-full rounded-md border m-3 sm:m-0 sm:mb-2 bg-white px-5 text-sm outline-none focus:ring"
              />
              <input
                required
                type="text"
                placeholder="Landing ,Card, Marketing, Dashboard ,Business"
                className="h-12 w-full rounded-md border m-3 sm:m-0 sm:mb-2 bg-white px-5 text-sm outline-none focus:ring"
              />

              <select
                id="selectChoice"
                value={selectedJobs}
                onChange={handleJobs}
                className="h-12 w-full rounded-md border m-3 sm:m-0 sm:mb-2 bg-white px-5 text-sm outline-none focus:ring"
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
                  session?.user?.name === "MOHAMMED DAKIR" ? false : true
                }
                onChange={handelStatus}
                className="h-12 w-full rounded-md border m-3 sm:m-0 sm:mb-2 bg-white px-5 text-sm outline-none focus:ring"
              >
                <option value="draft">Draft</option>
                <option value="publish">publish</option>
              </select>
            </div>
            <div className="w-full">
              <span className="text-xl font-sans">Add your code</span>
              <AceEditor
                height="300px"
                width="100%"
                name="ace-editor"
                onChange={handleCodeChange} // Attach onChange event
                value={code}
                mode="jsx"
                theme="monokai"
                fontSize="16px"
                className="xs:text-xs sm:text-sm mt-2"
                highlightActiveLine={true}
                setOptions={{
                  enableLiveAutocompletion: true,
                  showLineNumbers: true,
                  tabSize: 2,
                }}
              />
            </div>
            <button
              type="submit"
              className="rounded-md font-semibold py-2 mt-3 w-full bg-mainColor text-light hover:bg-cyan-700"
            >
              Post Now
            </button>
            {successful && (
              <IsUpdate
                onClose={handelCloseModal}
                title={TITLE_MODAL}
                desc={DESC_MODAL}
              />
            )}
          </form>
        </div>
      )}
    </>
  );
};

export default AddNewPost;
