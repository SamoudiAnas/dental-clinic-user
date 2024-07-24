import { decode } from "jsonwebtoken";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PROTECTED_ROUTES = ["/my-appointment", "/new-appointment"];

export async function middleware(request: NextRequest) {
  // Check if user is authenticated
  const token = (request.cookies.get("token") ?? "") as string;

  // check if token is not expired
  if (token) {
    const decodedToken = decode(token);

    console.log(decodedToken);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/my-appointment/:path*", "/new-appointment/:path*"],
};
