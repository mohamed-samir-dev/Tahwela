import { redirect } from "next/navigation";
import { readFileSync } from "fs";
import { join } from "path";

export const dynamic = "force-dynamic";

export default function Home() {
  const dataPath = join(process.cwd(), "data.json");
  const { redirectUrl } = JSON.parse(readFileSync(dataPath, "utf-8"));

  if (redirectUrl) {
    redirect(redirectUrl);
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-xl">لم يتم تحديد رابط التحويل بعد</p>
    </div>
  );
}
