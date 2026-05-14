import { readFileSync } from "fs";
import { join } from "path";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

async function getTargetMeta(url: string) {
  try {
    const res = await fetch(url, { next: { revalidate: 60 } });
    const html = await res.text();
    const getTag = (property: string) =>
      html.match(new RegExp(`<meta[^>]*property=["']${property}["'][^>]*content=["']([^"']*)["']`, "i"))?.[1] ||
      html.match(new RegExp(`<meta[^>]*content=["']([^"']*)["'][^>]*property=["']${property}["']`, "i"))?.[1];
    const title = getTag("og:title") || html.match(/<title>([^<]*)<\/title>/i)?.[1] || "";
    const description = getTag("og:description") || html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i)?.[1] || "";
    const image = getTag("og:image") || "";
    return { title, description, image };
  } catch {
    return { title: "", description: "", image: "" };
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const dataPath = join(process.cwd(), "data.json");
  const { redirectUrl } = JSON.parse(readFileSync(dataPath, "utf-8"));
  if (!redirectUrl) return {};
  const meta = await getTargetMeta(redirectUrl);
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: meta.image ? [meta.image] : [],
      url: redirectUrl,
    },
  };
}

export default function Home() {
  const dataPath = join(process.cwd(), "data.json");
  const { redirectUrl } = JSON.parse(readFileSync(dataPath, "utf-8"));

  if (!redirectUrl) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <p className="text-xl text-gray-700">لم يتم تحديد رابط التحويل بعد</p>
      </div>
    );
  }

  return (
    <meta httpEquiv="refresh" content={`0;url=${redirectUrl}`} />
  );
}
