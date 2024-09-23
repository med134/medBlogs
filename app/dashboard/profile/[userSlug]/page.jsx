import React from "react";
import Profile from "@/app/components/Profile";
import { auth } from "@/app/utils/auth";
import { getUserBySlug } from "@/app/utils/action";

const page = async ({ params }) => {
  const { slug } = params;
  const user = await getUserBySlug(slug);
  const session = await auth();
  const dataSession = JSON.parse(JSON.stringify(session));
  console.log(dataSession, user);


  return (
    <main className="py-20">
      <Profile session={dataSession} user={user}/>
    </main>
  );
};

export default page;
