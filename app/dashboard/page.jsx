"use client";
import React, { useEffect } from "react";
import HomeDashboard from "../components/HomeDashboard";
import ChartPage from "../components/ChartPage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DashBoard() {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session?.status === "unauthenticated") {
      router.push("dashboard/login");
    }
  }, [session]);
  return (
    <div className="p-12 w-[100%] bg-white dark:bg-dark sm:p-4 col-auto pt-20 px-1">
      <h1 className="text-2xl flex text-dark font-semibold">
        Dashboard <span className="text-mainColor ml-2">Panel</span>
      </h1>
      <HomeDashboard />
      <ChartPage />
    </div>
  );
}
