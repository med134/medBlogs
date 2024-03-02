"use client";
import React, { useState, useRef } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import { IoCopyOutline } from "react-icons/io5";
import { MdFileDownloadDone } from "react-icons/md";
import { FaTabletScreenButton } from "react-icons/fa6";
import { FaMobileScreen } from "react-icons/fa6";
import { LuScreenShare } from "react-icons/lu";

function CodeEditor({ code2 }) {
  const [code, setCode] = useState(code2);
  const [showCode, setShowCode] = useState(true);
  const [showOutput, setShowOutput] = useState(false);
  const [copy, setCopy] = useState(false);
  const [selectedScreenSize, setSelectedScreenSize] = useState("lg");
  const editorRef = useRef(null);

  const handleChange = (newCode) => {
    setCode(newCode);
  };

  const handleCopyClick = () => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.editor;
      editorInstance.selectAll();
      editorInstance.focus();
      document.execCommand("copy");
      setCopy(true);
    }
  };

  const toggleOutputVisibility = () => {
    setShowOutput(!showOutput);
    setShowCode(!showCode);
  };

  const handleScreenSizeChange = (size) => {
    setSelectedScreenSize(size);
    // Update code based on selected screen size
    let updatedCode = code2; // Default to the original code
    switch (size) {
      case "sm":
        updatedCode = updatedCode
          .replace(/\bgrid\b/g, "block")
          .replace(/\btext-5xl\b/g, "text-xl");
        break;
      case "md":
        updatedCode = updatedCode
          .replace(/\bblock\b/g, "grid")
          .replace(/\btext-xl\b/g, "text-5xl");
        break;
      default:
        break;
    }
    setCode(updatedCode);
  };

  return (
    <div className="border border-3 rounded-md w-full h-full">
      <div className="px-2 flex justify-between items-stretch py-4 md:py-2 bg-mainColor font-semibold rounded-tr-lg rounded-tl-lg md:items-center">
        <span className="text-light px-4 py-1 xs:hidden">Code source</span>
        <div className="flex items-center">
          <span className="text-light mr-1 xs:hidden">Screen Size:</span>
          <button
            className={`text-light ml-4 px-2 rounded-lg flex justify-center items-center border border-light py-1 ${
              selectedScreenSize === "sm" ? "bg-cyan-600" : "bg-mainColor"
            } hover:bg-cyan-600 hover:text-light`}
            onClick={() => handleScreenSizeChange("sm")}
          >
            <span className="md:hidden">SM</span>
            <FaMobileScreen className="ml-1" />
          </button>
          <button
            className={`text-light ml-2 px-2 rounded-lg flex justify-center items-center border border-light py-1 ${
              selectedScreenSize === "md" ? "bg-cyan-600" : "bg-mainColor"
            } hover:bg-cyan-600 hover:text-light`}
            onClick={() => handleScreenSizeChange("md")}
          >
            <span className="md:hidden">MD</span>
            <FaTabletScreenButton className="ml-1" />
          </button>
          <button
            className={`text-light py-1 ml-2 px-2 rounded-lg flex justify-center items-center border border-light py-1${
              selectedScreenSize === "lg" ? "bg-cyan-600" : "bg-mainColor"
            } hover:bg-cyan-600 hover:text-light`}
            onClick={() => handleScreenSizeChange("lg")}
          >
            <span className="md:hidden">LG</span>
            <LuScreenShare className="ml-1" />
          </button>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={handleCopyClick}
            className="flex justify-center border border-light px-2 py-1 mr-3 items-center text-light bg-mainColor rounded-lg hover:bg-cyan-600 hover:text-light"
          >
            <span className="md:hidden">{copy ? "Copied!" : "Copy code"}</span>
            {copy ? (
              <MdFileDownloadDone className="ml-1" />
            ) : (
              <IoCopyOutline className="ml-1" />
            )}
          </button>
          <button
            className=" text-light mr-2 bg-mainColor border border-light px-2 py-1 rounded-lg hover:bg-cyan-600 hover:text-light"
            onClick={toggleOutputVisibility}
          >
            {showOutput ? "Show code" : "Preview"}
          </button>
        </div>
      </div>
      <div className="block">
        {showCode && (
          <div className="w-full">
            <AceEditor
              ref={editorRef}
              height="500px"
              width="100%"
              value={code}
              mode="javascript"
              theme="monokai"
              fontSize="16px"
              highlightActiveLine={true}
              onChange={handleChange}
              setOptions={{
                enableLiveAutocompletion: true,
                showLineNumbers: true,
                tabSize: 2,
              }}
            />
          </div>
        )}
        {showOutput && (
          <div className="p-4">
            <div
              className={`border border-gray-500 p-4 ${
                selectedScreenSize === "sm"
                  ? "w-[400px] h-full"
                  : selectedScreenSize === "md"
                  ? "w-[667px] h-full"
                  : "w-[1080px] h-full"
              }`}
              dangerouslySetInnerHTML={{ __html: code }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default CodeEditor;
