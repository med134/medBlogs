import React from "react";
import HomePage from "./components/HomePage";
import FirstView from "./components/FirstView";
import TransitionEffect from "./components/TransitionEffect";
import dynamic from "next/dynamic";
import Loading from "./Loading";
const Easy = dynamic(() => import("./components/EsayTemplates"), {
  loading: () => <Loading />,
});

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <FirstView />
      <HomePage />
      <Easy />
    </>
  );
}
