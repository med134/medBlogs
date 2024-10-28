import React from "react";
import TransitionEffect from "@/app/components/TransitionEffect";
import Test from "../components/Test";

const Register = async () => {
  return (
    <>
      <TransitionEffect />
      <div className="flex w-full bg-white items-center justify-center dark:bg-dark py-32 p-16 md:block">
        <Test/>
      </div>
    </>
  );
};

export default Register;
