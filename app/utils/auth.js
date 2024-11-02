import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { connect } from "./ConnectMongo";
import User from "@/app/module/User";
import { authConfig } from "./auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [GitHub, Google],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("this is auth", profile);
      connect();
      try {
        const userAuth = await User.findOne({ email: profile.email });
        if (!userAuth) {
          const newUser = new User({
            name: profile.login || user.name,
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
