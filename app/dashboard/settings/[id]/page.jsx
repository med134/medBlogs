import React from "react";
import SettingsProfile from "@/app/components/SettingsProfile";
import { getUserById } from "@/app/utils/action";

const page = async ({ params }) => {
  const { id } = await params;
  const authUser = await getUserById(id);
  const user = JSON.parse(JSON.stringify(authUser));
  return (
    <main className="py-6 w-full">
      <SettingsProfile
        email={user.email}
        name={user.name}
        job={user.job}
        phone={user?.phone}
        homeAddress={user?.homeAddress}
        imageUrl={user.imageUrl}
        userSlug={user.userSlug}
        workLinks={user.workLinks}
        skills={user?.skills}
        experience={user?.experience}
        userId={user.id}
      />
    </main>
  );
};

export default page;
