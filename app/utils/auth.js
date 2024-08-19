import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { connect } from "./ConnectMongo";
import User from "@/app/module/User";
import { authConfig } from "./auth.config";
export const {
  handlers: { POST, GET },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "github") {
        connect();
        try {
          const user = await User.findOne({ email: profile.email });
          if (!user) {
            const newUser = new User({
              name: profile.name,
              email: profile.email,
              imageUrl: profile.avatar_url,
              userSlug: profile.name.replace(/\s+/g, "-").toLowerCase(),
              isAdmin: true,
            });
            await newUser.save();
            console.log("user is created");
            Response.redirect(new URL("/dashboard"));
          }
        } catch (err) {
          console.log("this is the error auth new user", err.message);
          return true;
        }
      } else if (account.provider === "google") {
        connect();
        try {
          const user = await User.findOne({ email: profile.email });
          if (!user) {
            const newUser = new User({
              name: profile.name,
              email: profile.email,
              imageUrl: profile.picture,
              userSlug: profile.name.replace(/\s+/g, "-").toLowerCase(),
            });
            await newUser.save();
            console.log("user is created");
          }
        } catch (err) {
          console.log("error when created user", err.message);
        }
      }
      return true;
    },
    ...authConfig.callbacks,
  },
});
