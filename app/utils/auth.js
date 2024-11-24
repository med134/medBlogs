import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { connect } from "./ConnectMongo";
import User from "@/app/module/User";
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
      async authorize(credentials) {
        try {
          await connect();
          const user = await User.findOne({ email: credentials.email });
          if (!user) return null;
          const isPass = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!isPass) return null;
          return user;
        } catch (error) {
          console.log(error);
          return null;
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
