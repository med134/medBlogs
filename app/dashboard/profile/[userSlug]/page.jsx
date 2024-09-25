import React from "react";
import Profile from "@/app/components/Profile";
import { auth } from "@/app/utils/auth";
import { getUserBySlug } from "@/app/utils/action";

const page = async ({ params }) => {
  const { userSlug } = params;
  const userData = await getUserBySlug(userSlug);
  const session = await auth();
  const dataSession = JSON.parse(JSON.stringify(session));
  return (
    <main className="py-20">
      <Profile dataSession={dataSession} userData={userData} />
    </main>
  );
};

export default page;
