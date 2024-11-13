import React from "react";
import DashSide from "./DashSide";
import { auth } from "@/app/utils/auth";

const MainSideBarDashboard = async () => {
  const user = await auth();
  const session = JSON.parse(JSON.stringify(user));
  return <DashSide session={session} />;
};

export default MainSideBarDashboard;
