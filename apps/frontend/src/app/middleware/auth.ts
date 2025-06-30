import { NextRequest, NextResponse } from "next/server";

import { getCurrentUserOrUndefined } from "@/entities/user";
import { decodeNextUrl } from "@/shared/lib/server/redirect";

import { AUTH_ROUTES, PROTECTED_ROUTES } from "../config/routes";

/**
 * @see https://nextjs.org/docs/app/guides/authentication#layouts-and-auth-checks
 */
export const createAuthMiddleware = () => async (request: NextRequest) => {
  const { pathname, search, searchParams } = request.nextUrl;

  const isProtectedRoute = PROTECTED_ROUTES.includes(pathname);
  const isAuthRoute = AUTH_ROUTES.includes(pathname);

  if (!isProtectedRoute && !isAuthRoute) {
    return NextResponse.next();
  }

  const currentUser = await getCurrentUserOrUndefined();

  if (isProtectedRoute && !currentUser) {
    const encodedNextUrl = encodeURIComponent(`${pathname}${search}`);
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", encodedNextUrl);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthRoute && currentUser) {
    const decodedNextUrl = decodeNextUrl(searchParams);
    return NextResponse.redirect(new URL(decodedNextUrl, request.url));
  }

  return NextResponse.next();
};
