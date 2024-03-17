/* eslint-disable @next/next/no-img-element */
import React from "react";

const TestTemplates = () => {
  return (
    <div class="m-5 p-8">
      <div class="group mx-2 mt-10 grid grid-cols-2 space-x-8 overflow-hidden rounded-lg border text-gray-700 shadow transition hover:shadow-lg sm:mx-auto sm:grid-cols-5">
        <a
          href="#"
          class="col-span-1 text-left text-gray-600 hover:text-gray-700"
        >
          <div class="group relative h-full w-full overflow-hidden">
            <img
              src="https://i.ibb.co/7SwGPbp/filter-search.png"
              alt=""
              class="h-full w-full border-none object-cover text-gray-700 transition group-hover:scale-125"
            />
            <span class="absolute top-2 left-2 rounded-full bg-yellow-200 px-2 text-xs font-semibold text-yellow-600">
              Unity
            </span>
            <img
              src="/images/AnbWyIjnwNbW9Wz6c_cja.svg"
              class="absolute inset-1/2 w-10 max-w-full -translate-x-1/2 -translate-y-1/2 transition group-hover:scale-125"
              alt=""
            />
          </div>
        </a>
        <div class="col-span-1 flex flex-col space-y-3 py-10 pr-8 text-left">
          <a href="#" class="mt-3 overflow-hidden text-2xl font-semibold">
            {" "}
            How to make open world with C# in Unity{" "}
          </a>
          <p class="overflow-hidden text-sm">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna .
          </p>
          <a
            href="#"
            class="text-sm font-semibold text-gray-500 hover:text-gray-700"
          >
            Ben Awad
          </a>

          <div class="flex flex-col text-gray-700 sm:flex-row">
            <div class="flex h-fit space-x-2 text-sm font-medium">
              <div class="rounded-full bg-green-100 px-2 py-0.5 text-green-700">
                Advance level
              </div>

              <div class="rounded-full bg-blue-100 px-2 py-0.5 text-blue-700">
                160 Enrolled
              </div>
            </div>
            <a
              href="#"
              class="my-5 rounded-md px-5 py-2 text-center transition hover:scale-105 bg-orange-600 text-white sm:ml-auto"
            >
              Enroll Now{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestTemplates;
