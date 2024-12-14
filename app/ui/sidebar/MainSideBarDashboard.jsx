import React from "react";
import DashSide from "./DashSide";
import { auth } from "@/auth";

const MainSideBarDashboard = async () => {
  const session = await auth();
  return <DashSide session={session} />;
};

export default MainSideBarDashboard;
