import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { connect } from "./ConnectMongo";
import User from "@/app/module/User";
import { authConfig } from "./auth.config";
import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
const login = async (credentials) => {
  try {
    connect();
    const user = await User.findOne({ name: credentials.name });

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
      credentials: {
        name: {},
        password: {},
      },
      async authorize(credentials) {
        let user = null;
        try {
          user = await User.findOne(credentials.name, password);
          if (!user) {
            throw new Error("User not found.");
          }
          console.log("this is user login", user);
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
            id: user.id,
            name: profile.login || user.name,
            email: profile.email,
            imageUrl: profile.avatar_url || profile.picture,
            isAdmin: false,
          });
          await newUser.save();
          console.log("user is created");
        }
      } catch (err) {
        console.log("this is the error auth new user", err.message);
      }
      return true;
    },
    ...authConfig.callbacks,
  },
});
