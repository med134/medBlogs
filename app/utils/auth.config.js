export const authConfig = {
  page: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
        token.userSlug = user.userSlug;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
        session.user.userSlug = token.userSlug;
      }
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;
      const isOneBlog = request?.nextUrl?.pathname?.startsWith("/dashboard");
      const adminUserPage = request?.nextUrl?.pathname === "/dashboard/users";
      const isOnLoginPage = request?.nextUrl?.pathname.startsWith("/login");
      const EMAIL = "mohamed7dakir@gmail.com";

      if (adminUserPage && user?.email !== EMAIL) {
        return Response.redirect(new URL("/dashboard", request.nextUrl));
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
