"use client";
import React, { useState } from "react";

const Advices = () => {
  const [randomNumber, setRandomNumber] = useState(1);
  const [add, setAdd] = useState("");

  const getAdvice = () => {
    fetch(`https://api.adviceslip.com/advice/${randomNumber}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAdd(data.slip.advice);
      });
    const random = Math.floor(Math.random() * 30) + 1;
    setRandomNumber(random);
  };

  return (
    <div className="inline-block justify-center items-center text-center w-full p-4">
      <div className="max-w-md mx-auto space-y-6 flex justify-center">
        <button
          target="_blank"
          onClick={getAdvice}
          className="group font-medium text-base mb-6 relative inline-flex items-center justify-center cursor-pointer h-12 border-2 border-solid py-4 px-6 rounded-md transition-all duration-300 ease-in-out bg-light text-purple-800 border-purple-500 hover:text-dark focus:text-dark"
        >
          <span className="font-medium">Click for Advices</span>
          <svg
            className="ml-1 rotate-180 fill-white group-hover:fill-purple-400"
            width={27}
            height={27}
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M17.6954 12.4962L21.6468 12.1467C22.5335 12.1467 23.2525 12.8727 23.2525 13.7681C23.2525 14.6635 22.5335 15.3895 21.6468 15.3895L17.6954 15.04C16.9997 15.04 16.4357 14.4705 16.4357 13.7681C16.4357 13.0645 16.9997 12.4962 17.6954 12.4962"
            />
            <path d="M4.42637 12.5604C4.48813 12.4981 4.71885 12.2345 4.93559 12.0157C6.19989 10.6449 9.50107 8.40347 11.228 7.71751C11.4902 7.60808 12.1532 7.37512 12.5086 7.35864C12.8477 7.35864 13.1716 7.43748 13.4804 7.59279C13.8661 7.81046 14.1738 8.15403 14.3439 8.55878C14.4522 8.83882 14.6224 9.68009 14.6224 9.69539C14.7913 10.6143 14.8834 12.1086 14.8834 13.7606C14.8834 15.3325 14.7913 16.7656 14.6527 17.6999C14.6375 17.7163 14.4674 18.76 14.2821 19.1177C13.943 19.7719 13.28 20.1766 12.5704 20.1766H12.5086C12.046 20.1613 11.0742 19.7554 11.0742 19.7413C9.43931 19.0553 6.21621 16.9221 4.92044 15.5043C4.92044 15.5043 4.55455 15.1396 4.39608 14.9125C4.14904 14.5854 4.02552 14.1806 4.02552 13.7759C4.02552 13.3241 4.16419 12.904 4.42637 12.5604" />
          </svg>
          <span className="absolute bg-white bottom-0 w-0 left-1/2 h-full -translate-x-1/2 transition-all ease-in-out duration-300 group-hover:w-[105%] -z-[1] group-focus:w-[105%]" />
        </button>
      </div>

      <div
        aria-disabled={randomNumber === null}
        className="font-dance text-3xl font-bold text-light text-center items-center"
      >
        <p>{add} </p>
      </div>
    </div>
  );
};

export default Advices;
