import React from "react";
import UsersDashboard from "@/app/components/UsersDashboard";
import { getAllUsers } from "@/app/utils/action";
import { auth } from "@/app/utils/auth";
import TableUsers from "@/app/components/TableUsers";

const page = async () => {
  const AllUsers = await getAllUsers();
  const data = JSON.parse(JSON.stringify(AllUsers));
  const authUser = await auth();
  const isAdmin = authUser.user.email;
  return (
    <div className="">
      {isAdmin === process.env.ADMIN_EMAIL ? (
        <UsersDashboard users={data} />
      ) : (
        <TableUsers data={data} />
      )}
    </div>
  );
};

export default page;
