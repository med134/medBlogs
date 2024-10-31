import React from "react";
import UsersDashboard from "@/app/components/UsersDashboard";
import { getAllUsers } from "@/app/utils/action";

const page = async () => {
  const AllUsers = await getAllUsers();
  const data = JSON.parse(JSON.stringify(AllUsers));

  return (
    <div className="">
      <UsersDashboard users={data} />
    </div>
  );
};

export default page;
