import { decode } from "jsonwebtoken";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DecodedToken } from "./typings/interface";

const redirectToLogin = (request: NextRequest) => {
  const url = request.nextUrl.clone();
  const returnTo = encodeURIComponent(request.nextUrl.pathname);
  url.pathname = "/login";
  url.searchParams.set("returnTo", returnTo);
  return NextResponse.redirect(url);
};

export async function middleware(request: NextRequest) {
  try {
    const token = request.cookies.get("token");

    if (token) {
      const decodedToken = decode(token.value) as DecodedToken | null;

      // check if the token is expired
      if (decodedToken?.exp && decodedToken?.exp < Date.now() / 1000) {
        return redirectToLogin(request);
      }

      return NextResponse.next();
    }
    console.log("No token found");

    return redirectToLogin(request);
  } catch (error: any) {
    console.log("Error", error?.message);
  }
}

export const config = {
  matcher: ["/my-appointments/:path*", "/new-appointment/:path*"],
};
