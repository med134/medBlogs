import React from "react";
import ResponsiveDashboardNavbar from "./ResponsiveDashboardNavbar";
import { getUserId } from "../utils/action";

async function DashboardNav() {
  const userId = await getUserId();
  const user = JSON.parse(JSON.stringify(userId));
  console.log(user)
  return <ResponsiveDashboardNavbar user={user} />;
}

export default DashboardNav;
