import React, { Suspense } from "react";
import HomePage from "./components/HomePage";
import TransitionEffect from "./components/TransitionEffect";
import dynamic from "next/dynamic";
import Loading from "./Loading";
import FirstView from "./components/FirstView";
const Easy = dynamic(() => import("./components/EsayTemplates"), {
  loading: () => <Loading />,
});

export default async function Home() {
  return (
    <>
      <TransitionEffect />
      <FirstView />
      <HomePage />
      <Suspense fallback={<Loading />}>
        <Easy />
      </Suspense>
    </>
  );
}
