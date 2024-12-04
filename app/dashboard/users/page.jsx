import React from "react";
import UsersDashboard from "@/app/components/UsersDashboard";
import { getAllUsers } from "@/app/utils/action";
import { auth } from "@/app/utils/auth";
import TableUsers from "@/app/components/TableUsers";

const page = async ({ searchParams }) => {
  const { page } = await searchParams;
  const users = await getAllUsers(page || 1);
  const authUser = await auth();
  const isAdmin = authUser.user.email;
  return (
    <>
      {isAdmin === process.env.ADMIN_EMAIL ? (
        <UsersDashboard
          users={users.users}
          totalPage={users.totalPage}
          page={page || 1}
        />
      ) : (
        <TableUsers
          users={users.users}
          totalPage={users.totalPage}
          page={page || 1}
        />
      )}
    </>
  );
};

export default page;
