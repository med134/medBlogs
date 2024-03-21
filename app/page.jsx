import React from "react";
import HomePage from "./components/HomePage";
import FirstView from "./components/FirstView";
import TransitionEffect from "./components/TransitionEffect";
import dynamic from "next/dynamic";
const Dev = dynamic(() => import("./components/Dev"));
const Easy = dynamic(() => import("./components/EsayTemplates"));
import Card from "./ServerCard";
import Cat from "./MainSide";
export default function Home() {
  return (
    <>
      <TransitionEffect />
      <FirstView />
      <HomePage child={<Card />} side={<Cat />} />
      <Easy />
      <Dev />
    </>
  );
}
