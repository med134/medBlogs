import { NextResponse } from "next/server";
import { auth } from "./auth";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

