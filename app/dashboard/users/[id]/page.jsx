import ProfileDashboard from "@/app/components/ProfileDashboard";
import {
  getArticlesByEmail,
  getEmailSession,
  getUserById,
} from "@/app/utils/action";
import React from "react";

export default async function page({ params }) {
  const { id } = await params;
  const user = await getUserById(id);
  const sessionEmail = await getEmailSession();
  const artNb = await getArticlesByEmail(user.email);
  const nBArticle = JSON.parse(JSON.stringify(artNb));
  return (
    <main className="w-full">
      <ProfileDashboard
        user={user}
        nBArticle={nBArticle}
        sessionEmail={sessionEmail}
      />
    </main>
  );
}
