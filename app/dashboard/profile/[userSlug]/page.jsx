import React from "react";
import Profile from "@/app/components/Profile";

async function getUser(userSlug) {
  const res = await fetch(`/api/users/${userSlug}`, {
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
  return (
    <main className="py-20">
      <Profile user={user} />
    </main>
  );
};

export default page;
