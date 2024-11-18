import Form from "next/form";
import { loginAuth } from "../utils/action";
import { useActionState } from "react";

const LoginForm = () => {
  return (
    <Form className="mt-4" action={loginAuth}>
      <div className="flex justify-center items-center">
        <input
          className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          type="email"
          placeholder="enter your email"
          name="email"
          required
        />
        <input
          className="w-full px-8 ml-2 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </div>
      <button
        type="submit"
        className="mt-5 tracking-wide font-semibold bg-[#2b7aa6] text-white-500 w-full py-2 rounded-lg hover:bg-[#2b9aa2] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
      >
        <span className="text-light">Login</span>
      </button>
    </Form>
  );
};
export default LoginForm;
