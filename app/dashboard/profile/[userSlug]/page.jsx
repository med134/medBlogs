import React from "react";
import Profile from "@/app/components/Profile";
import { auth } from "@/app/utils/auth";

async function getUser(userSlug) {
  const res = await fetch(`https://www.medcode.dev/api/users/${userSlug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const page = async ({ params }) => {
  const { userSlug } = params;
  const user = await getUser(userSlug);
  const session =await auth();
  return (
    <main className="py-20">
      <Profile user={user} session={session} />
    </main>
  );
};

export default page;
