import React from "react";
import NavBaLinks from "./NavBaLinks";
import { getUserId } from "../utils/action";
import { auth } from "@/auth";

const NavBar = async () => {
  const BlogId = await getUserId();
  const session = await auth();
  const user = JSON.parse(JSON.stringify(BlogId));
  return (
    <>
      <NavBaLinks user={user} session={session} />
    </>
  );
};

export default NavBar;
