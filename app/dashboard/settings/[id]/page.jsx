import SettingsProfile from "@/app/components/SettingsProfile";
import React from "react";

async function getUser(id) {
  const res = await fetch(`https://www.medcode.dev/api/users/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const DashboardSettingsPage = async ({ params }) => {
  const { id } = params;
  const user = await getUser(id);
  return (
    <main className="py-20">
      <SettingsProfile
        id={id}
        email={user.email}
        name={user.name}
        job={user.job}
        phone={user.phone}
        homeAddress={user.homeAddress}
        imageUrl={user.imageUrl}
      />
    </main>
  );
};

export default DashboardSettingsPage;
