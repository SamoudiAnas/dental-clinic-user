import { decode } from "jsonwebtoken";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DecodedToken } from "./typings/interface";

const redirectToLogin = (request: NextRequest) => {
  const url = request.nextUrl.clone();
  url.pathname = "/login";
  return NextResponse.rewrite(url);
};

export async function middleware(request: NextRequest) {
  // Check if user is authenticated
  const token = localStorage.getItem("token");

  // check if token is not expired
  if (token) {
    const decodedToken = decode(token) as DecodedToken | null;

    // check if the token is expired
    if (decodedToken?.exp && decodedToken?.exp < Date.now() / 1000) {
      return redirectToLogin(request);
    }

    return NextResponse.next();
  }

  return redirectToLogin(request);
}

export const config = {
  matcher: ["/my-appointments/:path*", "/new-appointment/:path*"],
};
