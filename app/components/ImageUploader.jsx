"use client";
import React, { useState } from "react";
import imageCompression from "browser-image-compression";
import Image from "next/image";

const ImageUploader = ({ imageUrl }) => {
  const [dataUrl, setDataUrl] = useState(imageUrl);
  console.log(dataUrl);
  // upload photo
  const readURL = async (event) => {
    const input = event.target;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      // Compression options
      const options = {
        maxSizeMB: 1, // Maximum file size in MB
        maxWidthOrHeight: 800, // Maximum width or height
        useWebWorker: true, // For better performance
      };
      try {
        // Compress the image file
        const compressedFile = await imageCompression(file, options);
        // Convert the compressed file to base64 URL
        const reader = new FileReader();
        reader.onload = () => {
          const src = reader.result;
          setDataUrl(src); // Set compressed image to state
        };
        reader.readAsDataURL(compressedFile);
      } catch (error) {
        console.log("Error while compressing the image", error);
      }
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={dataUrl}
        width={300}
        height={300}
        alt="user Image"
        className={"w-60 h-60 rounded-full"}
        loading="lazy"
      />
      <div className="absolute inset-0 ml-[20%] flex items-center justify-center">
        <label className="py-1.5 px-3 bg-dark bg-opacity-80 text-white text-sm cursor-pointer">
          Change Photo
          <input
            type="file"
            onChange={readURL}
            name="imageUrl"
            accept="image/*"
            className="absolute inset-0 opacity-0 cursor-pointer"
            value=""
          />
        </label>
      </div>
    </div>
  );
};

export default ImageUploader;
