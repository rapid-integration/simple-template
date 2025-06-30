import { NextRequest, NextResponse } from "next/server";

import { getCurrentUser } from "@/entities/user";
import { decodeNextUrl } from "@/shared/lib/redirect";

import { AUTH_ROUTES, PROTECTED_ROUTES } from "../config/routes";

export const createAuthMiddleware = () => async (request: NextRequest) => {
  const { pathname, search, searchParams } = request.nextUrl;

  const isProtectedRoute = PROTECTED_ROUTES.includes(pathname);
  const isAuthRoute = AUTH_ROUTES.includes(pathname);

  const { response } = await getCurrentUser();

  if (isProtectedRoute && !response.ok) {
    const encodedNextUrl = encodeURIComponent(`${pathname}${search}`);
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", encodedNextUrl);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthRoute && response.ok) {
    const decodedNextUrl = decodeNextUrl(searchParams);
    return NextResponse.redirect(new URL(decodedNextUrl, request.url));
  }

  return NextResponse.next();
};
