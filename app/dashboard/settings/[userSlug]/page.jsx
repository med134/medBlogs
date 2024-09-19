import React from "react";
import SettingsProfile from "@/app/components/SettingsProfile";
import { getUserBySlug } from "@/app/utils/action";


const page = async ({ params }) => {
  const { userSlug } = params;
  const user = await getUserBySlug(userSlug);
  return (
    <main className="py-20">
      <h1 className="text-2xl font-semibold">Edit Profile</h1>
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

export default page;
