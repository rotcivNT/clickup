import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/"],
  afterAuth: (auth, req, res) => {
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
    if (auth.userId && !auth.orgId && auth.isPublicRoute) {
      const redirectURL = new URL("/dashboard", req.url);
      return NextResponse.redirect(redirectURL);
    }
    if (auth.userId && auth.orgId && auth.isPublicRoute) {
      const redirectURL = new URL(`/workspace/${auth.orgId}`, req.url);
      return NextResponse.redirect(redirectURL);
    }
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
