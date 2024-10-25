import React from "react";
import NavBaLinks from "./NavBaLinks";
import { auth } from "../utils/auth";

const NavBar = async () => {
  const { session } = await auth();
  return (
    <>
      <NavBaLinks session={session} />
    </>
  );
};

export default NavBar;
