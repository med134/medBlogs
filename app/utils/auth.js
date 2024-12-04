import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import User from "@/app/module/User";
import connect from "./ConnectDB";
import { authConfig } from "./auth.config";
import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";

const login = async (credentials) => {
  try {
    connect();
    const user = await User.findOne({ email: credentials.email });

    if (!user) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
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
          console.log(user)
          return user;
        } catch (err) {
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
