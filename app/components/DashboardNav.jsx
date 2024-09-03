import React from "react";
import ResponsiveDashboardNavbar from "./ResponsiveDashboardNavbar";
import { auth } from "../utils/auth";


async function DashboardNav() {
  const session = await auth();

  return <ResponsiveDashboardNavbar session={session} />;
}

export default DashboardNav;
