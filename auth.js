import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import User from "@/app/module/User";
import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import connect from "./app/utils/ConnectDB";
import { authConfig } from "./auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub,
    Google,
    Credentials({
      credentials: {
        email: { name: "email" },
        password: { name: "password" },
      },
      async authorize(credentials) {
        try {
          await connect();
          const user = await User.findOne({ email: credentials.email });
          if (!user) return null;
          const isPass = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!isPass) return "password is not correct";
          return user;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  ...authConfig.callbacks,
});
