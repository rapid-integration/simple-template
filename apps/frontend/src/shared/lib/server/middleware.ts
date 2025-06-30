import { NextMiddleware, NextResponse } from "next/server";

export function chainMiddlewares(
  functions: ((middleware: NextMiddleware) => NextMiddleware)[] = [],
  index = 0,
): NextMiddleware {
  const current = functions[index];
  if (current) {
    const next = chainMiddlewares(functions, index + 1);
    return current(next);
  }
  return () => NextResponse.next();
}
