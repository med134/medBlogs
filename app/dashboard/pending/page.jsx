"use server";
import React from "react";
import EditPending from "@/app/components/EditPending";

const page = async () => {
  return (
    <div className="container mx-auto p-4 py-28">
      <EditPending />
    </div>
  );
};
export default page;
