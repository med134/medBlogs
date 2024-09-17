"use client";
import React, { useState, useRef } from "react";

export const AddNewArticle = () => {
  const [successful, setSuccessful] = useState(false);
  const [dataUrl, setDataUrl] = useState("");
  const [canvasVisible, setCanvasVisible] = useState(true);
  const [dataUrlVisible, setDataUrlVisible] = useState(true);
  const canvasRef = useRef(null);
  const textareaRef = useRef(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const image = dataUrl;

    try {
      setLoading(true);
      const response = await fetch("/api/articles", {
        method: "POST",
        body: JSON.stringify({
          title,
          image,
        }),
      });
      if (response.ok) {
        setLoading(false);
        e.target.reset();
        setSuccessful(true);
      } else {
        throw new Error("Failed to publish your post");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const readURL = (event) => {
    const input = event.target;

    if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onload = () => {
        const avatarImg = new Image();
        const src = reader.result;
        setDataUrl(src);

        avatarImg.onload = () => {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext("2d");
          ctx.canvas.width = avatarImg.width;
          ctx.canvas.height = avatarImg.height;
          ctx.drawImage(avatarImg, 0, 0);
        };

        avatarImg.src = src;
      };
      reader.readAsDataURL(input.files[0]);
    }
  };
  const toggleCanvas = () => {
    setCanvasVisible(!canvasVisible);

    const toggleDataUrl = () => {
      setDataUrlVisible(!dataUrlVisible);
    };

    return (
      <div className="inline-block max-h-full p-8 py-8 sm:p-2 sm:py-2">
        <h1 className="text-gray-700 text-2xl lg:text-2xl font-bold">
          Start to upload Image
        </h1>
        <div className="sm:items-center py-3">
          <form className="p-4 text-left text-gray-700" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 md:block">
              <input
                required
                type="text"
                placeholder="Title"
                className="h-12 w-full rounded-md border m-1 bg-white px-2 text-sm outline-none focus:ring sm:px-2"
              />
              <input
                required
                type="file"
                accept="image/*"
                id="image"
                onChange={readURL}
                className="h-12 w-full rounded-md border m-1 bg-white px-5 text-sm outline-none focus:ring"
              />
              <button
                disabled={loading}
                type="submit"
                className={`rounded-md font-semibold py-2 w-full bg-mainColor text-light ml-4 mt-5 hover:bg-cyan-700 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
};
