import SettingsProfile from "@/app/components/SettingsProfile";
import React from "react";

async function getUser(userSlug) {
  const res = await fetch(`/api/users/${userSlug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const DashboardSettingsPage = async ({ params }) => {
  const { userSlug } = params;
  const user = await getUser(userSlug);
  return (
    <main className="py-20">
      <SettingsProfile
        email={user.email}
        name={user.name}
        job={user.job}
        phone={user.phone}
        homeAddress={user.homeAddress}
        imageUrl={user.imageUrl}
        userSlug={user.userSlug}
      />
    </main>
  );
};

export default DashboardSettingsPage;
