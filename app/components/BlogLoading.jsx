import React from "react";

const BlogLoading = () => {
  return (
    <div className="animate-pulse block-item shadow-md w-full mx-auto mt-8">
      <div className="bg-slate-500 h-6 rounded-t-3xl" />
      <div className="py-4 px-6">
        <div className="flex items-center space-x-2">
          <div className="h-7 w-7 bg-slate-500 rounded-full" />
          <div className="h-3 bg-slate-500 rounded-full w-1/3" />
        </div>
        <div className="my-6">
          <div className="h-5 bg-slate-500 rounded-full w-3/4" />
          <div className="my-4">
            <div className="h-3 my-2bg-slate-500 rounded-full w-full" />
            <div className="h-3 my-2 bg-slate-500 rounded-full w-5/6" />
            <div className="h-3 my-2 bg-slate-500 rounded-full w-4/6" />
            <div className="h-3 my-2 bg-slate-500 rounded-full w-5/6" />
            <div className="h-3 my-2 bg-slate-500 rounded-full w-3/6" />
            <div className="h-3 my-2 bg-slate-500 rounded-full w-2/6" />
          </div>
        </div>
        <div className="my-4">
          <div className="h-11 bg-slate-500 rounded-lg w-full" />
          <div className="h-3 my-4 mx-auto bg-slate-500 rounded-full w-1/2" />
        </div>
      </div>
    </div>
  );
};

export default BlogLoading;
