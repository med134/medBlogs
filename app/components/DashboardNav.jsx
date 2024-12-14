import React from "react";
import ResponsiveDashboardNavbar from "./ResponsiveDashboardNavbar";
import { getUserByEmail, getUserId } from "../utils/action";
import { auth } from "@/auth";

async function DashboardNav() {
  const session = await auth();
  const userId = await getUserId();
  const user = JSON.parse(JSON.stringify(userId));

  return <ResponsiveDashboardNavbar user={user} session={session} />;
}

export default DashboardNav;
