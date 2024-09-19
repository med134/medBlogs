import React from "react";
import UsersDashboard from "@/app/components/UsersDashboard";
import { getAllUsers } from "@/app/utils/action";

const page = async () => {
  const users = await getAllUsers();
  const data = JSON.parse(JSON.stringify(users));

  return (
    <div className="">
      <UsersDashboard users={data} />
    </div>
  );
};

export default page;
