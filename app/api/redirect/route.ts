import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Settings } from "@/lib/models/Settings";

export async function GET() {
  await connectDB();
  const settings = await Settings.findOne();
  return NextResponse.json({ redirectUrl: settings?.redirectUrl || "" });
}

export async function POST(req: Request) {
  await connectDB();
  const { redirectUrl } = await req.json();
  await Settings.findOneAndUpdate({}, { redirectUrl }, { upsert: true });
  return NextResponse.json({ success: true });
}
