import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";

import { getSession } from "@/shared/api/auth";
import { decodeNextUrl } from "@/shared/lib/redirect";

const protectedRoutes = ["/", "/profile", "/profile/edit"];
const authRoutes = ["/login", "/register"];

export async function middleware(request: NextRequest) {
  const { pathname, search, searchParams } = request.nextUrl;

  const isProtectedRoute = protectedRoutes.includes(pathname);
  const isAuthRoute = authRoutes.includes(pathname);

  const session = await getSession();

  if (isProtectedRoute && !session) {
    const encodedNextUrl = encodeURIComponent(`${pathname}${search}`);
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", encodedNextUrl);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthRoute && session) {
    const decodedNextUrl = decodeNextUrl(searchParams);
    return NextResponse.redirect(new URL(decodedNextUrl, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
} as const satisfies MiddlewareConfig;
