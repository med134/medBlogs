import React from "react";
import EditPending from "@/app/components/EditPending";
import { getDraftBlog } from "@/app/utils/action";

const page = async () => {
  const draftBlog = await getDraftBlog();
  return (
    <div className="container mx-auto p-4 py-8">
      <EditPending  draftBlog={draftBlog} />
    </div>
  );
};
export default page;
