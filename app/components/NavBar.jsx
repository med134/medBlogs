import React from "react";
import NavBaLinks from "./NavBaLinks";
import { getUserId } from "../utils/action";

const NavBar = async () => {
  const BlogId = await getUserId();
  const user = JSON.parse(JSON.stringify(BlogId));
  const session = null;
  return (
    <>
      <NavBaLinks user={user} session={session} />
    </>
  );
};

export default NavBar;
