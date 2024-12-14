export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.image = user.imageUrl;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.image;
      }
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;

      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/dashboard");
      const isLogIn = request.nextUrl?.pathname.startsWith("/login");
      if (isOnAdminPanel && !user) {
        return Response.redirect(new URL("/login", request.nextUrl));
      }
      if (isLogIn && user) {
        return Response.redirect(new URL("/dashboard", request.nextUrl));
      }
      return true;
    },
  },
};
