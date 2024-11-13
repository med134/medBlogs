import React from "react";
import { getUserById } from "@/app/utils/action";
import SettingsUser from "@/app/components/SettingsUser";

const page = async ({ params }) => {
  const { id } = await params;
  const userList = await getUserById(id);
  const user = JSON.parse(JSON.stringify(userList));
  return (
    <div className="max-w-4xl flex items-center mx-auto my-16">
      <SettingsUser user={user} />
    </div>
  );
};

export default page;
