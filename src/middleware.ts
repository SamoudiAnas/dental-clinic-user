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
  console.log("All cookies:", request.cookies.getAll());

  const token = request.cookies.get("token");
  console.log("Token", token);

  if (token) {
    const decodedToken = decode(token.value) as DecodedToken | null;
    console.log("Decoded Token", decodedToken);

    // check if the token is expired
    if (decodedToken?.exp && decodedToken?.exp < Date.now() / 1000) {
      console.log("Token expired");

      return redirectToLogin(request);
    }

    return NextResponse.next();
  }
  console.log("No token found");

  return redirectToLogin(request);
}

export const config = {
  matcher: ["/my-appointments/:path*", "/new-appointment/:path*"],
};
