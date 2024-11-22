export const authConfig = {
  page: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      console.log("this is token", token);
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
      }
      console.log("this is session", session);
      return session;
    },

    authorized({ auth, request }) {
      const user = auth?.user;
      console.log(auth);
      const EMAIL = process.env.ADMIN_EMAIL;
      const isOneBlog = request?.nextUrl?.pathname?.startsWith("/dashboard");
      const isOnLoginPage =
        request?.nextUrl?.pathname.startsWith("/login") ||
        request?.nextUrl?.pathname.startsWith("/create-account");
      const adminPages =
        request?.nextUrl?.pathname.startsWith("/dashboard/pending") ||
        request?.nextUrl?.pathname.startsWith("/dashboard/messages");

      if (adminPages && user?.email !== EMAIL) {
        return false;
      }
      if (isOneBlog && !user) {
        return Response.redirect(new URL("/login", request.nextUrl));
      }
      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/dashboard", request.nextUrl));
      }
      return true;
    },
  },
};
