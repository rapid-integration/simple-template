import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function redirectNext(fallback: string = "/") {
  "use server";

  const safeNextUrl = await getNextUrl(fallback);

  return redirect(safeNextUrl);
}

export async function getNextUrl(fallback: string = "/") {
  "use server";

  const heads = await headers();
  const referer = heads.get("referer");

  if (referer) {
    const refererUrl = new URL(referer);
    return decodeNextUrl(refererUrl.searchParams, fallback);
  }

  return fallback;
}

export function decodeNextUrl(
  searchParams: URLSearchParams,
  fallback: string = "/",
) {
  const encodedNextUrl = searchParams.get("next");

  if (encodedNextUrl) {
    const decodedNextUrl = decodeURIComponent(encodedNextUrl);
    const isSafeNextUrl = decodedNextUrl.startsWith("/");
    return isSafeNextUrl ? decodedNextUrl : fallback;
  }

  return fallback;
}
