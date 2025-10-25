import { NextResponse } from "next/server";

export const config = {
  matcher: ["/", "/login", "/register", "/dashboard/:path*"],
};

export function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;

  const publicAuthRoutes = ["/login", "/register"];

  // ✅ Handle root path redirection
  if (pathname === "/") {
    if (token) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    } else {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // ✅ If visiting login/register but already logged in → redirect to dashboard
  if (publicAuthRoutes.some((p) => pathname.startsWith(p))) {
    if (token) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    return NextResponse.next();
  }

  // ✅ If visiting dashboard but no token → redirect to login
  if (pathname.startsWith("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}
