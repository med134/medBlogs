import React from "react";
import HomePage from "./components/HomePage";
import FirstView from "./components/FirstView";
import TransitionEffect from "./components/TransitionEffect";
import dynamic from "next/dynamic";
const Dev = dynamic(() => import("./components/Dev"));
const Easy = dynamic(() => import("./components/EsayTemplates"));
const CategoryList = dynamic(() => import("./components/HeaderCategory"));

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <FirstView />
      <CategoryList />
      <HomePage />
      <Easy />
      <Dev />
    </>
  );
}
