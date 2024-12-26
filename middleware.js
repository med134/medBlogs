import { NextResponse } from "next/server";
import { auth } from "./auth";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

export default auth((req) => {
  console.log("come from auth", req.auth);
  // If the user is authenticated and trying to access the login page, redirect to home page
  if (req.auth && req.nextUrl.pathname === "/login") {
    const newUrl = new URL("/dashboard", req.nextUrl.origin);
    return NextResponse.redirect(newUrl);
  }
  return NextResponse.next();
});
