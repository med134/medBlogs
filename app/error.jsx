"use client";
import { useEffect } from "react";
export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10 w-screen h-screen p-24 pt-16">
      <h1 className="mb-6">Something went wrong. Please try again later.</h1>
      <button
        className="hover:text-amber-600 bg-mainColor text-light px-5 py-2 "
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
