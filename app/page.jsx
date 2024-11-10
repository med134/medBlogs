import React, { Suspense } from "react";
import HomePage from "./components/HomePage";
import TransitionEffect from "./components/TransitionEffect";
import dynamic from "next/dynamic";
import Loading from "./Loading";
import { getPosts } from "./utils/action";
import FirstView from "./components/FirstView";
const Easy = dynamic(() => import("./components/EsayTemplates"), {
  loading: () => <Loading />,
});

export default async function Home() {
  const postAdmin = await getPosts();
  const posts = JSON.parse(JSON.stringify(postAdmin));
  return (
    <>
      <TransitionEffect />
      <FirstView posts={posts} />
      <HomePage />
      <Suspense fallback={<Loading />}>
        <Easy />
      </Suspense>
    </>
  );
}
