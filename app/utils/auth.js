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
  providers: [GitHub, Google],
  callbacks: {
    async signIn({ user, account, profile }) {
      connect();
      try {
        const user = await User.findOne({ email: profile.email });
        if (!user) {
          const newUser = new User({
            id: profile.id,
            name: profile.login,
            email: profile.email,
            imageUrl: profile.avatar_url,
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
