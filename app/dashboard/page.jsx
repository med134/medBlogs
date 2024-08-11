"use client";
import React, { useEffect } from "react";
import ChartPage from "../components/ChartPage";
import HomeDashboard from "../components/HomeDashboard";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const page = () => {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session.status != "authenticated") {
      router.push(`/dashboard/login`);
    }
  }, [session, router]);
  return (
    <div className="p-12 w-[100%] bg-white dark:bg-dark sm:p-4 col-auto pt-20 px-1">
      <h1 className="text-2xl mt-4 flex text-dark font-semibold">
        Dashboard <span className="text-mainColor ml-2">Panel</span>
      </h1>
      <HomeDashboard />
      <ChartPage />
    </div>
  );
};
export default page;
