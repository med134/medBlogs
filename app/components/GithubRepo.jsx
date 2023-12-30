import React from "react";
import { AiOutlineBranches } from "react-icons/ai";
import Link from "next/link";
const GithubRepo = () => {
  return (
    <div className="category col-span-12 border border-borderColor rounded-lg bg-slate-50 mt-6 md:col-span-6 lg:col-span-4 md:order-1 grid gap-4 xl:gap-6">
      <div className="inline items-center text-center p-6">
        <svg
          className="w-8 h-8 mx-auto mb-4"
          width={33}
          height={32}
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_6991_185972)">
            <path
              d="M16.3333 0C7.49331 0 0.333313 7.16 0.333313 16C0.333313 23.08 4.91331 29.06 11.2733 31.18C12.0733 31.32 12.3733 30.84 12.3733 30.42C12.3733 30.04 12.3533 28.78 12.3533 27.44C8.33331 28.18 7.29331 26.46 6.97331 25.56C6.79331 25.1 6.01331 23.68 5.33331 23.3C4.77331 23 3.97331 22.26 5.31331 22.24C6.57331 22.22 7.47331 23.4 7.77331 23.88C9.21331 26.3 11.5133 25.62 12.4333 25.2C12.5733 24.16 12.9933 23.46 13.4533 23.06C9.89331 22.66 6.17331 21.28 6.17331 15.16C6.17331 13.42 6.79331 11.98 7.81331 10.86C7.65331 10.46 7.09331 8.82 7.97331 6.62C7.97331 6.62 9.31331 6.2 12.3733 8.26C13.6533 7.9 15.0133 7.72 16.3733 7.72C17.7333 7.72 19.0933 7.9 20.3733 8.26C23.4333 6.18 24.7733 6.62 24.7733 6.62C25.6533 8.82 25.0933 10.46 24.9333 10.86C25.9533 11.98 26.5733 13.4 26.5733 15.16C26.5733 21.3 22.8333 22.66 19.2733 23.06C19.8533 23.56 20.3533 24.52 20.3533 26.02C20.3533 28.16 20.3333 29.88 20.3333 30.42C20.3333 30.84 20.6333 31.34 21.4333 31.18C24.6098 30.108 27.37 28.0667 29.3254 25.3435C31.2807 22.6203 32.3328 19.3525 32.3333 16C32.3333 7.16 25.1733 0 16.3333 0Z"
              fill="currentColor"
              className="fill-black dark:fill-white"
            />
          </g>
          <defs>
            <clipPath id="clip0_6991_185972">
              <rect
                width={32}
                height={32}
                fill="white"
                transform="translate(0.333313)"
              />
            </clipPath>
          </defs>
        </svg>
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200">
          Open source
        </h3>
        <p className="mt-2 text-gray-500">
          Open Source Software. Find the entire code on our GitHub.
        </p>
        <div className="flex bg-slate-100 p-2 mt-4 rounded-md border border-gray-700">
          <AiOutlineBranches fontSize={26} />
          <Link
            target="_blank"
            href="https://github.com/med134/screeshotApp"
            className="font-lexend ml-2 hover:underline hover:text-blue-500"
          >
            ScreenShot App (web Application){" "}
          </Link>
        </div>
        <div className="flex bg-slate-100 p-2 mt-4 rounded-md border border-gray-700">
          <AiOutlineBranches fontSize={26} />
          <Link
            href="https://github.com/med134/stote-ecommerce-nextjs"
            target="_blank"
            className="font-lexend ml-2 hover:underline hover:text-blue-500"
          >
            Store Ecommerce online (website){" "}
          </Link>
        </div>
        <div className="flex bg-slate-100 mb-6 p-2 mt-4 rounded-md border border-gray-700">
          <AiOutlineBranches fontSize={26} />
          <Link
            href="https://github.com/med134/benguerir.food"
            target="_blank"
            className="font-lexend ml-2 hover:underline hover:text-blue-500"
          >
            food Order online (Mobile App){" "}
          </Link>
        </div>

        <Link
          target="_blank"
          href="https://github.com/med134?tab=repositories"
          className="font-lexend underline hover:text-blue-500 "
        >
          See more....
        </Link>
      </div>
    </div>
  );
};

export default GithubRepo;
