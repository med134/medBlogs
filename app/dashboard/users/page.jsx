import React from "react";
import UsersDashboard from "@/app/components/UsersDashboard";
import { getAllUsers } from "@/app/utils/action";

const page = async () => {
  const users = await getAllUsers();
  return (
    <div className="">
      <UsersDashboard users={users} />
    </div>
  );
};

export default page;
