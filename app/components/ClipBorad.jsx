"use client";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { AiFillCopy } from "react-icons/ai";
import { BsClipboard2Check } from "react-icons/bs";
import { useState, useEffect } from "react";
import { isValidElementType } from "react-is";
const ClipBoard = ({ data }) => {
  const [copy, setCopy] = useState(false);
  const [empty, setEmpty] = useState(data.code);

  return (
    <div className={`${!empty && "hidden"}`}>
      <div className="max-w-2xl bg-gray-600 rounded-md overflow-x-auto">
        <div className="flex justify-between px-4 text-white items-center">
          <p className="text-sm">code source</p>
          {copy ? (
            <button
              className="py-1 inline-flex items-center"
              onClick={() => {
                navigator.clipboard.writeText(empty);
                setCopy(true);
                setTimeout(() => {
                  setCopy(false);
                }, 2000);
              }}
            >
              <span className="flex">
                <p className="text-sm">Copied!</p>
                <BsClipboard2Check className="w-8 hover:scale-90" size={18} />
              </span>
            </button>
          ) : (
            <button
              className="py-1 inline-flex items-center"
              onClick={() => {
                navigator.clipboard.writeText(empty);
                setCopy(true);
                setTimeout(() => {
                  setCopy(false);
                }, 2000);
              }}
            >
              <span className="flex">
                <p className="text-sm">Copy code</p>
                <AiFillCopy className="w-8 hover:scale-90" size={18} />
              </span>
            </button>
          )}
        </div>

        <SyntaxHighlighter
          className="h-auto"
          language="jsx"
          style={dracula}
          customStyle={{
            padding: "20px",
            width: "screen",
            height: "auto",
            borderRadius: "10px",
          }}
        >
          {data.code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
export default ClipBoard;
