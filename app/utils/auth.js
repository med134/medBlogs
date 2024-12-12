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
        email: {},
        password: {},
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
          console.log("user auth", userAuth);
          return userAuth;
        } catch (error) {
          console.log("this is credentials error22", error.message);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, profile }) {
      connect();
      try {
        const user = await User.findOne({ email: user?.email });
        if (!user) {
          const newUser = new User({
            name: profile?.name,
            email: profile?.email,
            imageUrl: profile?.avatar_url || profile?.picture,
          });
          await newUser.save();
        } else {
          return user;
        }
      } catch (err) {
        console.log("this is the error", err.message);
        return false;
      }
      return true;
    },
  },
  ...authConfig.callbacks,
});
