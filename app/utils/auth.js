import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import User from "@/app/module/User";
import connect from "./ConnectDB";
import { authConfig } from "./auth.config";
import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";

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
        email: {
          label: "Email",
          name: "email",
          type: "email",
          placeholder: "Email",
        },
        password: {
          label: "Password",
          name: "password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        if (credentials === null) return null;
        try {
          const userAuth = await User.findOne({ email: credentials.email });
          if (!userAuth) throw new Error("Wrong email!");

          const isValidPassword = await bcrypt.compare(
            credentials.password,
            userAuth.password
          );

          if (!isValidPassword) throw new Error("Wrong password");
          return userAuth;
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, profile }) {
      connect();
      try {
        const userAuth = await User.findOne({ email: profile?.email });
        if (!userAuth) {
          const newUser = new User({
            name: profile?.name || user?.name,
            email: profile?.email,
            imageUrl: profile?.avatar_url || profile?.picture,
          });
          await newUser.save();
        }
      } catch (err) {
        console.log("this is the error", err.message);
        return false;
      }
      return true;
    },
    ...authConfig.callbacks,
  },
});
