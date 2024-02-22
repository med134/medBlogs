import React from "react";
import HomePage from "./components/HomePage";
import Easy from "./components/EsayTemplates";
import Dev from "./components/Dev";
import CategoryList from "./components/HeaderCategory";
import FirstView from "./components/FirstView";
import TransitionEffect from "./components/TransitionEffect";
import ScrollUp from "./components/ScrollUp";

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <ScrollUp />
      <FirstView />
      <CategoryList />
      <HomePage />
      <Easy />
      <Dev />
    </>
  );
}
