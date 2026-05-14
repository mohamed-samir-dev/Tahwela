import { redirect } from "next/navigation";
import { connectDB } from "@/lib/mongodb";
import { Settings } from "@/lib/models/Settings";

export const dynamic = "force-dynamic";

export default async function Home() {
  await connectDB();
  const settings = await Settings.findOne();

  if (settings?.redirectUrl) {
    redirect(settings.redirectUrl);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <p className="text-xl text-gray-700">لم يتم تحديد رابط التحويل بعد</p>
    </div>
  );
}
