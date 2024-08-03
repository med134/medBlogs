import React from "react";
import Profile from "@/app/components/Profile";

async function getUser(name) {
  const res = await fetch(`api/users/${name}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const page = async ({params}) => {
  const { name } = params;
  const user = await getUser(name);
  console.log(user,"userId")
  return (
    <main className="py-20">
     <Profile user={user}/> 
    </main>
  );
};

export default page;
