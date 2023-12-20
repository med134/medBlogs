import React from "react";
import { FaReact } from "react-icons/fa6";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import logo from "@/public/images/logo3.png";
import Image from "next/image";

const Aside = () => {
  return (
    <section className="fixed z-30 rounded-xl">
      <input
        type="checkbox"
        className="peer hidden px-6 dark:text-light"
        id="sidebar-open"
      />
      <label
        className="peer-checked:rounded-full peer-checked:ml-0 peer-checked:p-2 peer-checked:right-6 peer-checked:text-dark peer-checked:bg-white dark:peer-checked:bg-dark absolute top-8 z-20 cursor-pointer"
        htmlFor="sidebar-open"
        aria-label="Categories"
      >
        <IoMenu className="w-8 h-8 dark:text-light" />
      </label>
      <nav
        aria-label="Sidebar Navigation"
        className="peer-checked:w-64 rounded-tr-3xl left-0 z-10 flex h-screen w-0 flex-col overflow-hidden bg-gradient-to-r from-slate-100 via-gray-300 to-slate-200 text-white transition-all md:h-screen md:w-0 lg:w-0"
      >
        <div className="bg-slate-800 mt-5 py-4 pl-10 md:mt-10 rounded-md">
          <span className="flex justify-start items-center">
            <Image src={logo} className="rounded full w-10 h-10" />
            <p className="text-xl ml-2">Medcode</p>
          </span>
        </div>
        <div className="flex justify-start items-center p-2 px-8">
          <img
            src="https://source.unsplash.com/100x100/?portrait"
            alt=""
            className="w-12 h-12 rounded-full dark:bg-gray-500"
          />
          <div className="ml-3">
            <p className="text-sm font-semibold text-gray-800">Leroy Jenkins</p>
            <span className="space-x-1 text-xs text-gray-400">
              View profile
            </span>
          </div>
        </div>
        <ul className="mt-4 space-y-2 md:mt-20 xs:mt-2">
          <li className="relative">
            <button className="focus:bg-slate-600 hover:bg-slate-600 hover:text-light flex w-full space-x-2 rounded-md px-10 py-2 text-gray-800 focus:outline-none">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </span>
              <Link href="/category/all" className="">
                All Categories
              </Link>
            </button>
          </li>
          <li className="relative">
            <button className="focus:bg-slate-600 flex justify-start text-gray-800 hover:text-light items-center hover:bg-slate-600 w-full space-x-2 rounded-md px-10 py-3 focus:outline-none">
              <span>
                <FaReact className="w-6 h-6" />
              </span>
              <Link href={"/category/react"} className="">
                React js
              </Link>
            </button>
            <svg
              className="text-slate-200 absolute -right-1 -top-1/2 z-10 hidden h-32 w-8 md:block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="399.349 57.696 100.163 402.081"
              width="1em"
              height="4em"
            >
              <path
                fill="currentColor"
                d="M 499.289 57.696 C 499.289 171.989 399.349 196.304 399.349 257.333 C 399.349 322.485 499.512 354.485 499.512 458.767 C 499.512 483.155 499.289 57.696 499.289 57.696 Z"
              />
            </svg>
          </li>
          <li className="relative">
            <button className="focus:bg-slate-600 hover:bg-slate-600 hover:text-light flex w-full space-x-2 rounded-md px-10 py-4 text-gray-800 focus:outline-none">
              <span>
                <svg
                  width="26px"
                  height="26px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g clipPath="url(#clip0)">
                      {" "}
                      <path
                        d="M11.2141 0.00645944C11.1625 0.0111515 10.9982 0.0275738 10.8504 0.039304C7.44164 0.346635 4.24868 2.18593 2.22639 5.01291C1.10029 6.58476 0.380059 8.36775 0.107918 10.2563C0.0117302 10.9156 0 11.1103 0 12.0041C0 12.898 0.0117302 13.0927 0.107918 13.7519C0.760117 18.2587 3.96716 22.0452 8.31672 23.4481C9.0956 23.6991 9.91672 23.8704 10.8504 23.9736C11.2141 24.0135 12.7859 24.0135 13.1496 23.9736C14.7613 23.7953 16.1267 23.3965 17.4733 22.7091C17.6798 22.6035 17.7196 22.5754 17.6915 22.5519C17.6727 22.5378 16.793 21.3578 15.7372 19.9314L13.8182 17.339L11.4135 13.7801C10.0903 11.8235 9.00176 10.2235 8.99238 10.2235C8.98299 10.2211 8.97361 11.8024 8.96891 13.7331C8.96188 17.1138 8.95953 17.2499 8.9173 17.3296C8.85631 17.4446 8.80938 17.4915 8.71085 17.5431C8.63578 17.5807 8.57009 17.5877 8.21584 17.5877H7.80997L7.70205 17.5197C7.63167 17.4751 7.58006 17.4164 7.54487 17.3484L7.4956 17.2428L7.50029 12.539L7.50733 7.83285L7.58006 7.74136C7.6176 7.69209 7.69736 7.62875 7.75367 7.59825C7.84985 7.55133 7.88739 7.54664 8.29325 7.54664C8.77185 7.54664 8.85161 7.5654 8.97595 7.70147C9.01114 7.73901 10.3132 9.7003 11.871 12.0628C13.4287 14.4252 15.5589 17.651 16.6053 19.2346L18.5056 22.1132L18.6018 22.0499C19.4534 21.4962 20.3543 20.7079 21.0674 19.8868C22.5853 18.1437 23.5636 16.0182 23.8921 13.7519C23.9883 13.0927 24 12.898 24 12.0041C24 11.1103 23.9883 10.9156 23.8921 10.2563C23.2399 5.74957 20.0328 1.96306 15.6833 0.560125C14.9161 0.311445 14.0997 0.140184 13.1848 0.036958C12.9595 0.0134976 11.4088 -0.0123089 11.2141 0.00645944ZM16.1267 7.26511C16.2393 7.32142 16.3308 7.42933 16.3636 7.54194C16.3824 7.60294 16.3871 8.90734 16.3824 11.8469L16.3754 16.0651L15.6317 14.9249L14.8856 13.7848V10.7185C14.8856 8.73608 14.895 7.62171 14.9091 7.56775C14.9466 7.43637 15.0287 7.33315 15.1413 7.27215C15.2375 7.22288 15.2727 7.21819 15.6411 7.21819C15.9883 7.21819 16.0493 7.22288 16.1267 7.26511Z"
                        fill="#1A1919"
                      />{" "}
                    </g>{" "}
                    <defs>
                      {" "}
                      <clipPath id="clip0">
                        {" "}
                        <rect width={24} height={24} fill="#1A1919" />{" "}
                      </clipPath>{" "}
                    </defs>{" "}
                  </g>
                </svg>
              </span>
              <Link href="/category/nextjs" className="">
                Next js
              </Link>
            </button>
          </li>
          <li className="relative">
            <button className="focus:bg-slate-600 hover:bg-slate-600 hover:text-light flex w-full space-x-2 rounded-md px-10 py-3 text-gray-800 focus:outline-none">
              <span className="text-2xl">
                <svg
                  fill="#1A1919"
                  width="26px"
                  height="26px"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title />
                  <g id="Productivity">
                    <path d="M12,22H4a1,1,0,0,0-1,1V47a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V23A1,1,0,0,0,12,22ZM11,46H5V24h6Z" />
                    <path d="M26,16H18a1,1,0,0,0-1,1V47a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V17A1,1,0,0,0,26,16ZM25,46H19V18h6Z" />
                    <path d="M41,31V27a1,1,0,0,0-1-1H32a1,1,0,0,0-1,1V47a1,1,0,0,0,1,1h6.25V46H33V28h6v3Z" />
                    <path d="M47,13h6V29.6h2V12a1,1,0,0,0-1-1H46a1,1,0,0,0-1,1V28.17h2Z" />
                    <path d="M51,33A10,10,0,1,0,61,43,10,10,0,0,0,51,33Zm3.29,14.71-4-4A1,1,0,0,1,50,43V37h2v5.59l3.71,3.7Z" />
                  </g>
                </svg>
              </span>
              <Link href="/category/productivity" className="">
                Productivity
              </Link>
            </button>
          </li>
          <li className="relative">
            <button className="focus:bg-slate-600 hover:bg-slate-600 hover:text-light flex w-full space-x-2 rounded-md px-10 py-3 text-gray-800 focus:outline-none">
              <span>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1A1919"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.773 3.485l-.78-.184-2.108 2.096-1.194-1.216 2.056-2.157-.18-.792a4.42 4.42 0 0 0-1.347-.228 3.64 3.64 0 0 0-1.457.28 3.824 3.824 0 0 0-1.186.84 3.736 3.736 0 0 0-.875 1.265 3.938 3.938 0 0 0 0 2.966 335.341 335.341 0 0 0-6.173 6.234c-.21.275-.31.618-.284.963a1.403 1.403 0 0 0 .464.967c.124.135.272.247.437.328.17.075.353.118.538.127.316-.006.619-.126.854-.337 1.548-1.457 4.514-4.45 6.199-6.204.457.194.948.294 1.444.293a3.736 3.736 0 0 0 2.677-1.133 3.885 3.885 0 0 0 1.111-2.73 4.211 4.211 0 0 0-.196-1.378zM2.933 13.928a.31.31 0 0 1-.135.07.437.437 0 0 1-.149 0 .346.346 0 0 1-.144-.057.336.336 0 0 1-.114-.11c-.14-.143-.271-.415-.14-.568 1.37-1.457 4.191-4.305 5.955-6.046.1.132.21.258.328.376.118.123.245.237.38.341-1.706 1.75-4.488 4.564-5.98 5.994zm11.118-9.065c.002.765-.296 1.5-.832 2.048a2.861 2.861 0 0 1-4.007 0 2.992 2.992 0 0 1-.635-3.137A2.748 2.748 0 0 1 10.14 2.18a2.76 2.76 0 0 1 1.072-.214h.254L9.649 3.839v.696l1.895 1.886h.66l1.847-1.816v.258zM3.24 6.688h1.531l.705.717.678-.674-.665-.678V6.01l.057-1.649-.22-.437-2.86-1.882-.591.066-.831.849-.066.599 1.838 2.918.424.215zm-.945-3.632L4.609 4.58 4.57 5.703H3.494L2.002 3.341l.293-.285zm7.105 6.96l.674-.673 3.106 3.185a1.479 1.479 0 0 1 0 2.039 1.404 1.404 0 0 1-1.549.315 1.31 1.31 0 0 1-.437-.315l-3.142-3.203.679-.678 3.132 3.194a.402.402 0 0 0 .153.105.477.477 0 0 0 .359 0 .403.403 0 0 0 .153-.105.436.436 0 0 0 .1-.153.525.525 0 0 0 .036-.184.547.547 0 0 0-.035-.184.436.436 0 0 0-.1-.153L9.4 10.016z"
                  />
                </svg>
              </span>
              <Link href="/category/tools" className="">
                Tools
              </Link>
            </button>
          </li>
          <li className="relative">
            <button className="focus:bg-slate-600 hover:bg-slate-600 hover:text-light flex w-full space-x-2 rounded-md px-10 py-3 text-gray-800 focus:outline-none">
              <span>
                <svg
                  fill="#1A1919"
                  width="26px"
                  height="26px"
                  viewBox="0 0 32 32"
                  enableBackground="new 0 0 32 32"
                  id="Layer_3"
                  version="1.1"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  stroke="#1A1919"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path d="M21,10c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1s-0.448-1-1-1h-2C21.448,9,21,9.448,21,10z" />{" "}
                      <path d="M10,11c0.552,0,1-0.448,1-1s-0.448-1-1-1H8c-0.552,0-1,0.448-1,1s0.448,1,1,1H10z" />{" "}
                      <path d="M12,11c0,1.084,0.809,2.575,1.5,3.392v0.74l-3.947,1.974c-0.013,0.007-0.021,0.019-0.034,0.026 c-0.024,0.013-0.05,0.021-0.074,0.036l-3,2c-0.296,0.197-0.465,0.538-0.443,0.895c0.022,0.355,0.232,0.673,0.551,0.832L9,22.118V26 c0,0.379,0.214,0.725,0.553,0.895l6,3c0.014,0.007,0.031,0.004,0.046,0.011C15.727,29.962,15.862,30,16,30s0.273-0.038,0.401-0.095 c0.015-0.006,0.031-0.004,0.046-0.011l6-3C22.786,26.725,23,26.379,23,26v-3.882l2.447-1.224c0.319-0.159,0.529-0.477,0.551-0.832 c0.022-0.356-0.147-0.697-0.443-0.895l-3-2c-0.023-0.015-0.049-0.023-0.073-0.036c-0.013-0.007-0.021-0.02-0.034-0.027L18.5,15.132 v-0.74C19.191,13.575,20,12.084,20,11c0-2.21-1.757-3.942-4-3.942S12,8.79,12,11z M16,18c0.777,0,1.463-0.364,1.922-0.921 L19.764,18L16,19.882L12.236,18l1.842-0.921C14.537,17.636,15.223,18,16,18z M15.5,15.5V15h1v0.5c0,0.276-0.224,0.5-0.5,0.5 S15.5,15.776,15.5,15.5z M10.072,19.154l3.94,1.97l-1.083,0.722l-3.94-1.97L10.072,19.154z M11,23.118l1.553,0.776 C12.694,23.965,12.847,24,13,24c0.194,0,0.388-0.057,0.555-0.168L15,22.868v4.513l-4-2V23.118z M21,25.382l-4,2v-4.513l1.445,0.964 C18.612,23.943,18.806,24,19,24c0.153,0,0.306-0.035,0.447-0.105L21,23.118V25.382z M19.072,21.846l-1.083-0.722l3.94-1.97 l1.083,0.722L19.072,21.846z M16,9.058c1.122,0,2,0.853,2,1.942c0,0.433-0.488,1.437-0.936,2h-2.127C14.488,12.437,14,11.433,14,11 C14,9.911,14.878,9.058,16,9.058z" />{" "}
                      <path d="M17,5V3c0-0.552-0.448-1-1-1s-1,0.448-1,1v2c0,0.552,0.448,1,1,1S17,5.552,17,5z" />{" "}
                      <path d="M20.95,4.293l-1.414,1.414c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293 l1.414-1.414c0.391-0.391,0.391-1.023,0-1.414S21.34,3.902,20.95,4.293z" />{" "}
                      <path d="M11.05,4.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l1.414,1.414c0.195,0.195,0.451,0.293,0.707,0.293 s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L11.05,4.293z" />{" "}
                    </g>{" "}
                  </g>
                </svg>
              </span>
              <Link href="/category/solution" className="">
                Solution
              </Link>
            </button>
          </li>
          <li className="relative">
            <button className="focus:bg-slate-600 hover:bg-slate-600 hover:text-light flex w-full space-x-2 rounded-md px-10 py-3 text-gray-800 focus:outline-none">
              <span>
                <svg
                  fill="#1A1919"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 256 246"
                  enableBackground="new 0 0 256 246"
                  xmlSpace="preserve"
                  stroke="#1A1919"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M254,150.588v93.343H53.545v-31.916h64.591v-28.727h60.744v-32.7H254z M113.175,18.875c0,9.282,7.524,16.806,16.806,16.806 s16.806-7.524,16.806-16.806s-7.524-16.806-16.806-16.806S113.175,9.593,113.175,18.875z M189.915,100.17 c-1.62,3.746-6.074,5.264-9.82,3.543l-31.182-14.68c-1.822-0.81-3.341-2.43-3.948-4.353L139.7,69.798l-7.289,36.463l24.593,0.506 c5.264,0.101,9.415,4.556,9.314,9.82l-1.316,50.999c-0.101,5.264-4.454,9.415-9.618,9.415c0,0-0.101,0-0.203,0 c-5.366-0.101-9.516-4.556-9.415-9.82l1.114-41.483l-30.668-0.709l-7.087,35.113c-0.304,1.417-0.911,2.936-1.721,4.151 l-26.224,37.721c-3.341,4.859-9.82,5.872-14.68,2.531c-4.758-3.341-5.872-9.82-2.43-14.579l24.908-35.494l15.963-90.455 L73.183,93.305c-0.556,0.513-1.173,0.919-1.823,1.224l2.972,2.972l-8.68,8.68l14.466,14.466L68.545,132.22L22.253,85.927 l11.573-11.573l14.466,14.466l8.68-8.68l4.843,4.842c0.369-0.79,0.883-1.527,1.553-2.164l39.78-37.769 c5.25-4.518,13.672-7.244,20.962-6.029l6.884,1.316c9.213,1.62,16.299,7.897,19.236,16.097l7.492,20.552l28.448,13.364 C189.915,91.97,191.535,96.424,189.915,100.17z M67.099,97.501L56.972,87.374l-5.063,5.063l10.127,10.127L67.099,97.501z M56.972,126.433l-2.893,2.893l-5.786-5.787l2.893-2.893l-17.36-17.36l-2.893,2.893l-5.787-5.787l2.893-2.893l-8.68-8.68L2,106.18 l46.293,46.293l17.36-17.36L56.972,126.433z" />{" "}
                  </g>
                </svg>
              </span>
              <Link href="/category/career" className="">
                Career
              </Link>
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Aside;
