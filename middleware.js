export { default } from "next-auth/middleware";
export const config = {
  matcher: [
    "/dashboard/add-articles/:path*",
    "/dashboard/add-templates/:path*",
  ],
};
