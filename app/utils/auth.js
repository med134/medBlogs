import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { connect } from "./ConnectMongo";
import User from "@/app/module/User";
import { authConfig } from "./auth.config";
import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";

const login = async (credentials) => {
  let user = null;
  try {
    connect();
    user = await User.findOne({ email: credentials?.email });
    if (!user) {
      return "wrong credentials";
    } else {
      const isPasswordCorrect = await bcrypt.compare(
        credentials?.password,
        user.password
      );
      if (!isPasswordCorrect) return "wrong password";
    }
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
  return user;
};

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
          const user = await login(credentials);
          if (user) {
            console.log("this is auth", user);
            return user;
          }
        } catch (err) {
          console.log(err.message);
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, profile }) {
      connect();
      try {
        const userAuth = await User.findOne({ email: profile.email });
        if (!userAuth) {
          const newUser = new User({
            name: profile.name || user.name,
            email: profile.email,
            imageUrl: profile.avatar_url || profile.picture,
          });
          await newUser.save();
          console.log("user is created");
        }
      } catch (err) {
        console.log("this is the error", err.message);
      }
      return true;
    },
    ...authConfig.callbacks,
  },
});
