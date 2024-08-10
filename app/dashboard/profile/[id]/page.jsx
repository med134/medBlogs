import React from "react";
import Profile from "@/app/components/Profile";

async function getUser(id) {
  const res = await fetch(
    `http://localhost:3000/api/users/669c376b2e876619a78fbd05`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const page = async ({ params }) => {
  const { id } = params;
  const user = getUser(id);
  console.log(user);
  return <main className="py-20">user</main>;
};

export default page;
