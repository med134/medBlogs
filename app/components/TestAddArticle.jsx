import React from "react";
import Form from "next/form";
import "jodit-react/examples/app.css";
import dynamic from "next/dynamic";
import imageCompression from "browser-image-compression";
import { addArticle } from "../utils/action";

const TestAddArticle = async() => {

  return (
    <div className="inline-block max-h-full p-8 py-8 sm:p-2 sm:py-2 w-full">
      <h1 className="text-gray-700 text-2xl lg:text-2xl font-bold">
        Start to Create Your Article
      </h1>

      <div className="sm:items-center py-3">
        <Form className="p-4 text-left text-gray-700" action={addArticle}>
          <div className="grid grid-cols-2 gap-4 md:block">
            <input
              required
              name="title"
              type="text"
              placeholder="Title"
              className="h-12 w-full sm:mb-2 rounded-md border m-1 bg-white px-2 text-sm outline-none focus:ring sm:px-2"
            />
            <input
              required
              type="text"
              placeholder="tags"
              name="tags"
              className="h-12 w-full rounded-md border m-1 bg-white px-5 font-bold text-xl outline-none focus:ring"
            />
           {/*  <div className="max-w-md mx-auto border border-gray-200 px-10 p-2 rounded-md">
              <label className="text-base text-gray-500 font-semibold mb-2 block">
                Upload Image
              </label>
              <input
                type="file"
                onChange={readURL}
                name="image"
                id="image"
                accept="image/*"
                className="w-full text-gray-400 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded"
              />
              <p className="text-xs text-gray-400 mt-2">
                PNG, JPG SVG, WEBP, and GIF are Allowed.
              </p>
            </div> */}

            <textarea
              required
              type="text"
              name="description"
              placeholder="description"
              className="h-24 w-full p-3 rows-3 rounded-md border m-1 bg-white px-5 text-sm outline-none focus:ring"
            />
            <input
              required
              type="text"
              name="slug"
              placeholder="example-title-slug"
              className="h-12 w-full rounded-md border m-1 bg-white px-5 text-sm outline-none focus:ring"
            />
            <div className="">
              <select
                id="category"
                name="category"
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
                name="job"
                id="job"
                className="h-12 w-full max-w-full rounded-md border m-1 bg-white px-5 text-sm outline-none focus:ring"
              >
                <option value="">Select Your jobs</option>
                <option value="Software Developer">Software Developer</option>
                <option value="Designer">Designer</option>
                <option value="Front-end Developer">Front-end Developer</option>
                <option value="Content Creator">Content Creator</option>
                <option value="student">student</option>
              </select>
            </div>
          </div>
        {/*   <JoditEditor
            ref={editor}
            config={config}
            value={myContent}
            tabIndex={1} // tabIndex of textarea
            // Update content on blur
            onChange={changeContent}
          /> */}
          <button
            type="submit"
            className={`rounded-md font-semibold py-2 w-full bg-mainColor text-light ml-4 sm:ml-0 mt-5 hover:bg-cyan-700`}
          >
            Post
          </button>
        </Form>
      </div>
    </div>
  );
};

export default TestAddArticle;
