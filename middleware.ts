import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    try {
      const dataPath = join(process.cwd(), "data.json");
      const { redirectUrl } = JSON.parse(readFileSync(dataPath, "utf-8"));
      if (redirectUrl) {
        return NextResponse.redirect(redirectUrl, 301);
      }
    } catch {}
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
