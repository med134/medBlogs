import React from "react";
import EditPending from "@/app/components/EditPending";
import { getDraftBlog } from "@/app/utils/action";

const page = async () => {
  const data = await getDraftBlog();
  const draftBlog = JSON.parse(JSON.stringify(data));
  return (
    <div className="container mx-auto p-4 py-8">
      <EditPending draftBlog={draftBlog} />
    </div>
  );
};
export default page;
