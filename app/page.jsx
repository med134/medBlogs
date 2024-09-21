import React from "react";
import HomePage from "./components/HomePage";
import FirstView from "./components/FirstView";
import TransitionEffect from "./components/TransitionEffect";
import dynamic from "next/dynamic";
const Easy = dynamic(() => import("./components/EsayTemplates"));

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
