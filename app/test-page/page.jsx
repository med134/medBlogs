import React from "react";
import { signIn } from "../utils/auth";

const page = () => {
  const handelLogin = async () => {
    "use server";
    await signIn("github");
  };
 
  return (
    <div className="py-36 px-16">
      <div className="py-36 px-16">
        <h1 className="text-2xl font-bold mb-4">Add New User</h1>
        <form action={handelLogin}>
          <button>github login</button>
        </form>
       
      </div>
    </div>
  );
};

export default page;
