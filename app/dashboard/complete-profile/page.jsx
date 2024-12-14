import React from "react";
import CompleteUser from "@/app/components/CompleteUser";
import { auth } from "@/auth";

const page = async () => {
  const user = await auth();
  return (
    <div className="py-16">
      <CompleteUser user={user} />
    </div>
  );
};

export default page;
