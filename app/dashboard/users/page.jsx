import React from "react";
import UsersDashboard from "@/app/components/UsersDashboard";
import { getAllUsers } from "@/app/utils/action";
import { auth } from "@/app/utils/auth";

const page = async () => {
  const AllUsers = await getAllUsers();
  const data = JSON.parse(JSON.stringify(AllUsers));
  const authUser = await auth();
  const isAdmin = authUser.user.email;
  return (
    <div className="">
      <UsersDashboard users={data} isAdmin={isAdmin} />
    </div>
  );
};

export default page;
