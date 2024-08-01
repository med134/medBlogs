import React from "react";
import Profile from "@/app/components/Profile";

async function getUser(id) {
  const res = await fetch(`https://www.medcode.dev/api/users/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const page = async ({params}) => {
  const { id } = params;
  const user = await getUser(id);
  console.log(user,"userId")
  return (
    <main className="py-20">
     <Profile user={user}/> 
    </main>
  );
};

export default page;
