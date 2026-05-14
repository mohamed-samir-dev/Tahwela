import { NextResponse } from "next/server";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const dataPath = join(process.cwd(), "data.json");

export async function GET() {
  const data = JSON.parse(readFileSync(dataPath, "utf-8"));
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const { redirectUrl } = await req.json();
  writeFileSync(dataPath, JSON.stringify({ redirectUrl }));
  return NextResponse.json({ success: true });
}
