import React from "react";
import ProfileDashboard from "@/app/components/ProfileDashboard";
import { getUserById } from "@/app/utils/action";

const page = async ({ params }) => {
  const { id } = await params;
  const user = await getUserById(id);
  return (
    <main className="w-full">
      <ProfileDashboard user={user} />
    </main>
  );
};

export default page;
