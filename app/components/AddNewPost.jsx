"use client";
import React, { useState } from "react";
import IsUpdate from "./IsUpdate";

const AddNewPost = ({ session }) => {
  const [selectedJobs, setSelectedJobs] = useState("");
  const [selectStatus, setSelectStatus] = useState("draft");
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
    <div className="p-2 py-4 sm:p-2 sm:py-2 md:p-2 md:py-2 lg:p-2 lg:py-2">
      <h1 className="text-gray-700 text-left sm:text-xl py-6 text-2xl lg:text-2xl">
        Create a Templates & Component
      </h1>
      <form className="text-left text-gray-700 p-6 sm:p-3" onSubmit={handleSubmit}>
        <div className="w-full grid grid-cols-2 md:flex md:flex-col gap-6">
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
            disabled={session?.user?.name === "MOHAMMED DAKIR" ? false : true}
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
        {successful && (
          <IsUpdate
            onClose={handelCloseModal}
            title={TITLE_MODAL}
            desc={DESC_MODAL}
          />
        )}
      </form>
    </div>
  );
};

export default AddNewPost;
