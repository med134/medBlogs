import React from "react";

const RemoveAfter = () => {
  return (
    <div class="w-full bg-white sm:px-4 xl:px-12">
      <div class="z-10 mx-auto w-full px-6 py-12 sm:px-8 sm:py-16 lg:px-10 xl:px-16">
        <div class="mb-12">
          <div class="lg:flex-no-wrap -mx-3 flex flex-row flex-wrap items-end">
            <div class="mr-auto w-full flex-grow px-3">
              <h3 class="text-3xl font-bold text-indigo-600 sm:text-5xl">
                Valley's Go to Marketing Studio
              </h3>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-7 gap-4 font-bold">
          <div class="col-span-4 mb-4 px-2">
            <div class="h-full w-full bg-yellow-900 p-6">
              <div class="z-10 flex flex-col justify-between">
                <h1 class="text-4xl text-white sm:text-8xl">#1</h1>
                <h6 class="mt-12 text-xl text-white sm:text-3xl">
                  Marketing Studio in the Bay Area.
                </h6>
              </div>
            </div>
          </div>
          <div class="w-full mb-4 col-span-3 px-2">
            <div class="h-full w-60 bg-yellow-400 p-6">
              <div class="z-10 flex flex-col justify-between">
                <h1 class="text-4xl text-blue-900 sm:text-8xl">FDA</h1>
                <h6 class="mt-12 text-xl text-blue-900 sm:text-3xl">
                  Approved by FDA and 25 other organizations.
                </h6>
              </div>
            </div>
          </div>
          <div class="mb-4 col-span-3 px-2 w-full lg:w-1/3">
            <div class="bg-indigo-600 p-6 h-full">
              <div
                class="absolute z-0 opacity-0 hover:opacity-50"
                style={{ mixBlendMode: "multiply" }}
              />
              <div class="z-10 flex flex-col justify-between">
                <h1 class="text-4xl text-white sm:text-8xl">70+</h1>
                <h6 class="mt-12 text-xl text-white sm:text-3xl">Awards</h6>
              </div>
            </div>
          </div>
          <div class="mb-4 col-span-1 px-2 lg:w-1/3">
            <div class="h-full bg-blue-400 p-6">
              <div class="z-10 flex flex-col justify-between">
                <h1 class="text-4xl text-white sm:text-8xl">12k</h1>
                <h6 class="mt-12 text-xl text-white sm:text-3xl">
                  New Users Every Month
                </h6>
              </div>
            </div>
          </div>
          <div class="mb-4 col-span-1 px-2 lg:w-1/3">
            <div class="h-full bg-red-200 p-6">
              <div class="z-10 flex flex-col justify-between">
                <h1 class="text-4xl text-blue-900 sm:text-8xl">23</h1>
                <h6 class="mt-12 text-xl text-blue-900 sm:text-3xl">
                  Fortune 500 Clients
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveAfter;
