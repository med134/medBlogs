import React from "react";
import NavBaLinks from "./NavBaLinks";
import { getUserId } from "../utils/action";

const NavBar = async () => {
  const BlogId = await getUserId();
  const user = JSON.parse(JSON.stringify(BlogId));
  return (
    <>
      <NavBaLinks user={user} />
    </>
  );
};

export default NavBar;
