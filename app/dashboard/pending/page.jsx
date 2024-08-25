import React from "react";
import EditPending from "@/app/components/EditPending";
import { getDraftBlog } from "@/app/utils/action";

const page = async () => {
  const draftBlog = await getDraftBlog();
  const session =await auth();
  return (
    <div className="container mx-auto p-4 py-28">
      <EditPending  draftBlog={draftBlog} session={session}/>
    </div>
  );
};
export default page;
