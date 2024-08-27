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
      console.log(user,auth);
      const isOneBlog = request?.nextUrl?.pathname?.startsWith("/dashboard");
      const isOnLoginPage = request?.nextUrl?.pathname.startsWith("/login");
      const adminUserPage =
        request?.nextUrl?.pathname.startsWith("/dashboard/users");

      const adminDraftBlog =
        request?.nextUrl?.pathname.startsWith("dashboard/pending");

      if (adminUserPage && user?.name != "MOHAMMED DAKIR") {
        return Response.redirect(new URL("/dashboard", request.nextUrl));
      }
      if (adminDraftBlog && user?.name != "MOHAMMED DAKIR") {
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
