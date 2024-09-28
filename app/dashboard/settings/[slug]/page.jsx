import React from "react";
import SettingsProfile from "@/app/components/SettingsProfile";
import { getUserBySlug } from "../../profile/[userSlug]/page";


const page = async ({ params }) => {
  const { slug } = params;
  const user = await getUserBySlug(slug);
  return (
    <main className="py-20 w-full">
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
