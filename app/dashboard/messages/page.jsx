import React from "react";
import { FormatDate, getMessages } from "@/app/utils/action";
import { uploadImage } from "@/app/utils/delete";

const page = async () => {
  const message = await getMessages();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Messages</h1>

      <form action={uploadImage}>
        <input type="file" name="image" id="image" accept=".png" />
        <button type="submit">Upload Image</button>
      </form>
    </div>
  );
};

export default page;
