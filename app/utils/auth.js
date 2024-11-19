import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { connect } from "./ConnectMongo";
import User from "@/app/module/User";
import { authConfig } from "./auth.config";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";

const login = async (credentials) => {
  try {
    connect();
    const user = await User.findOne({ email: credentials.email });

    if (!user) return "wrong credentials";

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) return "wrong password";

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
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          console.log("this is auth", user);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
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
