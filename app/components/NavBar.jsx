import React from "react";
import NavBaLinks from "./NavBaLinks";
import { getUserId } from "../utils/action";
import { auth } from "../utils/auth";

const NavBar = async () => {
  const session = await auth();
  const BlogId = await getUserId();
  const user = JSON.parse(JSON.stringify(BlogId));
  console.log("session user", session);
  return (
    <>
      <NavBaLinks user={user} />
    </>
  );
};

export default NavBar;
