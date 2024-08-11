export { default } from "next-auth/middleware";
export const config = {
  matcher: [
    "/dashboard/add-articles/:path*",
    "/dashboard/add-templates/:path*",
    "/dashboard/users/:path*",
    "/dashboard/blogs/:path*",
    "/dashboard/pending/:path*",
  ],
};
