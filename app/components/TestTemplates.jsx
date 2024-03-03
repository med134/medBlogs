/* eslint-disable @next/next/no-img-element */
import React from "react";

const TestTemplates = () => {
  return (
    <div class="flex h-full items-center justify-center bg-gray-900 p-16">
      <div class="grid grid-cols-2 md:grid-cols-2 items-center gap-10 md:px-6 md:block sm:px-4 xs:px-2">
        <div>
          <h1 class="mb-2 text-3xl font-bold text-white">
            <span class="text-green-500">Hi,</span> Im Full Stack Developer
          </h1>
          <p class="mb-6 text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
            excepturi magnam enim officiis facilis numquam corporis quos
            accusantium tempora, dolores quod cum facere architecto soluta atque
            corrupti a alias perferendis.
          </p>
          <div class="flex justify-center space-x-5">
            <button class="flex w-full items-center justify-center gap-1 rounded-2xl bg-rose-500 p-5 py-3 font-semibold text-white hover:bg-rose-700">
              Follow
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </button>
            <button class="flex w-full items-center justify-center gap-2 rounded-2xl bg-white p-5 py-3 font-semibold">
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="w-full">
          <img
            src="https://img.freepik.com/free-photo/smiling-bearded-man-eyeglases-using-laptop_171337-15793.jpg?t=st=1709499445~exp=1709503045~hmac=d1ed607ba4b157cbd848ad09c936ce84d3a39300a091a7c55ca676b76ac459ae&w=826"
            alt=""
            class="w-90 h-90 rounded-full mt-3"
          />
        </div>
      </div>
    </div>
  );
};

export default TestTemplates;
