/* eslint-disable @next/next/no-img-element */
import React from "react";

const TestTemplates = () => {
  return (
    <div class="font-[sans-serif] w-max mx-auto">
  <button type="button"
    class="px-6 py-2.5 rounded text-white text-sm font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
    Dropdown menu with checkbox
    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-white inline ml-3" viewBox="0 0 24 24">
      <path fill-rule="evenodd"
        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
        clip-rule="evenodd" data-original="#000000" />
    </svg>
  </button>
  <ul class='absolute shadow-lg bg-white py-2 px-2 z-[1000] min-w-full w-max rounded max-h-96 overflow-auto'>
    <li class="mb-2">
      <input placeholder="Text input"
        class="px-4 py-2.5 w-full rounded text-gray-500 text-sm font-semibold border-none outline-blue-600 bg-gray-50" />
    </li>
    <li class='py-2.5 px-4 hover:bg-blue-50 text-black text-sm cursor-pointer'>
      <div class="flex items-center">
        <input id="checkbox1" type="checkbox" class="hidden peer"  checked/>
        <label for="checkbox1"
          class="relative mr-3 flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-600 border rounded overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-full fill-white" viewBox="0 0 520 520">
            <path
              d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
              data-name="7-Check" data-original="#000000" />
          </svg>
        </label>
        Dropdown option
      </div>
    </li>
    <li class='py-2.5 px-4 hover:bg-blue-50 text-black text-sm cursor-pointer'>
      <div class="flex items-center">
        <input id="checkbox2" type="checkbox" class="hidden peer" />
        <label for="checkbox2"
          class="relative mr-3 flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-600 border rounded overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-full fill-white" viewBox="0 0 520 520">
            <path
              d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
              data-name="7-Check" data-original="#000000" />
          </svg>
        </label>
        Cloth set
      </div>
    </li>
    <li class='py-2.5 px-4 hover:bg-blue-50 text-black text-sm cursor-pointer'>
      <div class="flex items-center">
        <input id="checkbox3" type="checkbox" class="hidden peer" />
        <label for="checkbox3"
          class="relative mr-3 flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-600 border rounded overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-full fill-white" viewBox="0 0 520 520">
            <path
              d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
              data-name="7-Check" data-original="#000000" />
          </svg>
        </label>
        Sales details
      </div>
    </li>
    <li class='py-2.5 px-4 hover:bg-blue-50 text-black text-sm cursor-pointer'>
      <div class="flex items-center">
        <input id="checkbox4" type="checkbox" class="hidden peer" />
        <label for="checkbox4"
          class="relative mr-3 flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-600 border rounded overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-full fill-white" viewBox="0 0 520 520">
            <path
              d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
              data-name="7-Check" data-original="#000000" />
          </svg>
        </label>
        Marketing
      </div>
    </li>
  </ul>
</div>
  );
};

export default TestTemplates;
