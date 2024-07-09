import React from "react";
import HomePage from "./components/HomePage";
import FirstView from "./components/FirstView";
import TransitionEffect from "./components/TransitionEffect";
import Card from "./ServerCard";
import Cat from "./MainSide";
import dynamic from "next/dynamic";

const Easy = dynamic(() => import("./components/EsayTemplates"), {
  ssr: false,
});
const Dev = dynamic(() => import("./components/Dev"), {
  ssr: false,
});

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
