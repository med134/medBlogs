/* eslint-disable @next/next/no-img-element */
import React from "react";

const TestTemplates = () => {
  return (
    <div className="m-5 p-8">
      <div className="group mx-2 mt-10 grid grid-cols-2 space-x-8 overflow-hidden rounded-lg border text-gray-700 shadow transition hover:shadow-lg sm:mx-auto sm:grid-cols-5">
        <a
          href="#"
          className="col-span-1 text-left text-gray-600 hover:text-gray-700"
        >
          <div className="group relative h-full w-full overflow-hidden">
            <img
              src="https://i.ibb.co/7SwGPbp/filter-search.png"
              alt="hello"
              className="h-full w-full border-none object-cover text-gray-700 transition group-hover:scale-125"
            />
            <span className="absolute top-2 left-2 rounded-full bg-green-500 px-2 text-xs font-semibold text-yellow-600">
              Unity
            </span>
          </div>
        </a>
        <div className="col-span-1 flex flex-col space-y-3 py-10 pr-8 text-left">
          <a href="#" className="mt-3 overflow-hidden text-2xl font-semibold">
            How to make open world with C# in Unity
          </a>
          <p className="overflow-hidden text-sm">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna .
          </p>
          <a
            href="#"
            className="text-sm font-semibold text-gray-500 hover:text-gray-700"
          >
            Ben Awad
          </a>
          <div className="flex flex-col text-gray-700">
            <div className="flex h-fit space-x-2 text-sm font-medium">
              <span className="w-auto rounded-full bg-green-100 px-2 py-0.5 mb-2 text-green-700">
                Advance level
              </span>
              <span className="w-auto rounded-full bg-blue-100 px-2 py-0.5 text-blue-700">
                160 Enrolled
              </span>
            </div>
            <a
              href="#"
              className="my-5 rounded-md px-5 py-2 text-center transition hover:scale-105 bg-orange-600 text-white sm:ml-auto"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestTemplates;
