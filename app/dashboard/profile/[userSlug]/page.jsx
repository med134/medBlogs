import React from "react";
import Profile from "@/app/components/Profile";
import { auth } from "@/app/utils/auth";
import { getUserBySlug } from "@/app/utils/action";


const page = async ({ params }) => {
  const { userSlug } = params;
  const user = await getUserBySlug(userSlug);
  const session = await auth();
  return (
    <main className="py-20">
      <Profile user={user} session={session} />
    </main>
  );
};

export default page;
